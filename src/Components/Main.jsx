import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Whyssb from './Whyssb';
import Whywe from './Whywe';
import Entries from './Entries';
import TechnicalStack from './TechnicalStack';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/entries" component={Entries} />
    <Route path="/whywe" component={Whywe} />
    <Route path="/whyssb" component={Whyssb} />
    <Route path="/mock" component={TechnicalStack} />
  </Switch>
)

export default Main;