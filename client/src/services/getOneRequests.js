import  api  from './api';

export const getClassroom=(id)=> {
 
    return api().get(`classroom/getOne/${id}`);
}


export const getLecture=(id)=> {
 
    return api().get(`lecture/getOne/${id}`);
}


export const getFacultyMember=(id)=> {
 
    return api().get(`facultyMember/getOne/${id}`);
}


export const getStudent=(id)=> {
 
    return api().get(`student/getOne/${id}`);
}
