import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt nobis non sed dicta iure veniam eaque ipsam commodi earum perferendis nam placeat sunt dolores deleniti tenetur, inventore id totam.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by Aparus</div>
                <div>2nd September, 3am</div>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectDetails
