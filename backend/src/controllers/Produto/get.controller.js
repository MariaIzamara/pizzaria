const { StatusCodes } = require("http-status-codes")
const { ProdutoService } = require("../../services")

module.exports = {
    get: async (req, res) => {
        try {
            const tipo = req.params['tipo']
            const response = await ProdutoService.get(tipo)
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