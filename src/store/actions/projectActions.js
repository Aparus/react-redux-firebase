export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //make async call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project: project,
        })
    }
}

/* 
в обычной ситуации мы бы сделали так: 
 return {
        type: 'CREATE_PROJECT',
        project: project,
    }
но так как мы используем tunk, то можем возвращать функцию 
*/
