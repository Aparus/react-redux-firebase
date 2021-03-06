import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
// <Provider> делает store доступным из приложения App.
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
// getFirebase и getFirestore обеспечивают синхронизацию store нашего приложения с облачным firebase & filestore
import fbConfig from './config/firebase'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {
            attachAuthIsReady: true,
            useFirestoreForProfile: true,
            userProfile: 'users',
        })
    )
)
// middleware добавляет функционал для store,
// thunk в данном случае добавляет возможность в экшенах выполнять асинхронные запросы
// если бы мы не добавили эту мидлвару, то экшены выстреливались бы моментально, не дожидаясь асинхр.ответов
// подобно тому, как мы использовали compose для соединения reducers,
// теперь мы используем её же для соединения дополнительных функционалов, подключаемых к store

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
