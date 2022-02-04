import { useState,useEffect } from 'react';
import {getStudent} from "../../../services/getOneRequests"
import {updateStudent} from "../../../services/patchRequests"
import { useHistory, useParams } from 'react-router-dom';


function UpdateStudent() {
 
  const {id}= useParams();
 

  const [uptForm, setUptForm] = useState({});
  const [loading,setLoading] = useState(true);
  const history= useHistory();



  useEffect( async () => {
    let result = await getStudent(id)
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
      await updateStudent(id,uptForm)
      history.push('/admin/student')
  }

  if(loading){
   
    return (
        <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
    
}
return <>

<h2 className="col-md-6 offset-md-3 text-center">Update Student</h2>

<form  className="col-md-6 offset-md-3" onSubmit={formSubmit}>

    
        <label>Code</label>
        <input type="text" name="code" className="form-control" defaultValue={uptForm.code}  onChange={InputChange}/>
        <br/>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="form-control" defaultValue={uptForm.name}  onChange={InputChange}/>
        <br/>
        <label htmlFor="surname">Surname</label>
        <input type="text" name="surname" className="form-control"  defaultValue={uptForm.surname}  onChange={InputChange}/>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>
}

export default UpdateStudent;
