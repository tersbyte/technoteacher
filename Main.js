const firebaseConfig = {
  apiKey: "AIzaSyD9lmu0VWBtGuMurQBAsggpHxRgaexwGHI",
  authDomain: "techno-teachers.firebaseapp.com",
  databaseURL:
    "https://techno-teachers-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techno-teachers",
  storageBucket: "techno-teachers.appspot.com",
  messagingSenderId: "389844968264",
  appId: "1:389844968264:web:959cc954da6a1eb171097d",
  measurementId: "G-3K3R97JYVE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to store user data and marks in Firebase RTDB with a timestamp-based unique ID

//----------------------------------------------------------------------
const easyQuestions = [
  {
    id: "q1",
    question: "Do you know about the collaborative features of Google Docs?",
    options: [
      { text: "Yes, I've used it", points: 5 },
      { text: "Yes, but haven't used it", points: 3 },
      { text: "No", points: 0 },
      { text: "Heard about it, not sure", points: 0 },
    ],
  },
  {
    id: "q2",
    question:
      "What platform have you used or you still use for conducting Online classes?",
    options: [
      { text: "Google Meet", points: 5 },
      { text: "Zoom", points: 5 },
      { text: "Microsoft Teams", points: 5 },
      { text: "Others", points: 5 },
      { text: "We haven't done any online class", points: 0 },
    ],
  },
  {
    id: "q3",
    question:
      "Do you know that Microsoft has a tool Sway that can be used for creating educational multimedia presentations?",
    options: [
      { text: "Yes, I have used it", points: 5 },
      { text: "Yes, I have not used it though", points: 3 },
      { text: "No", points: 0 },
      { text: "Maybe", points: 0 },
    ],
  },
  {
    id: "q4",
    question:
      "Do you know Microsoft OneNote can be used for organising lessons, assignments, and notes?",
    options: [
      { text: "Yes, I have used it", points: 5 },
      { text: "Yes, I have not used it though", points: 3 },
      { text: "No", points: 0 },
      { text: "Maybe", points: 0 },
    ],
  },
  {
    id: "q5",
    question:
      "Do you provide digital learning content for your students via any platform such as Google Docs or any other service?",
    options: [
      { text: "Yes", points: 5 },
      { text: "No", points: 0 },
    ],
  },
];

const mediumQuestions = [
  {
    id: "q6",
    question:
      "Name a tool that enables you to create surveys and quizzes for student assessments.",
    options: [
      { text: "Microsoft Sway", points: 0 },
      { text: "Zoom", points: 0 },
      { text: "Google Meet", points: 0 },
      { text: "Google Forms", points: 5 },
    ],
  },
  {
    id: "q7",
    question:
      "How can technology tools like Adobe Creative Cloud enable students to develop multimedia-rich projects that go beyond traditional presentations?",
    options: [
      { text: "By teaching students develop apps and games", points: 0 },
      { text: "By providing learning tips for students", points: 0 },
      {
        text: "By offering suggestions for writing stories and essays",
        points: 0,
      },
      {
        text: "By allowing students to create videos, animations, and interactive content",
        points: 5,
      },
    ],
  },
  {
    id: "q8",
    question: "Did you know, Microsoft offers Educational Tools for schools?",
    options: [
      { text: "Yes, I have used it", points: 5 },
      { text: "Yes, I have not used it though", points: 3 },
      { text: "No", points: 0 },
      { text: "I've heard about it, not sure though", points: 0 },
    ],
  },
  {
    id: "q9",
    question:
      "How does Extended Reality (XR) impact students' engagement in the classroom?",
    options: [
      { text: "It has no impact on engagement", points: 0 },
      {
        text: "It can lead to overstimulation and disengagement",
        points: 0,
      },
      {
        text: "It increases student engagement through immersive experiences and interactive content",
        points: 5,
      },
      {
        text: "It eliminates the need for students to attend physical classes",
        points: 0,
      },
      { text: "Not Sure", points: 0 },
    ],
  },
  {
    id: "q10",
    question:
      "Do you know which type of technology lets students experience and learn?",
    options: [
      { text: "Artificial Intelligence", points: 0 },
      { text: "Youtube", points: 0 },
      { text: "Virtual Reality", points: 5 },
      { text: "Augmented Reality", points: 0 },
    ],
  },
  {
    id: "q11",
    question:
      "Ever heard about Virtual Reality (VR) or Augmented Reality (AR)?",
    options: [
      { text: "I know Virtual Reality", points: 3 },
      { text: "I know Augmented Reality (AR)", points: 3 },
      { text: "I know both", points: 5 },
      { text: "Not sure", points: 0 },
    ],
  },
  {
    id: "q12",
    question:
      "What are the advantages of using Google Forms for creating quizzes over traditional paper-based assessments?",
    options: [
      { text: "It requires less time to grade", points: 5 },
      { text: "It reduces the need for internet access", points: 0 },
      { text: "It allows physical distribution of quizzes", points: 0 },
      { text: "It supports advanced graphing tools", points: 0 },
    ],
  },
  {
    id: "q13",
    question: "Ever heard of an Online Game based learning app 'Kahoot'?",
    options: [
      { text: "Yes, I have used it", points: 5 },
      { text: "Yes, I have not used it though", points: 3 },
      { text: "No", points: 0 },
      { text: "I've heard about it, not sure though", points: 0 },
    ],
  },
  {
    id: "q14",
    question:
      "Does your school use an ERP platform for sharing notes, video lectures, etc with students?",
    options: [
      { text: "Yes", points: 5 },
      { text: "No", points: 0 },
      { text: "We had used it earlier, not now", points: 3 },
    ],
  },
  {
    id: "q15",
    question:
      "Do you know Microsoft OneNote facilitates accessibility for students with diverse learning needs?",
    options: [
      { text: "Yes, I have used it", points: 5 },
      { text: "Yes, I have not used it though", points: 3 },
      { text: "No", points: 0 },
      { text: "I've heard about it, not sure though", points: 0 },
    ],
  },
];

const hardQuestions = [
  {
    id: "q16",
    question: "Do you use digital tools for planning your lessons?",
    options: [
      { text: "Yes, I use it", points: 5 },
      { text: "No", points: 0 },
      { text: "I used to use it", points: 3 },
    ],
  },
  {
    id: "q17",
    question: "How often do you conduct online quizzes?",
    options: [
      { text: "Very Often", points: 5 },
      { text: "Less Often", points: 3 },
      { text: "Not at all", points: 0 },
    ],
  },
  {
    id: "q18",
    question:
      "Do you collaborate with any other teachers on any platforms to expand or share your knowledge?",
    options: [
      { text: "Yes", points: 5 },
      { text: "No", points: 0 },
      { text: "I used to be a part", points: 3 },
    ],
  },
  {
    id: "q19",
    question:
      "Have you received any technical training in how you can implement technological tools in education?",
    options: [
      { text: "Yes, I still use those tools", points: 5 },
      { text: "Yes, but don't use those tools", points: 3 },
      { text: "No", points: 0 },
    ],
  },
  {
    id: "q20",
    question:
      "Do you want to be an Advanced Techno-Teacher who makes learning fun and awesome?",
    options: [
      { text: "Yes, I want to be one!", points: 5 },
      { text: "Nah, not interested.", points: 0 },
    ],
  },
];

// Shuffling function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(easyQuestions);
shuffleArray(mediumQuestions);
shuffleArray(hardQuestions);

// Concatenate shuffled questions back
const shuffledQuestions = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions,
];

