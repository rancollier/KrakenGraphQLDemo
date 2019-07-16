import React, { createContext, useContext, useEffect } from "react";
import { AppStateConsumer } from "../AppContext";
export const WebSocketsContext = createContext();
const WS_UPDATE_PRODUCTS = "updateProducts";
const WS_UPDATE_PRODUCT = "updateProuct";
const WS_HELLO = "hello";
const WS_LOGGED_IN = "userLoggedIn";
const socket = require("socket.io-client")("/", {
    //   secure: true,
    //   rejectUnauthorized: false,
    path: "/chat/socket.io"
});


const WebSocketsProvider = props => {

    
    const { updateAllProducts, updateOneProduct} =AppStateConsumer()
    useEffect(() => {
        const wsConnect = ctx => {
            console.log("WSconnect");
        };
        socket.on("connect", wsConnect);
    }, []);
  
    const wsHello = data => {
        console.log(WS_HELLO, data);
    };
    socket.on(WS_HELLO, wsHello);

    const updateProducts = data => {
        console.log(WS_UPDATE_PRODUCTS, data);
        updateAllProducts(data)
    };
    socket.on(WS_UPDATE_PRODUCTS, updateProducts);

    socket.on(WS_LOGGED_IN, (msg)=>{
        console.error("get only once")
        alert(msg)
    })
    const updateProduct = data => {
        console.log(WS_UPDATE_PRODUCT, data);
        updateOneProduct(data.product)
    };
    socket.on(WS_UPDATE_PRODUCT, updateProduct);

    socket.on("broadcast", (data)=>{
        console.table({"broadcast": data})
    } )
    const wsDisconnect = ctx => {
        console.log("wsDisconnect");
    };
    socket.on("disconect", wsDisconnect);
    const emitILoggedIn= (name) =>{
        console.log('emit once WS_LOGGED_IN: ', WS_LOGGED_IN)
        return socket.emit(WS_LOGGED_IN, name)
    }
    const value = { socket, emitILoggedIn}
    return (
        <WebSocketsContext.Provider value={value}>
            {props.children}
        </WebSocketsContext.Provider>
    );
};



export const WebSocketsConsumer = () => useContext(WebSocketsContext);

export default WebSocketsProvider;
