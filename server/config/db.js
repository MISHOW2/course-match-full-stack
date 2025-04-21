const users = [
  {
    id: 1,
    email: "mixo@gmail.com",
    password: "123456" // Plain text for now, but you can hash later
  },
  {
    id: 2,
    email: "student123@gmail.com",
    password: "password"
  }
];

const courses = [
  {
    id: 1,
    name: "Nursing",
    minAps: 26,
    field: "Health Sciences",
    university: "University of Limpopo"
  },
  {
    id: 2,
    name: "Information Technology",
    minAps: 28,
    field: "Computer Science",
    university: "TUT"
  },
  {
    id: 3,
    name: "Education",
    minAps: 22,
    field: "Teaching",
    university: "University of South Africa"
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    minAps: 30,
    field: "Engineering",
    university: "VUT"
  },
  {
    id: 5,
    name: "Business Management",
    minAps: 24,
    field: "Commerce",
    university: "UJ"
  },
  {
    id: 6,
    name: "Psychology",
    minAps: 27,
    field: "Social Sciences",
    university: "Wits"
  }
];

module.exports = {
  users,
  courses
};
