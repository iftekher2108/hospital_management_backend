module.exports = function paginatePlugin(schema) {
  schema.statics.paginate = async function ({page=1, limit=10, filter={}, populate=null}) {
    // count first so we can clamp page and compute totalPages
    const total = await this.countDocuments(filter);
    const totalPages = total === 0 ? 0 : Math.ceil(total / limit);
    const currentPage = totalPages === 0 ? 1 : Math.max(1, Math.min(page, totalPages));
    const skip = (currentPage - 1) * limit;
    const populates = [];
    let results = null;
    if(populate) {
      populate.forEach(pop => {
        populates.push(pop);
      });
      results = await this.find(filter).skip(skip).limit(limit).populate(populates).lean();
    } else {
      results = await this.find(filter).skip(skip).limit(limit).lean();
    }

    // Rehydrate and apply schema toJSON transforms
    const data = Array.isArray(results)
      ? results.map(r => this.hydrate(r).toJSON())
      : (results ? this.hydrate(results).toJSON() : results);

    const hasNextPage = totalPages > 0 && currentPage < totalPages;
    const hasPrevPage = currentPage > 1;
    const nextPage = hasNextPage ? currentPage + 1 : null;
    const prevPage = hasPrevPage ? currentPage - 1 : null;

    return {
      page: currentPage,
      limit,
      total,
      totalPages,
      hasNextPage,
      hasPrevPage,
      nextPage,
      prevPage,
      data
    };
  };
};