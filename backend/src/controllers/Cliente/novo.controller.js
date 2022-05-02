const { StatusCodes } = require("http-status-codes");
const { ClienteService } = require("../../services");
const yup = require("yup");

module.exports = {
    novo: async (req, res) =>{
        try{
            const schema = yup.object().shape({
                nome: yup.string().required(),
                cpf: yup.string().required(),
                email: yup.string().required(),
                telefone: yup.string().required(),
                senha: yup.string().required(),
            });

            await schema.validate(req.body, {
                stripUnknown: true,
              });

            const { nome, cpf, email, telefone, senha } = req.body;
            const response = await ClienteService.novo(nome, cpf, email, telefone, senha);
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