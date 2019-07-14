import React, { createContext, useContext } from "react";

const ViewPortSizeContext = createContext();
 class ViewPortSizeProvider extends React.Component {
  state = {
    windowWidth:null,
    windowHeight:null,
    widthSize:null,
  };
  componentDidUpdate(prevProps, prevState) {
     if (prevState.windowWidth !== this.state.windowWidth || prevState.windowHeight !== this.state.windowHeight) {
         console.log(this.state.windowHeight, this.state.windowHeight)
     }
  }
  
  componentDidMount() {
      console.log('did mount')
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
  }
  


render() {
    return <ViewPortSizeContext.Provider value={this.state} >{this.props.children}</ViewPortSizeContext.Provider>
  }

}


export const usePortSizeConsumer = () => useContext(ViewPortSizeContext);
export default ViewPortSizeProvider;