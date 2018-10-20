export const createProject = project => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore()
        const authorFirstName = getState().firebase.profile.firstName
        const authorLastName = getState().firebase.profile.lastName
        const authorId = getState().firebase.auth.uid

        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName,
                authorLastName,
                authorId,
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
