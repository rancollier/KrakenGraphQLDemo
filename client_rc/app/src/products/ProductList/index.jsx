import React, { Fragment } from "react";
import Api from "../../components/api";
import urls from "../../components/api/url";
import { Link, Switch, Route } from "react-router-dom";
import { H1 } from "../../components/syles/typography";
import Paper from "../../components/layout/paper";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            items: []
        };
        console.log("prods from products",props)
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
       
        const url =  (this.props.match.path === "/protectedProducts")?  urls.pretectedProds(): urls.products();
        
        this.setState({ isFetching: true });
        Api.get(url).then(response => {
            console.log(response);
            this.setState({
                isFetching: false,
                items: response.data
            });
            return response;
        });
    };
    render() {
        const path = this.props.match.path;
        return (
            <Fragment>
                <Paper>
                    {this.state.isFetching && <H1>is fetching</H1>}
                    {!this.state.isFetching && <H1>is not fetching</H1>}
                    {this.state.items.length &&
                        this.state.items.map((product, index) => {
                            return (<div key={product.id}>
                            <Link to={`${path}/${product.id}`} >{product.title} </Link>
                            </div>);
                        })}
                </Paper>
            </Fragment>
        );
    }
}

export default Products;
