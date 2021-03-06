const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed',
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null,
            }
        case 'SIGNUP_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: action.err.message,
            }
        case 'SIGNUP_SUCCESS':
            console.log('SignUp success')
            return {
                ...state,
                authError: null,
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success')
            return state
        default:
            return state
    }
}

export default authReducer
