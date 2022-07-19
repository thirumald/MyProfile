import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    backgroundImage: "https://assets-global.website-files.com/5e1e5c62fa3d44c96b4170a1/61563f535222b079b5d4da61_database-changes-zero-downtime%20(1).png",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Technologist and .NET Developer | Team Lead | Software Architect | Instructor | Social Service",
    projectLink: "https://github.com/thirumald"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
