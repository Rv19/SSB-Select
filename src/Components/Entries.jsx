import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Entries extends Component{
    render(){
       return(
           <div>
        <div className="stack-grid1">
        <h3> 10+2 Entries</h3>
            <div className="stack-grid2">
     <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}>
             
            
             
              
              <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(nda.webp) center / cover'}} >NDA</CardTitle>
              <div class ="back">

    <div class="back-content middle">
        <h2> NDA</h2>
        <div class="sm">
<b>Age:</b>16.5 to 19 Years<br/>
<b>Qualification :</b> 12th Class<br/>
<b>Martial Status :</b> Unmarried<br/>
<b>Notification :</b> May & Dec<br/>

        </div>
    </div>
</div>
            
            </Card>
            </div>

            <div className="stack-grid2">
     <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}>
             
            
             
              
              <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(TES.jpeg) center / cover'}} >TES</CardTitle>
              <div class ="back">

    <div class="back-content middle">
        <h2> TES</h2>
    
        <div class="sm">
        <b> Age :</b>16.5 to 19.5 Years<br/>
        <b>Qualification :</b> 12th Class(PCM Aggregate above 70%)<br/>
        <b>Martial Status : </b>Unmarried<br/>
        <b>Notification :</b> May & Nov <br/>
        </div>
    </div>
</div>
            
            </Card>
            </div>
            </div>
              <div className="stack-grid1">
              <h3> Graduate Entries</h3>
            <div className="stack-grid2">
             
     <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
              <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(CDS.jpeg) center / cover'}} >CDS</CardTitle>
              <div class ="back">

    <div class="back-content middle">
        <h2> CDS</h2>
      
        <div class="sm">
        <b>  Age :</b>19 to 24 Years<br/>
        <b>Qualification :</b> Graduate<br/>
        <b>Martial Status :</b> Unmarried<br/>
        <b>Notification :</b> Jun & Nov<br/>
        </div>
    </div>
</div> 
            </Card>
            </div>
           

            <div className="stack-grid2">
     <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}>
              <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(UES.jpeg) center / cover'}} >INET</CardTitle>
              <div class ="back">

    <div class="back-content middle">
        <h2> SSC</h2>
        <div class="sm">
        <b>  Age :</b>19 to 25 Years<br/>
        <b>Qualification :</b>  final and prefinal year of Engineers<br/>
        <b>Martial Status :</b>Unmarried<br/>
        <b>Notification :</b> Dec<br/>
        </div>
    </div>
</div>
            
            </Card>
            </div>

            <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(afcat.jpeg) center / cover'}} >Afact</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h2> AFCAT</h2>
                <div class="sm">
                <b>Age :</b> 20 to 24 years<br/>
               <b>Qualification : </b>Final and prefinal year of Engineers<br/>
               <b>Martial Status :</b> Unmarried<br/>
               <b>Notification :</b> Dec<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

                    <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(SSCtech.png) center / cover'}} >SSC(Tech)</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h3> SSC Tech(Men & Women)</h3>
            
                <div class="sm">
                <b>Age :</b>20 to 27 Years<br/>
                <b>Qualification : </b> Enginerring Degree<br/>
                <b>Martial Status :</b>MArried/Unmarried<br/>
                <b>Notification :</b> Jan & july<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

                    <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(SSCnottech.jpeg) center / cover'}} >SSC Non-Tech</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h3> SSC Non Tech</h3>
               
                <div class="sm">
                <b>Age :</b>19 to 25 Years<br/>
                <b>Qualification :</b> Graduate<br/>
                <b>Martial Status : </b>Married/Unmarried<br/>
                <b>Notification :</b> Apr & Sep<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

                    <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(JAG.png) center / cover'}} >JAG</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h2> JAG</h2>
            
                <div class="sm">
                <b>Age :</b>21 to 27 Years<br/>
                <b>Qualification : </b> Graduate with LLB/LLM with 55% Marks<br/>
                <b>Martial Status :</b>MArried/Unmarried<br/>
                <b>Notification : </b>Jun & Dec<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

                    <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(TGCedn.jpeg) center / cover'}} >TGC</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h2> TGC</h2>
              
                <div class="sm">
                <b>Age :</b>20 to 27 Years<br/>
                <b>Qualification :</b>BE/BTECH in notified Streams final and prefinal year of Engineers<br/>
                <b>Martial Status : </b>Married/Unmarried<br/>
                <b>Notification : </b>May & Nov<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

                    <div className="stack-grid2">
             
             <Card className="cards col-xs-3 " shadow={1} style={{width:'250px',height:'250px'}}> 
                      <CardTitle className="front" style={{ color: '#fff',width:'240px', height: '240px', background: 'url(ncc.jpeg) center / cover'}} >NCC</CardTitle>
                      <div class ="back">
        
            <div class="back-content middle">
                <h2> NCC</h2>
           
                <div class="sm">
                <b>  Age :</b>19 to 25 Years<br/>
                <b>Qualification :</b> Graduate(50% Aggregate marks'A' or 'B' grad in NCC'C' Certificate)<br/>
                <b>Martial Status :</b> Married/Unmarried<br/>
                <b>Notification : </b>Jun & Dec<br/>
                </div>
            </div>
        </div> 
                    </Card>
                    </div>

         </div>
         
         
         
         </div>
       )
    }}
    export default Entries;