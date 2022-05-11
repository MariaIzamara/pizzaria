const { StatusCodes } = require("http-status-codes");
const { EnderecoService } = require("../../services");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../../utils");
const yup = require("yup");

module.exports = {
    novo: async (req, res) =>{
        try{
            const schema = yup.object().shape({
                cep: yup.string().required(),
                bairro: yup.string().required(),
                rua: yup.string().required(),
                numero: yup.number().required(),
                complemento: yup.string(),
            });

            await schema.validate(req.body, {
                stripUnknown: true,
              });

            const [scheme, token]  = req.headers.authorization.split(" ");
            const { idCliente, cep, bairro, rua, numero, complemento } = req.body;

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);
            
            const response = await EnderecoService.novo(logged_user.id, cep, bairro, rua, numero, complemento);
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