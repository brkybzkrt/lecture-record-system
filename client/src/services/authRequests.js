import api from "./api"

export const registerAdmin=(data)=> {
 
    return api().post('auth/register',data);
}


export const loginAdmin=(data)=> {
 
    return api().post('auth/login',data);
}

export const meAdmin=()=> {
 
    return api().get('auth/me',{
        headers:{Authorization: 'Bearer ' + localStorage.getItem('access_token')}
    })
}
export const meStudent=()=> {
 
    return api().get('auth/meStudent',{
        headers:{Authorization: 'Bearer ' + localStorage.getItem('access_token')}
    })
}




export const loginStudent=(data)=> {
 
    return api().post('auth/login/student',data);
}

