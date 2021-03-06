import React, { useContext } from "react";
import logo from "./logo.svg";
import AppRouter from "./routes";
import ResizeContext from "./components/DocumentSizeListener";
import AppStateProvider, {AppStateConsumer} from "./components/AppContext"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import "./App.css";


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

const graphqlClient = new ApolloClient({}); //default configuration where Apollo expects to find the graphql servers in /graphql

function App() {
    try{
        console.log('try')
        console.log(process, process.env);
    }
    catch(err) {
        console.log(err)
    }

    const { primaryNavDrawerShow, setPrimaryNavDrawerShow } = AppStateConsumer();
 
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <AppRouter /> 
            </MuiThemeProvider>
        </div>
        
    );
}


const CustomProviders = () => {
    return (
      <ApolloProvider client={graphqlClient}>
        <ResizeContext>
          <AppStateProvider>
            <App/>
          </AppStateProvider>
        </ResizeContext>
      </ApolloProvider>
    )
            
}
export default CustomProviders;
