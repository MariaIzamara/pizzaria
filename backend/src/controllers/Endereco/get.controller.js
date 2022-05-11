const { StatusCodes } = require("http-status-codes")
const { EnderecoService } = require("../../services")
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../../utils");

module.exports = {
    get: async (req, res) => {
        try {
            const [scheme, token]  = req.headers.authorization.split(" ");

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);

            const response = await EnderecoService.get(logged_user.id)
            return res.status(StatusCodes.OK).json(response)
        } catch (error) {
            console.error(error)
            return res.status(
                error.name == "ValidationError"
                    ? StatusCodes.UNPROCESSABLE_ENTITY
                    : error.status || StatusCodes.INTERNAL_SERVER_ERROR
            ).json(error.message)
        }
    }
}