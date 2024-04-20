const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


  // ________________________________________________________________________________

//   PROBLEM 10 countCalculation

  let countCalculation = (schoolData)=>{

    let output = {
        mathTeachersCount : schoolData.departments.math.teachers,
        historyTeachersCount : schoolData.departments.history.teachers,
        mathStudentsCount : schoolData.departments.math.students,
        historyStudentsCount : schoolData.departments.history.students 
    };

    return output
  }

  console.log(countCalculation(school));

  // ________________________________________________________________________________


//   PROBLEM 11: findTopStudent 

let findTopStudent = (schoolData, courseName)=>{

    let maxScore = -Infinity;
    let studentName = "";

    let studentsData = schoolData.students;

    studentsData.forEach((ele)=>{
        if(ele.scores[courseName] > maxScore){
            maxScore = ele.scores[courseName];
            studentName = ele
        }
    })
    
    return studentName


}

console.log(findTopStudent(school, "math"))

// ________________________________________________________________________________


//   PROBLEM 12: addNewDept 

let addNewDept = (schoolData, newData)=>{
  let res = {...schoolData};

   res.departments = {...res.departments, ...newData}
  return res

}

let newDepartment = {
  art:{
    teachers: 2, 
    students : 50
  }
}

console.log(addNewDept(school, newDepartment))

// ________________________________________________________________________________


//   PROBLEM 13: highestStudentCountDepartment

let highestStudentCountDepartment = (schoolData)=>{
  let departmentsData = schoolData.departments

  let highestStudent = -Infinity;
  let highestStudentName = "";

  for(let key in departmentsData){
    for(let keyOne in departmentsData[key]){
      if(keyOne === "students"){
        if(departmentsData[key][keyOne] > highestStudent){
          highestStudent = departmentsData[key][keyOne]
          highestStudentName = key
        } 
      }
    }
  }

  return `${highestStudentName}`
}

console.log(highestStudentCountDepartment(school))

// ________________________________________________________________________________-


//   PROBLEM 14: Greeting Message

let generateGreeting  = (name, language="English")=>{
  const GreetingMsg  = {
    "English": `Hello, ${name}!`,
    "Hindi": `नमस्ते, ${name}`,
    "Spanish": `!Hola, ${name}`,
    "French": `Bonjur, ${name}`
  }

  const greetingLogic = GreetingMsg[language] || GreetingMsg["English"];

  return greetingLogic

}

console.log(generateGreeting("Nikhil", "Spanish"))

