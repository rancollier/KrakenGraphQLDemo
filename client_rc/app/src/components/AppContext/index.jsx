import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();
const AppStateProvider = props => {
    const [primaryNavDrawerShow, setPrimaryNavDrawerShow] = useState(false);
    const [allProducts, setAllProducts] = useState({});
    const updateOneProduct = (product={}) => {
        setAllProducts({
            ...allProducts,
            [product.id]: product,
        });
    }

    const updateAllProducts = (products=[]) => {
        if(products.length) {
            const prodObj = products.reduce( (acc, value, index) => {
                if(value.id){
                    acc[value.id]= value;
                }
                return acc;
            }, [])
            setAllProducts({...allProducts, ...prodObj});
        }
    } 

    const values = { primaryNavDrawerShow, setPrimaryNavDrawerShow, allProducts, updateAllProducts, updateOneProduct};
    return (
        <AppStateContext.Provider value={values}>
            {props.children}
        </AppStateContext.Provider>
    );
};

export const AppStateConsumer = () => useContext(AppStateContext);

export default AppStateProvider;
