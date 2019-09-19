import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import './App.css';
import { CSSTransition,TransitionGroup,} from 'react-transition-group';
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home";
import Activities from "./components/Activities/Activities";



function App() {
  return (
    <div className="App">
     
 <BrowserRouter>
     <div>
        <NavBar/>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/" component={Home} exact/>
                  <Route path="/activities" component={Activities}/>
                 </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          
      </div>
  
    </BrowserRouter>
   
    </div>
    
    
  );
}

export default App;
