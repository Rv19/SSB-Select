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
          <div class="but p-3 ">
          <a class="btn btn-primary but" style={{width:'100%',height:'30px'}} href="https://tny.sh/OnlineCourse" target="_blank" role="button">Free Udemy Course</a>
             </div>
             <div class="pr-3 pl-3 ">
                  <a class="btn btn-primary but" style={{width:'100%',height:'30px'}} href="https://www.youtube.com/watch?v=wmlJPMYPB9g" target="_blank" role="button">OIR Series</a>
            </div>
            
            <img
              src="aqaqaq.png"
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