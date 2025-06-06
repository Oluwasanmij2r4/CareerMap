const career = [
  {
    title: "Computer Engineering",
    skills: ["Signal Processing", "Control Systems", "Power Generation"],
    difficulty: 6,
  },

  {
    title: "Medicine",
    skills: [
      "Patient examination",
      "Diagnosis formulation",
      "Empathy and compassion",
      "Clear patient communication",
      "Data interpretation",
      "Critical thinking",
      "Ethical reasoning",
      "Time management",
    ],
    difficulty: 9,
  },

  {
    title: "Law",
    skills: [
      "Analytical thinking ",
      "Research",
      "Critical thinking",
      "Problem solving",
      "Ethical judgement",
    ],
    difficulty: 8,
  },

  {
    title: "Mechanical Engineering",
    skills: [
      "Robotics and Automation",
      "Manufacturing Processes",
      "Thermodynamics",
      "Fluid Mechanics",
    ],
    difficulty: 6,
  },

  {
    title: "Theatre Arts",
    skills: [
      "Public speaking",
      "Manufacturing Processes",
      "Conflict resolution",
      "Lighting",
      "Directing",
      "Organizing productions",
      "Quick thinking",
      "Innovative thinking",
    ],
    difficulty: 5,
  },
];


const careerFilter = () => {
    const userInput = prompt("Enter a max difficult level");
    const difficulty = Number(userInput);
   

    if(isNaN(difficulty)) {
        alert("Please enter a valid number")
        return
    }

    console.log("Max difficulty level is:", difficulty);
    console.log(" ");

    for(let i = 0; i < career.length; i++){
        const profession = career[i];
        const professionLevel = profession.difficulty;
        const professionSkill = profession.skills.length;

        if(professionLevel < difficulty){
            console.log(profession);
            console.log(`Number of skills required: ${professionSkill}`);

            console.log(" ");
        }
    }
}

careerFilter();