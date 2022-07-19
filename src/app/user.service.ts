import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Thirumal Dharmalingam",
    jobTitle: "Senior Software Specialist",
    aboutMe: "Risk & Control Assessment • Business Analysis • Requirement Elicitation • Digital Transformation • Stakeholder Management • Program Management • Project Lifecycle Management • Training and Development • Change Management • Process Re-engineering • Solution Architect • Contracts / Team Management • Delivery Management • Post-implementation Support • Strategy Formulation & Implementation • Reporting & Documentation",
    profilePicture: "http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337",
    location: "Abu Dhabi, United Arab Emirates",
    email: "d.thirumal@gmail.com",
    devpostAccount: "",
    facebookAccount: "",
    githubAccount: "https://github.com/thirumald",
    googleAccount: "",
    linkedinAccount: "https://www.linkedin.com/in/thirumal-dharmalingam",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
