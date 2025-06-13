const careers = [
  {
    title: "Computer Engineering",
    skills: ["Signal Processing", "Control Systems", "Power Generation"],
    difficulty: 6,
    category: "Engineering",
    experience: "3 years",
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
    category: "Health",
    experience: "4 years",
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
    category: "Arts",
    experience: "5 years",
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
    category: "Engineering",
    experience: "3 years",
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
    category: "Arts",
    experience: "2 years",
  },
];


const careerFilter = () => {
    const userInput = prompt("Enter a max experience level");
    const experience = Number(userInput);
   
    if(isNaN(experience) || experience <= 0) {
        alert("Please enter a valid number")
        return
    }

    console.log("Max experience level is:", experience);
    console.log(" ");


    const groupedCareers = {};

    for(const career of careers){
      const experienceLevel = Number(career.experience[0]);
      

      if(experience >= experienceLevel){
        console.log(career);
        console.log(" ");

        const cat = career.category;

        if (!groupedCareers[cat]) {
          groupedCareers[cat] = [];
        }

        groupedCareers[cat].push(career);
      }
    }

        for (const category in groupedCareers){
          const careersInCategory = groupedCareers[category];
          console.log(
            `${category} careers above (${careersInCategory.length}):`
          );

          for(const career of careersInCategory){
            console.log(`- ${career.title} (Experience: ${career.experience})`);
          }
          console.log(" ");
        }         
      };




careerFilter();