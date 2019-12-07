import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id)
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(x => {
        return (<ProjectItem onDelete={this.deleteProject.bind(this)} project={x} />);
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        <br/>  
        {projectItems}
      </div>
    );
  }
}


export default Projects;
