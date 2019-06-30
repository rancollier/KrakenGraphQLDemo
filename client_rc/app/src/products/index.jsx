import React, { Fragment } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import { Link, Switch, Route } from "react-router-dom";

const routes = props => {
    const match = props.match;
    console.log(props.url)
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    
                    // render={props=><ProductList {...props}/>}
                    component={ProductList}
                    
                    {...props}
                />

                <Route path={`${match.path}/:id`} component={ProductDetail} />
            </Switch>
        </Fragment>
    );
};
export default routes;
