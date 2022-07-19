import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: "",
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
    ],
    skills: [
      {
        skillName: "ASP.NET, ADO.NET, LINQ,WCF, ASP.NET MVC, .NET Framework (4.5 / 4.0 / 3.5 / 3.0 / 2.0), Net(6 /5)",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "VB.NET",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "C#",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "Python 3.6",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "NodeJS",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "Angualr 12",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "JQuery",
        proficiency: 4 //"[5 to 0]"
      },
    
      {
        skillName: "CSS",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "MS SQL SERVER (206/2014/2012 / 2008 R2 /2008/2005",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "PostgreSQL,",
        proficiency: 3 //"[5 to 0]"
      }
      ,
      {
        skillName: "MongoDB",
        proficiency: 3 //"[5 to 0]"
      }
    ],
    languages: [
      {
        languageName: "English",
        level: "Profficient",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "Tamil",
        level: "Native",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "Hindi",
        level: "Conversational",
        proficiency: 3 //"[5 to 0]"
      },
      {
        languageName: "Arabic",
        level: "Beginner",
        proficiency: 2 //"[5 to 0]"
      }
    ],
    tools: [
      {
        toolName: "Visual Studio",
        year: "2006",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "Team Foundation Service",
        year: "2012",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "Crystal Reports 13",
        year: "2009",
        proficiency: 5 //"[5 to 0]"
      },
      {
      toolName: "Microsoft IIS (7.5 / 7.0 / 6.0 / 5.1)",
      year: "2010",
      proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "SSRS",
        year: "2012",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "PyCharm",
        year: "2020",
        proficiency: 1 //"[5 to 0]"
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
