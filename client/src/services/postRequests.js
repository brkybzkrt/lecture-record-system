import  api  from './api';



export const addLecture=(data)=> {
 
    return api().post('lecture/add',data);
}



export const addClassroom=(data)=> {
 
    return api().post('classroom/add',data);
}



export const addFacultyMember=(data)=> {
 
    return api().post('facultyMember/add',data);
}




export const addStudent=(data)=> {
 
    return api().post('student/add',data);
}

export const addLectureRecord=(data)=> {
 
    return api().post('lectureRecord/add',data);
}


