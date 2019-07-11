import React from "react";
import Form from "./form";
import Paper from "../../components/layout/paper";

import gql from "graphql-tag";
import { Mutation, Compose, Query } from "react-apollo";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        const isNew = props.match.path.includes("/new") ? true : false;
        console.log(props)
        const product = (isNew) ? {} : props.query.product;

        this.state = {
            isNew,
            product
        };
    }

    handleChange = evt => {
        console.log(evt);
        const field = evt.target.name;
        const value = evt.target.value;
        this.setState({ product: { ...this.state.product, [field]: value } });
    };

    handleSave = () => {
        debugger;
        console.log("save",this.props)
        this.props.saveProducty({title:"abc"})
    }
    render() {
        console.log(this.props);
        return (
            <Paper>
                <div>
                    {this.state.isNew && <span>Crete a new </span>}product
                </div>
                <Form
                    product={this.state.product}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}
                />
            </Paper>
        );
    }
}

const ADD_PRODUCT = gql`
    mutation AddProduct($title: String!) {
        addProduct(title: $title) {
            id
            title
        }
    }
`;

const GET_PRODUCT_BY_ID = gql`
    query Product($productId: String!) {
        product(id: $productId) {
            title
            description
            eqpStatus
            cost
        }
    }
`;

const Provider = props => {
    const productId = props.match.params.id;
    return (
        <Query query={GET_PRODUCT_BY_ID} variables={{ productId }}>
            {({ loading, error, data }) => {
                const product = data
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                    <Mutation mutation={ADD_PRODUCT}>

                        { (addProduct, error, {data} ) => (
                            <ProductDetail
                                {...props}
                                data={data}
                                query={product}
                                loading={loading}
                                addProduct={addProduct}
                                
                            />
                        )}
                    </Mutation>
                );
            }}
        </Query>
    );
};
export default Provider;
