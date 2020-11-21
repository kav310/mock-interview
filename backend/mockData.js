const teachersData = [
  {
    name: "Garth Hector",
    age: 91,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "B",
        grade: "5",
      },
      {
        subject: "Social",
        section: "C",
        grade: "6",
      },
      {
        subject: "Social",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Shayne Climer",
    age: 81,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Maths",
        section: "A",
        grade: "4",
      },
      {
        subject: "Maths",
        section: "B",
        grade: "6",
      },
      {
        subject: "Maths",
        section: "C",
        grade: "8",
      },
      {
        subject: "Maths",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Norton Funcheon",
    age: 90,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Science",
        section: "A",
        grade: "1",
      },
      {
        subject: "Science",
        section: "B",
        grade: "3",
      },
      {
        subject: "Science",
        section: "C",
        grade: "2",
      },
      {
        subject: "Science",
        section: "A",
        grade: "4",
      },
    ],
  },
  {
    name: "Katinka Seckington",
    age: 75,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Computers",
        section: "A",
        grade: "2",
      },
      {
        subject: "Computers",
        section: "B",
        grade: "3",
      },
      {
        subject: "Computers",
        section: "C",
        grade: "4",
      },
      {
        subject: "Computers",
        section: "A",
        grade: "5",
      },
    ],
  },
  {
    name: "Renaldo Zellner",
    age: 6,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "English",
        section: "A",
        grade: "3",
      },
      {
        subject: "English",
        section: "B",
        grade: "7",
      },
      {
        subject: "English",
        section: "C",
        grade: "5",
      },
      {
        subject: "English",
        section: "C",
        grade: "6",
      },
    ],
  },
  {
    name: "Findlay Sambeck",
    age: 92,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Hindi",
        section: "A",
        grade: "3",
      },
      {
        subject: "Hindi",
        section: "B",
        grade: "4",
      },
      {
        subject: "Hindi",
        section: "A",
        grade: "6",
      },
      {
        subject: "Hindi",
        section: "C",
        grade: "10",
      },
    ],
  },
  {
    name: "Bruce Geffen",
    age: 63,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Physics",
        section: "C",
        grade: "7",
      },
      {
        subject: "Physics",
        section: "A",
        grade: "8",
      },
      {
        subject: "Physics",
        section: "B",
        grade: "9",
      },
      {
        subject: "Physics",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Dwain Allpress",
    age: 92,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "B",
        grade: "6",
      },
      {
        subject: "Chemistry",
        section: "C",
        grade: "7",
      },
      {
        subject: "Chemistry",
        section: "A",
        grade: "8",
      },
      {
        subject: "Chemistry",
        section: "B",
        grade: "9",
      },
    ],
  },
  {
    name: "Wallis Astall",
    age: 40,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Telugu",
        section: "B",
        grade: "8",
      },
      {
        subject: "Telugu",
        section: "A",
        grade: "1",
      },
      {
        subject: "Telugu",
        section: "B",
        grade: "2",
      },
      {
        subject: "Telugu",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Tallie Moulson",
    age: 50,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Biology",
        section: "A",
        grade: "6",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "7",
      },
      {
        subject: "Biology",
        section: "C",
        grade: "8",
      },
      {
        subject: "Biology",
        section: "A",
        grade: "9",
      },
    ],
  },
  {
    name: "Leoine Talkington",
    age: 11,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "A",
        grade: "3",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "8",
      },
      {
        subject: "Physics",
        section: "C",
        grade: "6",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Hallie Troucher",
    age: 69,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Edmon Elsey",
    age: 43,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "A",
        grade: "3",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "8",
      },
      {
        subject: "Physics",
        section: "C",
        grade: "6",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Constantina Antonnikov",
    age: 37,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Computers",
        section: "A",
        grade: "2",
      },
      {
        subject: "Computers",
        section: "B",
        grade: "3",
      },
      {
        subject: "Computers",
        section: "C",
        grade: "4",
      },
      {
        subject: "Computers",
        section: "A",
        grade: "5",
      },
    ],
  },
  {
    name: "Brandea Jagson",
    age: 14,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Janet Rintoul",
    age: 50,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "A",
        grade: "3",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "8",
      },
      {
        subject: "Physics",
        section: "C",
        grade: "6",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Aileen Bygrove",
    age: 39,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "B",
        grade: "8",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
      {
        subject: "Maths",
        section: "C",
        grade: "9",
      },
      {
        subject: "Computer Science",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Dewitt Symonds",
    age: 33,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Marve Sheara",
    age: 24,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Computers",
        section: "A",
        grade: "2",
      },
      {
        subject: "Computers",
        section: "B",
        grade: "3",
      },
      {
        subject: "Computers",
        section: "C",
        grade: "4",
      },
      {
        subject: "Computers",
        section: "A",
        grade: "5",
      },
    ],
  },
  {
    name: "Lannie Kleinstub",
    age: 25,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Alika Poulden",
    age: 46,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Biology",
        section: "A",
        grade: "6",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "7",
      },
      {
        subject: "Biology",
        section: "C",
        grade: "8",
      },
      {
        subject: "Biology",
        section: "A",
        grade: "9",
      },
    ],
  },
  {
    name: "Margie Newberry",
    age: 91,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "B",
        grade: "8",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
      {
        subject: "Maths",
        section: "C",
        grade: "9",
      },
      {
        subject: "Computer Science",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Charmian Passingham",
    age: 1,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
    ],
  },
  {
    name: "Kristofor Gaggen",
    age: 1,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Biology",
        section: "A",
        grade: "6",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "7",
      },
      {
        subject: "Biology",
        section: "C",
        grade: "8",
      },
      {
        subject: "Biology",
        section: "A",
        grade: "9",
      },
    ],
  },
  {
    name: "Ware Strippel",
    age: 78,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "A",
        grade: "3",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "8",
      },
      {
        subject: "Physics",
        section: "C",
        grade: "6",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Tamarra Pozer",
    age: 93,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Maths",
        section: "B",
        grade: "8",
      },
      {
        subject: "Biology",
        section: "A",
        grade: "10",
      },
      {
        subject: "Science",
        section: "A",
        grade: "10",
      },
    ],
  },
  {
    name: "Elias Di Frisco",
    age: 63,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Maths",
        section: "A",
        grade: "8",
      },
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Science",
        section: "B",
        grade: "6",
      },
      {
        subject: "Genereal Knowlege",
        section: "C",
        grade: "8",
      },
    ],
  },
  {
    name: "Jacques Gillies",
    age: 99,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Chemistry",
        section: "A",
        grade: "8",
      },
      {
        subject: "Chemistry",
        section: "C",
        grade: "9",
      },
      {
        subject: "Chemistry",
        section: "B",
        grade: "10",
      },
      {
        subject: "Chemistry",
        section: "A",
        grade: "4",
      },
    ],
  },
  {
    name: "Keven Doerffer",
    age: 51,
    gender: "Male",
    noOfclasses: 4,
    classes: [
      {
        subject: "Telugu",
        section: "A",
        grade: "3",
      },
      {
        subject: "Hindi",
        section: "B",
        grade: "4",
      },
      {
        subject: "Social",
        section: "A",
        grade: "6",
      },
      {
        subject: "Biology",
        section: "B",
        grade: "8",
      },
    ],
  },
  {
    name: "Danit Tollfree",
    age: 13,
    gender: "Female",
    noOfclasses: 4,
    classes: [
      {
        subject: "Social",
        section: "A",
        grade: "3",
      },
      {
        subject: "Telugu",
        section: "C",
        grade: "6",
      },
      {
        subject: "English",
        section: "B",
        grade: "7",
      },
      {
        subject: "Maths",
        section: "A",
        grade: "9",
      },
    ],
  },
];

module.exports = teachersData;
