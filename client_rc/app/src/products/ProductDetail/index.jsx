import React from "react";
import Form from "./form";
import Paper from "../../components/layout/paper";

import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        const isNew = props.match.params.id ? false : true;
        const product = (isNew) ? {} : props.query.product;
        this.state = {
            isNew,
            product,
            eqpStatusSelect: props.query.eqpStatus
        };
    }
    
    handleChange = evt => {
        const field = evt.target.name;
        const value = evt.target.value;
        this.setState({ product: { ...this.state.product, [field]: value } });
    };

    handleCreate = () => {
        const cost =  parseFloat(this.state.product.cost, 2);
        this.props.addProduct({ variables: {...this.state.product, cost}})
    }

    handleSave = () => { 
        this.props.updateProduct({ variables: {...this.state.product}})
    }

    render() {
        return (
            <Paper>
                <div>
                    {this.state.isNew && <span>Crete a new </span>}product
                </div>
                <Form
                    isNew={this.state.isNew}
                    eqpStatusSelect={this.state.eqpStatusSelect}
                    product={this.state.product}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}
                    handleCreate={this.handleCreate}
                />
            </Paper>
        );
    }
}

const ADD_PRODUCT = gql`
    mutation AddProduct($title: String!, $description: String, $eqpStatus: String, $cost: Float, $version: String) {
        addProduct(title: $title, description: $description, eqpStatus: $eqpStatus, cost: $cost, version: $version ) {
            title
            description
            eqpStatus
            version
            cost
        }
    }
`;

const UPDATE_PRODUCT = gql`
    mutation UpdateProduct( $id: ID!, $title: String!, $description: String, $eqpStatus: String, $cost: Float, $version: String) {
        updateProduct(id: $id, title: $title, description: $description, eqpStatus: $eqpStatus, cost: $cost, version: $version ) {
            id
            title
            description
            eqpStatus
            version
            cost
        }
    }
`;

const GET_PRODUCT_BY_ID = gql`
    query Product($productId: ID!) {
        product(id: $productId) {
            id
            title
            description
            eqpStatus
            version
            cost
        },
        eqpStatus {
            displayName
            EQPStatus
        }
    }
`;
const GET_DATA_FOR_NEW_PRODUCT = gql`
    query {
        eqpStatus {
            displayName
            EQPStatus
        }
    }
`

const Provider = props => {
    const productId = props.match.path.includes("/new") ? "":props.match.params.id;
    const query = props.match.path.includes("/new") ? GET_DATA_FOR_NEW_PRODUCT : GET_PRODUCT_BY_ID;

    return (
        <Query 
            query={query}
            variables={{ productId }}
            // skip={props.match.path.includes("/new")}
        >
            {({ loading, error, data }) => {
                const productData = data
                
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                    <Mutation mutation={UPDATE_PRODUCT}>
                        {(updateProduct, ...stuff)=> {
                            console.log(stuff)
                            return ( <Mutation mutation={ADD_PRODUCT}>
                                {(addProduct, { data:addedProduct })=> (
                                    <ProductDetail
                                        {...props}
                                        data={data}
                                        // updatedProduct={updatedProduct}
                                        addedProduct={addedProduct}
                                        updateProduct={updateProduct}
                                        query={productData}
                                        loading={loading}
                                        addProduct={addProduct}
                                    />
                                )}
                            </Mutation>)    
                        }}
                    </Mutation>
                );
            }}
        </Query>
    );
};
export default Provider;
