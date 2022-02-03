import  api  from './api';




export const deleteClassroom=(id)=> {
 
    return api().delete(`classroom/delete/${id}`);
}


export const deleteLecture=(id)=> {
 
    return api().delete(`lecture/delete/${id}`);
}


export const deleteFacultyMember=(id)=> {
 
    return api().delete(`facultyMember/delete/${id}`);
}

export const deleteStudent=(id)=> {
 
    return api().delete(`student/delete/${id}`);
}



