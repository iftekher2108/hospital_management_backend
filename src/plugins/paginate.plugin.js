module.exports = function paginatePlugin(schema) {
  schema.statics.paginate = async function (page = 1, limit = 10, filter = {}) {
    const skip = (page - 1) * limit;
    const results = await this.find(filter).skip(skip).limit(limit).lean();

    // Rehydrate and apply schema toJSON transforms
    const data = Array.isArray(results)
      ? results.map(r => this.hydrate(r).toJSON())
      : (results ? this.hydrate(results).toJSON() : results);

    const total = await this.countDocuments(filter);
    return { page, limit, total, data };
  };
}