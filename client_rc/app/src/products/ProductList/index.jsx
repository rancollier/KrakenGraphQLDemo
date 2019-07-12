import React, { Fragment } from "react";
import Api from "../../components/api";
import urls from "../../components/api/url";
import { Link } from "react-router-dom";
import { H1 } from "../../components/syles/typography";
import Paper from "../../components/layout/paper";
import Loader from "./loader"
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            isFetched: false,
            items: [],
            fetchMethods: { fetchUsers: this.fetchUsers
            }
           
        };
     
    }

    // componentDidMount() {
    //     this.fetchUsers();
    // }

    fetchUsers = () => {
       
        const url =  (this.props.match.path === "/protectedProducts")?  urls.pretectedProds(): urls.products();
        
        this.setState({ isFetching: true });
        Api.get(url).then(response => {

            console.log("look",response);
            this.setState({
                isFetching: false,
                isFetched: true,
                items: response.data
            });
            return response;
        });
    };
    render() {
        const path = this.props.match.path;
        console.log("no GRAPHQL")
        return (
            <Loader  options={{fetchList:["fetchUsers"]}} isFetching={this.state.isFetching} isFetched={this.state.isFetched} fetchMethods={this.state.fetchMethods}>
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
            </Loader>
        );
    }
}

export default Products;
