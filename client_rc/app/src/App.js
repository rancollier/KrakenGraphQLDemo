import React from "react";
import AppRouter from "./routes";
import ResizeContext from "./components/DocumentSizeListener";
import AppStateProvider from "./components/AppContext"
import LoggedInProvider from "./components/UserLoginContext";
import WebSocketsProvider from "./components/WebSocketsContext";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import LoginStatus from "./components/UserLoginContext/LoginStatus";

import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createBrowserHistory } from "history"
import "./App.css";

const history = createBrowserHistory();
const theme = createMuiTheme({
    palette: {
      secondary: {
        main: blue[900]
      },
      primary: {
        main: indigo[700]
      }
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    }
  });

const graphqlClient = new ApolloClient({

}); //default configuration where Apollo expects to find the graphql servers in /graphql

function App() {
    try{
        console.log('try')
        console.log(process, process.env);
    }
    catch(err) {
        console.log(err)
    }

    // const { primaryNavDrawerShow, setPrimaryNavDrawerShow } = AppStateConsumer();
 
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <LoginStatus/>
                <AppRouter /> 
            </MuiThemeProvider>
        </div>
    );
}


const CustomProviders = () => {
    return (
      <Router history={history}>
        <ApolloProvider client={graphqlClient}>
          <ResizeContext>
            {/* <LoggedInProvider> */}
              <AppStateProvider>
                <WebSocketsProvider>
            
                  <App/>
                </WebSocketsProvider>
              </AppStateProvider>
            {/* </LoggedInProvider> */}
          </ResizeContext>
        </ApolloProvider>
      </Router>
    )   
}
export default CustomProviders;
