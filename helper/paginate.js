exports.paginate = async (req, model, populateOptions=null) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;  // per page
    const skip = (page - 1) * limit;                // docs to skip
    let query = model.find().lean().skip(skip).limit(limit);
    // Normalize populate options to an array
    let populates = [];
    if (populateOptions) {
        populates = Array.isArray(populateOptions) ? populateOptions.slice() : [populateOptions];
    }

    // Allow runtime override via query param:
    // ?populate=field1,field2  OR ?populate=["field1","field2"] (JSON)
    if (req.query.populate) {
        try {
            const parsed = JSON.parse(req.query.populate);
            if (Array.isArray(parsed)) populates = populates.concat(parsed);
            else populates.push(parsed);
        } catch (err) {
            // treat as comma-separated list
            populates = populates.concat(req.query.populate.split(',').map(s => s.trim()).filter(Boolean));
        }
    }

    // Apply each populate entry (string or object)
    populates.forEach(p => {
        query = query.populate(p);
    });

    const results = await query;
    const total = await model.countDocuments();
    return {
        page,
        limit,
        total,
        data: results
    }
};