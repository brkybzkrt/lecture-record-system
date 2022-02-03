import  api  from './api';


export const updateClassroom=(id,data)=> {
 
    return api().patch(`classroom/update/${id}`,data);
}

export const updateFacultyMember=(id,data)=> {
 
    return api().patch(`facultyMember/update/${id}`,data);
}

export const updateLecture=(id,data)=> {
 
    return api().patch(`lecture/update/${id}`,data);
}


export const updateStudent=(id,data)=> {
 
    return api().patch(`student/update/${id}`,data);
}


