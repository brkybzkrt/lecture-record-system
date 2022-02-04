import { useState,useEffect } from 'react';
import {useParams, useHistory } from 'react-router-dom';
import { getClassroom } from '../../../services/getOneRequests';
import { updateClassroom } from '../../../services/patchRequests';

function UpdateClassroom() {

  const {id}= useParams();
 

  const [uptForm, setUptForm] = useState({});
  const [loading,setLoading] = useState(true);
  const history= useHistory();



  useEffect( async () => {
    let result = await getClassroom(id)
    result = await result.data;
    setUptForm(result);
  },[]);


 
  setTimeout(() => {
    
    setLoading(false);
  },1000)

  const InputChange= (event) => {


    setUptForm({...uptForm,[event.target.name]:event.target.value,})
  }

  


  const formSubmit= async(event) => {
      event.preventDefault();
      
      await updateClassroom(id,uptForm)
      history.push('/admin/classroom')
  }

  if(loading){
   
    return (
        <div class="spinner-border text-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
    
}
return <>

<h2 className="col-md-6 offset-md-3 text-center">UpdateFrom Classroom</h2>

<form  className="col-md-6 offset-md-3" onSubmit={formSubmit}>

    
        <label>code</label>
        <input type="text" name="code" className="form-control" defaultValue={uptForm.code}    onChange={InputChange}/>
        <br/>
        <label htmlFor="name">name</label>
        <input type="text" name="name" className="form-control" defaultValue={uptForm.name}  onChange={InputChange}/>
        <br/>
        <label htmlFor="parentcode">Email</label>
        <input type="text" name="parentcode" className="form-control"  defaultValue={uptForm.parentcode}  onChange={InputChange}/>
        <br/>
        <label htmlFor="type">type</label>
        <input type="text" name="type" className="form-control" defaultValue={uptForm.type}  onChange={InputChange}/>
        <br/>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>
}

export default UpdateClassroom;
