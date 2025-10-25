const mongoose = require('mongoose')
const toJSONPlugin = require('../plugins/toJSON.plugin')

const settingSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        value: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

settingSchema.plugin(toJSONPlugin)

module.exports = mongoose.model("Setting", settingSchema);
