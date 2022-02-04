import  api  from './api';

export const getClassrooms=()=> {
 
    return api().get('classroom/getAll');
}

export const getClassroomsWithParent=()=> {
 
    return api().get('classroom/getAllWithParent');
}


export const getLectures=()=> {
 
    return api().get('lecture/getAll');
}


export const getFacultyMembers=()=> {
 
    return api().get('facultyMember/getAll');
}


export const getstudents=()=> {
 
    return api().get('student/getAll');
}


export const getMe=()=> {
 
    return api().get('auth/me',{
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
    });
}


export const getStudentsLectures=(id)=> {

    return api().get(`lectureRecord/getLecturesById/${id}`)
}




