import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Form from './Form'

class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <div className="banner-text">
            <img
              src="aqaqaqa.png"
              alt="avatar"
              className="avatar-img"
              />



          <div className="trial">
          <p>Fill the Form to join Batch </p>
            <Form/>
        </div>
            </div>
        
          </Cell>
        </Grid>
      </div>
        )
   }
}
export default Landingpage;