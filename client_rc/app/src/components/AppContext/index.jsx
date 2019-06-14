import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();
const AppStateProvider = props => {
    const [primaryNavDrawerShow, setPrimaryNavDrawerShow] = useState(false);
    const values = { primaryNavDrawerShow, setPrimaryNavDrawerShow };
    return (
        <AppStateContext.Provider value={values}>
            {props.children}
        </AppStateContext.Provider>
    );
};

export const AppStateConsumer = () => useContext(AppStateContext);

export default AppStateProvider;
