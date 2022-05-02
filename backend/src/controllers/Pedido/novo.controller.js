const { StatusCodes } = require("http-status-codes");
const { PedidosService } = require("../../services");
const yup = require("yup");

module.exports = {
    novo: async (req, res) =>{
        try{
            const schema = yup.object().shape({
                idEndereco: yup.number().required(),
                produtos: yup.string().required(),
                precoFinal: yup.number().required(),
                comentario: yup.string().required(),
            });

            await schema.validate(req.body, {
                stripUnknown: true,
              });

            const { idEndereco, produtos, precoFinal, comentario } = req.body;
            const response = await PedidosService.novo(idEndereco, produtos, precoFinal, comentario);
            return res.status(StatusCodes.OK).json(response);
        }catch (error) {
            console.error(error);
            return res
              .status(
                error.name == "ValidationError"
                  ? StatusCodes.UNPROCESSABLE_ENTITY
                  : error.status || StatusCodes.INTERNAL_SERVER_ERROR
              )
              .json(error.message);
          }
    },
}