import React from "react"
import useHttp from "../../hooks/useHttp"
import Item from "./Item"
import { useEffect, useState } from "react"
import { requestConfigPromotions, requestConfigFoods, requestConfigDrinks } from "../../Utils/requestsConfigs"

const MenuSection = (props) => {

    const { loading, error, data, sendRequest } = useHttp('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        let requestConfig = {}
        if (props.type === "Promoções") {
            requestConfig = requestConfigPromotions;
        } else if (props.type === "Comidas") {
            requestConfig = requestConfigFoods;
        } else {
            requestConfig = requestConfigDrinks;
        }
        sendRequest(requestConfig);
        if (error) {
            console.log(error);
            return;
        }
    }, [])

    useEffect(() => {
        const loadedItems = []
        for (const item in data.rows) {
            loadedItems.push({
                "id": data.rows[item].id,
                "tipo": data.rows[item].tipo,
                "nome": data.rows[item].nome,
                "descricao": data.rows[item].descricao,
                "preco": data.rows[item].preco,
                "imagem": data.rows[item].imagem,
            })
        }
        setItems(loadedItems)
        console.log(items)
    }, [data])

    const itemsList = items.map((item) => (
        <Item 
            key={item.id} 
            id={item.id} 
            name={item.nome} 
            description={item.descricao} 
            price={item.preco}
        />
    ))

    return (
        <>
            <h1>{props.type}</h1>
            <ul>{itemsList}</ul>
        </>
    )
}

export default MenuSection