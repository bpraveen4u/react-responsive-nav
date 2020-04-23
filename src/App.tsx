import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  sideDrawerOpen: any
}

class App extends React.Component<AppProps, AppState> {
  
  constructor(props: any) {
    super(props)
  
    this.state = {
      sideDrawerOpen: false
    }
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false})
  }

  render() {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>this is page content!</p>
        </main>
      
      </div>
    )
  }
}

// function App() {

//   function drawerToggleClickHandlerr() {

//   }

//   return (
//     <div style={{height: '100%'}}>
//       <Toolbar/>
//       <SideDrawer/>
//       <Backdrop />
//       <main style={{marginTop: '64px'}}>
//         <p>this is page content!</p>
//       </main>
      
//     </div>
//   );
// }

export default App;
