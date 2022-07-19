import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  private projectsInfo = {
    myProjects: "My Contribution",
    projects: [
      {
        projectTitle: "Factual Note",
        projectImageLink: "https://factualnote.com/img/tools.png",
        projectDescription: "Data Annotation Tool",
        skillsList: "JavaScript,PHP,.Net",
        projectLink: "www.factualnote.com"
      },
      {
        projectTitle: "Digital Marketing",
        projectImageLink: "https://clevermoe.com/img/about.jpg",
        projectDescription: "[Project description here]",
        skillsList: "Html, JavaScript,.Net,MongoDB",
        projectLink: "https://www.clevermoe.com"
      }
    ]
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
