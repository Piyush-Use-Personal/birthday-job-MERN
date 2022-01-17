const Responser = require("../../lib/Responser");
const EmailTemplate = require("../../config/database/mongoose/models/EmailTemplate");
const { NoDataAvailable } = require("../../lib/ErrorHandler");

const getTemplates = async (req, res) => {
    try {
        const data = await EmailTemplate.find().lean()
        if (data.length) {
            return Responser.success(
                200,
                "data fetched",
                data,
                res
            );
        } else {
            NoDataAvailable()
        }
    } catch (error) {
        __logger.error(error.toString());
        return Responser.failed(error, req, res, next);
    }
}

module.exports = {
    getTemplates
}