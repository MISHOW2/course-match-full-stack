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
    name: "University of Limpopo",
    location: "Polokwane, Limpopo",
    courses: [
      {
        id: 1,
        name: "Nursing",
        minAps: 26,
        faculty: "Health Sciences",
        type: "Bachelor's Degree",
        duration: "4 years"
      }
    ]
  },
  {
    name: "TUT",
    location: "Pretoria, Gauteng",
    courses: [
      {
        id: 2,
        name: "IT",
        minAps: 28,
        faculty: "Computer Science",
        type: "Diploma",
        duration: "3 years"
      }
    ]
  },
  {
    name: "University of South Africa",
    location: "Distance Learning",
    courses: [
      {
        id: 3,
        name: "Education",
        minAps: 22,
        faculty: "Education",
        type: "Bachelor of Education",
        duration: "4 years"
      }
    ]
  },
  {
    name: "VUT",
    location: "Vanderbijlpark, Gauteng",
    courses: [
      {
        id: 4,
        name: "IT",
        minAps: 30,
        faculty: "Engineering",
        type: "Bachelor's Degree",
        duration: "4 years"
      }
    ]
  },
  {
    name: "UJ",
    location: "Johannesburg, Gauteng",
    courses: [
      {
        id: 5,
        name: "Business Management",
        minAps: 24,
        faculty: "Commerce",
        type: "Diploma",
        duration: "3 years"
      }
    ]
  },
  {
    name: "Wits",
    location: "Johannesburg, Gauteng",
    courses: [
      {
        id: 6,
        name: "Psychology",
        minAps: 27,
        faculty: "Social Sciences",
        type: "Bachelor's Degree",
        duration: "3 years"
      }
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
