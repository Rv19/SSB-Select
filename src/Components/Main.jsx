import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Whyssb from './Whyssb';
import Whywe from './Whywe';
import Entries from './Entries';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/entries" component={Entries} />
    <Route path="/whywe" component={Whywe} />
    <Route path="/whyssb" component={Whyssb} />
   
  </Switch>
)

export default Main;