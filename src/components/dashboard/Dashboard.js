// State, lifecycle => class component
// слева будет идти список проектов, справа - уведомления
// ProjectList || Notifications
// ============ || =============
import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux' // соединяет компонент со store
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
    }
}

//export default connect(mapStateToProps)(Dashboard)
// мы превратили Dashboard в контейнер-компонент,
// он забирает данные state из store, превращает их в props и спускает их нижестоящим компонентам

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(Dashboard)
