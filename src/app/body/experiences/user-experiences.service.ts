import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "16 years Of Experience",
    educations: [
      {
        schoolName: "Anna University",
        startDate: "JUL 2003",
        endDate: "JUN 2006",
        degreeTitle: "Master of Computer Applications",
        certificationDescription: "",
        location: "Chennai, India"
      },
      {
        schoolName: "Periya University",
        startDate: "JUN 2000",
        endDate: "MAY 2003",
        degreeTitle: "Bachelor of Computer Applications",
        certificationDescription: "",
        location: "Salem, India"
      }
    ],
    careers: [
      {
        companyName: "Global Aerospcae Logistics",
        startDate: "JUL 2011",
        endDate: "Till Today",
        jobType: "Permanent",
        jobTitle: "Senior Software Specialist",
        jobDuty: "• Patterns in 3-Tier, Singleton and N-Tier applications framework"
       +"• ASP.NET MVC pattern mechanism to display product catalogs and categories"
       +"• Managed Network Monitoring System by using SNMP (like a solarwind) , configuring edge device (Google Dev Board, Jetson) to use"
       +"IOT device untegration"
       +"• Developed a complex dtabase-driven workflow process for all the applications developed for Presidential Guard(controlling views"
       +"based on role and stats)"
       +"• Created Windows service or various internal tasks – synchronized ADs with updated used data in database and synchronized data"
       +"from external database"
       +"• Led installation, admnistration and maintenance of SQL Server Instances (2012/2014/2016); setup development, staging and"
       +"production environment (installing SQL Server)"
       +"• Designed database backup and restoration stratgy (database backups and SQL server agent); recovered the databases to a specific"
       +"point of time, as per the requests (database bakups and recovery)"
       +"• Worked in ASP.NET security mechanism such as impersonation, authetication and authorization and encrypting querystring"
       +"• Designed and created database objects such as stored procedures,packages, functions, triggers and indexes; handled administration"
       +"of MS-SQL database and web servers (IIS); used Cascading Style Sheets, JavaScript, AJAX, and HTML"
       +"• Involved in performance optimization of existing applications; automated processes for continuou integration, deployment and"
       +"backup of all the infrastructure involving the programming department"
       +"• Collaborated with other specialized staff (operations, database manaement, and client support staff) on assembly and deployment"
       +"questions",
        location: "Ab Dhabi, UAE",
        companyLink :"www.gal.ae"
      },
      {
        companyName: "Hadeed Emirates Contracting",
        startDate: "MAY 2010",
        endDate: "JUN 2011",
        jobType: "Permanent",
        jobTitle: "Software Developer",
        jobDuty: "• Analyzed, planned and executed entire process of software development methodology as per the standards at Microsoft"
        +"• Prototyped and evaluated alternative designs in light of security, reliability, continuity and functional completeness; inherited the JS"
        +"based grid for presentation and used regex extensively for validation, verification and formatting"
        +"• Designed and developed .NET web components and user controls using ASP.NET and C#.NET, AJAX Toolkit"
        +"• Interacted with clients and business teams to provide technical support and measure the scalability, consistency & accuracy of the"
        +"application",
        location: "Ab Dhabi, UAE",
        companyLink: "http://www.hadeedconstruction.com/"
      },
      {
        companyName: "Petrogas Piping Middle East FZCO",
        startDate: "APR 2008",
        endDate: "APR 2010",
        jobType: "Permanent",
        jobTitle: "Software Developer",
        jobDuty: "PGP ERP Solution • Designed and Created database objects such as stored procedures, packages, functions, triggers."
        +"Developed Web Service to interact ASP.NET application."
        +"Generated trading partner report, acceptance report, & volume report using SQL Server reporting services."
        +"Developed Drill-down, bar, pie and gauge charts for online dashboard prototype."
        +"Developed ASP.NET web components to organize reports and data sources, schedule report execution [Daily/Weekly/Monthly Basis] and delivery method [Email/Web based], and track reporting history [audit log].",
        location: "Dubai, UAE",
        companyLink: "https://petrogaspiping.com/"
      },
      {
        companyName: "Unilever Ltd",
        startDate: "OCT 2006",
        endDate: "MAR 2008",
        jobType: "Permanent",
        jobTitle: "Software Developer",
        jobDuty: "Created Data access classes, which were used to connect to the database using Microsoft"
        +"ADO.NET and Data binding concepts where objects such as Data Adapter, Dataset, and Data"
        +"Readers were used."
        +"Developed server side code using ASP.NET Web forms. Created Dynamic Web Pages in which"
        +"Web Controls such as (Text, Tree view, List view, Tab, Calendar Control) were used. Java Script"
        +"was written for client side validation."
        +"Handled Run Time Errors & Design Time Errors by implementing appropriate Error Handlers."
        +"Developed user controls for page navigation, header and footer and for menu creation."
        +"Extensively interacted with clients and business teams to provide technical support and"
        +"measure the scalability, consistency and accuracy of the application.",
        location: "Bangalore, India",
        companyLink: "https://www.unilever.com/"
      }
    ],
    certificates: [
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
