import React from "react"
import useHttp from "../../hooks/useHttp"
import { useEffect } from "react"
import { requestConfigPromotions, requestConfigFoods, requestConfigDrinks } from "../../Utils/requestsConfigs"

const MenuSection = (props) => {

    const { loading, error, data, sendRequest } = useHttp('');

    useEffect(() => {
        let requestConfig = {}
        if(props.type === "Promoções") {
            requestConfig = requestConfigPromotions;
        } else if (props.type === "Comidas") {
            requestConfig = requestConfigFoods;
        } else {
            requestConfig = requestConfigDrinks;
        }
        sendRequest(requestConfig);
        if(error) {
            console.log(error);
            return;
        }
        console.log(data)
    }, [])

    useEffect(() => {
        const loadedItems = []
        console.log(data)
        for(const item in data) {
            loadedItems.push ({
            "id": data[item].id,
            "tipo": data[item].tipo,
            "nome": data[item].nome,
            "descricao": data[item].descricao,
            "preco": data[item].preco,
            "imagem": data[item].imagem,
            })
        }
        console.log(loadedItems)
    }, [data])
    
    return (
        <>
            <h1>{props.type}</h1>
        </>
    )
}

export default MenuSection