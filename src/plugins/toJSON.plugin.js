// Global mongoose plugin to normalize JSON output for all schemas.
// - removes __v
// - replaces _id with id
module.exports = function toJSONPlugin(schema) {
  schema.options.toJSON = schema.options.toJSON || {};

  const existingTransform = schema.options.toJSON.transform;

  schema.options.toJSON.transform = function (doc, ret, options) {
    // apply any existing transform first (if it returns a value, prefer it)
    if (typeof existingTransform === "function") {
      const transformed = existingTransform(doc, ret, options);
      // if transform returned a replacement object, use it
      if (transformed && typeof transformed === "object") {
        ret = transformed;
      }
    }

    if (ret && typeof ret === "object") {
      // remove mongoose version key
      if (Object.prototype.hasOwnProperty.call(ret, "__v")) {
        delete ret.__v;
      }

      // normalize _id -> id
      if (Object.prototype.hasOwnProperty.call(ret, "_id")) {
        ret.id = ret._id;
        delete ret._id;
      }

      // your user-specific logic
      delete ret.password;
      delete ret.verificationToken;
      delete ret.resetPasswordToken;
      delete ret.resetPasswordExpires;

      // 🪄 Move id to the first position
      if (ret.id !== undefined) {
        // Reorder keys: id first, then others
        ret = Object.assign({ id: ret.id }, ret);
      }
    }

    return ret;
  };
};
