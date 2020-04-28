import React,{Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

toast.configure()
class Form extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			Email:'',
			Mobile:''
		}
	}

	changeHandler=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	
	submitHandler=(e)=>{
		e.preventDefault()
		console.log(this.state)

		

axios.post("https://sheet.best/api/sheets/bd7a12a5-bd2b-4b2f-8a92-e72dd9a3d3e4",
this.state).then(response =>
	{
		console.log(response)})
	.catch(error=>{console.log(error.repsonse)})
	this.setState({
		name: '',
		Email:'',
		Mobile:''
	  });
	  toast("OUR valur sdfnjdsfnkjsdfj")

	  


}


    render(){
		const{name,Email,Mobile}=this.state
        return(
<div>
	<form onSubmit={this.submitHandler} >
	<div class="input-group mb-3">

  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Name</span>
  </div>
	 <input type="text" class="form-control" aria-describedby="emailHelp" name="name" value={name} onChange={this.changeHandler}></input>
		</div>
	


		<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Email</span>
  </div>
<input type="text" class="form-control" aria-describedby="emailHelp"  name="Email" value={Email} onChange={this.changeHandler}></input >

	</div>

		<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Mobile</span>
  </div>
<input type="text" class="form-control" aria-describedby="emailHelp" name="Mobile" value={Mobile} onChange={this.changeHandler}></input>

</div>
<div className="submit">
<button type="submit" class="btn btn-primary">Submit</button>
<div className="input-group mb-3">
<small id="emailHelp" class="form-text text-muted">We'll never share your Email And Number with anyone else.</small>	
</div>
</div>


	</form>

  
   
  

</div>


)
}
}

export default Form;
