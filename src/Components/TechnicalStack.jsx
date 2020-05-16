import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class TechnicalStack extends Component{
    render(){
        return(
            <div className="rows">
                <h3 className="headingdetails">Fill the Form on Home Page to Join Batch</h3>
                
            <Grid>
            <Cell col={6}>
              <div  className="col-xs-3" style={{textAlign:'center'}}>
              <img
                src="mock.png"
                alt="avatar"
                className="col-xs-3"
                style={{height: '500px',width:'300px',margin:'auto'}}
               />
            </div>
            <div style={{textAlign:'center'}}>
        <h1>Best Questions For SSB</h1>
            <h4 style={{color: 'grey'}}>Its Important to Feel the Time pressure Before Giving the SSB</h4>
             </div>
             <div classname="contact-gridr">
            <hr  style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
    
            <h5 style={{textAlign:'center'}}>Our Stack Includes</h5>

<h4 style={{textAlign:'center'}}><b>2 OIR Mock Tests</b></h4>

<h4 style={{textAlign:'center'}}><b>2 PPDT Mock Tests</b></h4>

<h4 style={{textAlign:'center'}}><b>3 WAT Mock Tests</b></h4>

<h4 style={{textAlign:'center'}}><b>3 SRT Mock Tests</b></h4>
<h4 style={{textAlign:'center'}}><b>To Take the Demo and Free Trial Mock Series Fill the Form and Prepare from the Best Content</b></h4>
        
            </div>
                </Cell>
                
                <Cell col={6}>
                <div className="rows">
           <h4> Stay Tuned For More Mock Test Series</h4>
              
           </div>
                </Cell>
         
            </Grid>
            </div>
        )
    }
}
export default TechnicalStack;

