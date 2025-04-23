const users = [
  {
    id: 1,
    email: "mixo@gmail.com",
    password: "123456"
  },
  {
    id: 2,
    email: "student123@gmail.com",
    password: "password"
  }
];

const universities = [
  {
    name: "University of Cape Town (UCT)",
    location: "Cape Town, Western Cape",
    courses: [
      { id: 1, name: "Medicine", minAps: 45, faculty: "Health Sciences", type: "MBChB", duration: "6 years" },
      { id: 2, name: "Law", minAps: 38, faculty: "Law", type: "LLB", duration: "4 years" },
      { id: 3, name: "Computer Science", minAps: 36, faculty: "Science", type: "BSc", duration: "3 years" },
    ]
  },
  {
    name: "University of the Witwatersrand (Wits)",
    location: "Johannesburg, Gauteng",
    courses: [
      { id: 4, name: "Architecture", minAps: 34, faculty: "Engineering and Built Environment", type: "BAS", duration: "3 years" },
      { id: 5, name: "Psychology", minAps: 30, faculty: "Humanities", type: "BA", duration: "3 years" },
      { id: 6, name: "Dentistry", minAps: 42, faculty: "Health Sciences", type: "BDS", duration: "5 years" }
    ]
  },
  {
    name: "Stellenbosch University",
    location: "Stellenbosch, Western Cape",
    courses: [
      { id: 7, name: "Viticulture and Oenology", minAps: 30, faculty: "Agrisciences", type: "BScAgric", duration: "4 years" },
      { id: 8, name: "Industrial Engineering", minAps: 40, faculty: "Engineering", type: "BEng", duration: "4 years" },
      { id: 9, name: "Accounting", minAps: 32, faculty: "Economic and Management Sciences", type: "BAcc", duration: "3 years" }
    ]
  },
  {
    name: "University of Pretoria (UP)",
    location: "Pretoria, Gauteng",
    courses: [
      { id: 10, name: "Veterinary Science", minAps: 42, faculty: "Veterinary Science", type: "BVSc", duration: "6 years" },
      { id: 11, name: "Mechanical Engineering", minAps: 38, faculty: "Engineering", type: "BEng", duration: "4 years" },
      { id: 12, name: "Education", minAps: 28, faculty: "Education", type: "BEd", duration: "4 years" }
    ]
  },
  {
    name: "University of Johannesburg (UJ)",
    location: "Johannesburg, Gauteng",
    courses: [
      { id: 13, name: "Business Management", minAps: 26, faculty: "Management", type: "Diploma", duration: "3 years" },
      { id: 14, name: "Public Relations", minAps: 24, faculty: "Humanities", type: "Diploma", duration: "3 years" },
      { id: 15, name: "Information Technology", minAps: 28, faculty: "Science", type: "BSc", duration: "3 years" }
    ]
  },
  {
    name: "Tshwane University of Technology (TUT)",
    location: "Pretoria, Gauteng",
    courses: [
      { id: 16, name: "Electrical Engineering", minAps: 25, faculty: "Engineering", type: "Diploma", duration: "3 years" },
      { id: 17, name: "Hospitality Management", minAps: 22, faculty: "Management Sciences", type: "Diploma", duration: "3 years" },
      { id: 18, name: "IT", minAps: 26, faculty: "ICT", type: "Diploma", duration: "3 years" }
    ]
  },
  {
    name: "University of South Africa (UNISA)",
    location: "Distance Learning",
    courses: [
      { id: 19, name: "Education", minAps: 24, faculty: "Education", type: "BEd", duration: "4 years" },
      { id: 20, name: "Criminology", minAps: 23, faculty: "Humanities", type: "BA", duration: "3 years" },
      { id: 21, name: "Accounting Sciences", minAps: 25, faculty: "Accounting", type: "BCom", duration: "3 years" }
    ]
  },
  {
    name: "Vaal University of Technology (VUT)",
    location: "Vanderbijlpark, Gauteng",
    courses: [
      { id: 22, name: "IT", minAps: 27, faculty: "Applied and Computer Sciences", type: "Bachelor's Degree", duration: "4 years" },
      { id: 23, name: "Mechanical Engineering", minAps: 30, faculty: "Engineering and Technology", type: "Bachelor's Degree", duration: "4 years" },
      { id: 24, name: "Cost and Management Accounting", minAps: 26, faculty: "Management Sciences", type: "Diploma", duration: "3 years" }
    ]
  },
  {
    name: "University of Limpopo",
    location: "Polokwane, Limpopo",
    courses: [
      { id: 25, name: "Nursing", minAps: 26, faculty: "Health Sciences", type: "Bachelor's Degree", duration: "4 years" },
      { id: 26, name: "Law", minAps: 28, faculty: "Law", type: "LLB", duration: "4 years" },
      { id: 27, name: "Agriculture", minAps: 25, faculty: "Science and Agriculture", type: "BScAgric", duration: "4 years" }
    ]
  },
  {
    name: "North-West University (NWU)",
    location: "Potchefstroom, North West",
    courses: [
      { id: 28, name: "Pharmacy", minAps: 40, faculty: "Health Sciences", type: "BPharm", duration: "4 years" },
      { id: 29, name: "Computer and Information Systems", minAps: 32, faculty: "Natural Sciences", type: "BSc", duration: "3 years" },
      { id: 30, name: "Education Management", minAps: 24, faculty: "Education", type: "BEdHons", duration: "1 year (Honours)" }
    ]
  }
];


const faculties = [
  "Health Sciences",
  "Computer Science",
  "Education",
  "Engineering",
  "Commerce",
  "Social Sciences"
];

module.exports = {
  users,
  universities,
  faculties
};
