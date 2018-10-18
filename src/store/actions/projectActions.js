export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore()
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Net',
                authorLastName: 'Ninja',
                authorId: 12345,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
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