let currentQuestionIndex = 0;
let totalPoints = 0;

let userName = "";
let schoolName = "";
let phone = "";
let Email = "";
let City = "";
let marks = "";
const questionMarks = [];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options-form");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start-btn");
const introSection = document.getElementById("intro-section");
const quizSection = document.getElementById("quiz-section");

// Add this code to your showQuestion() function
function showQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1; // Calculate the question number

  // Update the progress element with the current question number and total number of questions
  const progressElement = document.getElementById("progress");
  progressElement.textContent = `Question ${questionNumber} of ${shuffledQuestions.length}:`;

  questionElement.textContent = `${questionNumber}: ${currentQuestion.question}`;

  optionsForm.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");

    const optionRadio = document.createElement("input");
    optionRadio.type = "radio";
    optionRadio.name = "option"; // Set the same name for all radio buttons in a group
    optionRadio.value = index; // Use the option's index as the value

    optionLabel.appendChild(optionRadio);
    optionLabel.appendChild(document.createTextNode(option.text));

    optionsForm.appendChild(optionLabel);
  });

  // Check if it's the last question and change the button text
  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    nextButton.textContent = "Submit";
  } else {
    nextButton.textContent = "Next";
  }
}

function selectOption(selectedIndex) {
  const selectedOption =
    shuffledQuestions[currentQuestionIndex].options[selectedIndex];
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const questionNumber = currentQuestion.id; // Get the unique identifier

  // Push an object with the question identifier and mark into the array
  questionMarks.push({ question: questionNumber, mark: selectedOption.points });

  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult(userName, schoolName, phone, Email, City, questionMarks);
  }
}

function showResult(userName, schoolName, phone, Email, City, questionMarks) {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
  let result = "";

  if (totalPoints >= 75) {
    result = `Congratulations, You are a Techno-Teacher!`;
  } else if (totalPoints >= 50) {
    result = `Great job, You are an upcoming Techno-Teacher.`;
  } else {
    result = `You will receive a participation certificate.`;
  }

  resultElement.textContent = result;

  let resultText = "";

  for (const item of questionMarks) {
    resultText += `${item.question}: ${item.mark}\n`; // Display each question and its mark
  }

  storeUserDataToFirebase(
    userName,
    schoolName,
    phone,
    Email,
    City,
    resultText // Pass the resultText instead of questionMarks
  );
}

nextButton.addEventListener("click", () => {
  const selectedOptionIndex = parseInt(
    document.querySelector('input[name="option"]:checked').value
  );
  if (!isNaN(selectedOptionIndex)) {
    selectOption(
      selectedOptionIndex,
      userName,
      schoolName,
      phone,
      Email,
      City,
      marks
    );
  }
});

startButton.addEventListener("click", () => {
  userName = document.getElementById("name").value.trim();
  schoolName = document.getElementById("school").value.trim();
  phone = document.getElementById("phone").value.trim();
  Email = document.getElementById("Email").value.trim();
  City = document.getElementById("City").value.trim();

  if (
    userName === "" ||
    schoolName === "" ||
    phone === "" ||
    Email === "" ||
    City === ""
  ) {
    alert("Please enter your Details");
    return;
  }

  // Hide intro section and show quiz section
  introSection.style.display = "none";
  quizSection.style.display = "block";

  // Initialize the questionnaire
  showQuestion();
});

//--------------------------------------------
function storeUserDataToFirebase(
  userName,
  schoolName,
  phone,
  Email,
  City,
  questionMarks
) {
  console.log("Inside store data");
  const d = new Date();

  const userData = firebase
    .database()
    .ref("User" + d.getTime())
    .set({
      name: userName,
      school: schoolName,
      phoneNumber: phone,
      email: Email,
      city: City,
      responses: questionMarks, // Store the user's responses with question identifiers
    });
}
