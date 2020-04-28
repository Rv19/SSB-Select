import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Whyssb extends Component{
    render(){
        return(
<div className="achieveBack">
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#zero" data-slide-to="0" class="active"></li>
    <li data-target="#one" data-slide-to="1"></li>
    <li data-target="#two" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Grid>
            <Cell col={12}>
      <img src="put1.jpg" class="d-block w-100" width ="200px"alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
     
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={12}>
      <img src="put2.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
     
      </Grid>
    </div>
    <div class="carousel-item ">
    <Grid>
            <Cell col={12}>
      <img src="put3.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-sm-block">
      </div>
      </Cell>
     
      </Grid>
    </div>
  </div>
  

<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only" >Next</span>
  </a>
  </div>
  </div>
       
        )
   }
}
export default Whyssb;