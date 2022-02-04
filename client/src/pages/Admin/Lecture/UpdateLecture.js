import { useState,useEffect } from 'react';
import {getLecture} from "../../../services/getOneRequests"
import {updateLecture} from "../../../services/patchRequests"
import { useHistory, useParams } from 'react-router-dom';




function UpdateLecture() {
 
  const {id}= useParams();
 

  const [uptForm, setUptForm] = useState({});
  const [loading,setLoading] = useState(true);
  const history= useHistory();



  useEffect( async () => {
    let result = await getLecture(id)
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
      
      await updateLecture(id,uptForm)
      history.push('/admin/lecture')
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

    
        <label>Code</label>
        <input type="text" name="code" className="form-control" defaultValue={uptForm.code}    onChange={InputChange}/>
        <br/>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="form-control" defaultValue={uptForm.name}  onChange={InputChange}/>
        <br/>
        <label htmlFor="ismandatory">ismandatory</label>
        <input type="text" name="ismandatory" className="form-control"  defaultValue={uptForm.ismandatory}  onChange={InputChange}/>
        <br/>
        <label htmlFor="day">Day</label>
        <input type="text" name="day" className="form-control" defaultValue={uptForm.day}  onChange={InputChange}/>
        <br/>
        <label htmlFor="hour">Hour</label>
        <input type="text" name="hour" className="form-control" defaultValue={uptForm.hour}  onChange={InputChange}/>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>
}

export default UpdateLecture;
