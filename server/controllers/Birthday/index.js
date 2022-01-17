const Responser = require("../../lib/Responser");
const Birthday = require("../../config/database/mongoose/models/Birthday");
const { NoDataAvailable } = require("../../lib/ErrorHandler");

const saveBirthday = async (req, res, next) => {
    try {
        const { name, email, dob, template } = req.body
        const birthday = new Birthday({
            name,
            email,
            dob,
            template
        })
        await birthday.save()
        return Responser.success(
            200,
            "data fetched",
            birthday,
            res
        );
    } catch (error) {
        __logger.error(error.toString());
        return Responser.failed(error, req, res, next);
    }
}

const getBirthday = async (req, res, next) => {
    try {
        const data = await Birthday.find().lean()
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
    getBirthday,
    saveBirthday
}