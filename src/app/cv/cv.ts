export interface ICv {
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedIn: string;
    portfolio: string;
    imagePath: string;
    resumePath: string;
    objective: string;
    bio: string;
    employment: IEmployment[];
    education: ISchool[];
    skills: string[];
    languages: ILanguage[];
    personalInterests: string[];
}

export interface IEmployment {
    position: string;
    company: string;
    dates: string;
    overview: string[];
}

export interface ISchool{
    school: string;
    degree: string;
    Overview: string[];
}

export interface ILanguage{
    name: string;
    level: string;
}


// {
//     "Name": "Kevin Horan",

//     "Phone": "(949) 441-1324",

//     "Email": "kevin.michael.horan@gmail.com",

//     "LinkedIn": "https://www.linkedin.com/in/kevin-horan-3783a062/",

//     "Portfolio": "https://kmhoran.github.io/",

//     "OBJECTIVE":

//     "To work in an energetic and growing company that will provide me with room to advance my career. I am looking for a position where I can make use of my technical and creative skills.",

//     "PROFESSIONAL_EXPERIENCE":
//     [{
//     "Position": "Full-Stack .NET Developer",
//     "Company": "QuoteMule", 
//     "Dates":"Oct 2016 - present",

//     "Overview":
//     "• Team-built web application aimed at streamlining the contract bidding process between construction contractors and their clients. • This project utilizes a C# ASP.NET MVC & MSSQL backend to implement a WebApi 2 infrastructure running a jQuery, AJAX & AngularJs frontend. • I was personally responsible for creating a workflow state machine using the .NET Stateless library, drag-and-drop file-upload feature with DropZone, and an interactive AI powered chatbot which leverages Microsoft’s LUIS machine learning technology. I also contributed to implementing a real-time messaging and notification system powered by the Signal R library. • I also made use of numerous other libraries and external APIs including, GMaps, Twilio, SendGrid, AWS, BrainTree, DropZone, PDFSharp, and MigraDoc. • In this project, the team has adopted industry best practices such as Agile/Scrum with Trello management, Dependency Injection, and Service-Oriented Architecture."
//     },
//     {
//     "Position": "Data Analyst",
//     "Company": "AppleOne", 
//     "Dates": "Jul 2016 - Oct 2016",

//     "Overview":
//     "Data processing and analysis. Microsoft Office Suite. Independently developed a Python application to format, update, and standardize employee records, along with other HR data."
//     },
//     {
//     "Position": "English-Language Instructor",
//     "Company": "Centre International d’Etudes Pédagogiques (CIEP)", 
//     "Dates": "Sep 2015 - Jun 2016",

//     "Overview":
//     "High-school English Teacher in France. Specialized in English instruction for computer-science classes."
//     }],

//     "EDUCATION":
//     [{
//     "School": "University of California, Irvine",
//     "Degree_Received": "B.A.",
//     "Subject": "International Studies with Economics Minor"
//     },
//     {
//     "School": "Sciences Po Lyon",
//     "Degree_Received": "Attestation d’Etudes Politiques",
//     "Subject": "Political Economics"
//     }],

//     "SKILLS":
//     {
//     "Front_End" : [
//       "JAVASCRIPT"
//     , "JQUERY"
//     , "AJAX"
//     , "HTML5"
//     , "CSS3"
//     , "ANGULARJS"
//     , "BOOTSTRAP 3"
//     ],
//     "Back_End": [
//       "C#"
//     , "ASP.NET MVC 5"
//     , "WEB API 2"
//     , "Machine Learning with MS Luis"
//     , "PYTHON 3.4"
//     , "DJANGO"
//     ],
//     "Tools": [
//       "VISUAL STUDIO"
//     , "PYCHARM"
//     , "MSSQL"
//     ]},

//     "PROFESSIONAL_SKILLS":
//     [
//       "Extensive background in education and public speaking."
//     , "Professional experience with Agile, Scrum, and Trello task management."
//     ],

//     "LANGUAGES":
//     {
//     "English": {"Level": "Natively fluent"},
//     "French" : {"Level": "Advanced (Delf B2)"},
//     "Portuguese" : {"Level": "Intermediate"}
//     },

//     "PERSONAL_INTERESTS":
//     [
//       "Camping"
//     , "Biking"
//     , "Hiking"
//     , "Sailing"
//     , "History"
//     , "Literature"
//     , "Cartography"
//     , "Language Learning"
//     , "Instrumental Music"
//     , "Travel"
//     , "Community Service"
//     ]}