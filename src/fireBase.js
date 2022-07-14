import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,setDoc,doc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtTP0ETXHJOo15_kAIAOjShm_cxo7_FoE",
  authDomain: "piston-quiz.firebaseapp.com",
  projectId: "piston-quiz",
  storageBucket: "piston-quiz.appspot.com",
  messagingSenderId: "58190409157",
  appId: "1:58190409157:web:4144751306c1297a98afac",
  measurementId: "G-NEFKXBHXXC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const quizCategory = [
//  {
//     "title": "History of automobile",
//     "description": "What do you know about the automobile history?",
//     "image":
//       "https://drive.google.com/uc?export=view&id=1xiyrNvW7VKMUAMV2IkWW1TbDovCN6lwP",
//     "quiz1": {
//       "title": "American Muscle cars History",
//       "description": "American Cars were fabulous",
//       "image":
//         "https://drive.google.com/uc?export=view&id=1JjzA4mqtWa0JfZkEvVErAwEh1RiFPddT",
//       "questions": [
//         {
//           "Question1": {
//             "question": "Which of the following car is driven by the James Bond",
//             "options": [
//               "DeLorean DMC-12",
//               "Herbie",
//               "Aston Martin DB5",
//               "Chitty Chitty Bang Bang",
//             ],
//             "answer": "Aston Martin DB5",
//           },
//         },
//         {
//           "Question2": {
//             "question":
//               "Who invented the gas-powered internal combustion engine?",
//             "options": [
//               "Henry Ford",
//               "Rudolf Diesel",
//               "Karl Benz",
//               "Nicolas Otto",
//             ],
//             "answer": "Nicolas Auto",
//           },
//         },
//         {
//           "Question3": {
//             "question": "When was the first gas driven car made?",
//             "options": ["1807", "1885", "1760", "1910"],
//             "answer": "1885",
//           },
//         },
//         {
//           "Question4": {
//             "question":
//               "What was the top speed of the Benz Motorwagen, the first practical automobile?",
//             "options": ["50km/hr", "10km/hr", "25km/hr", "5km/hr"],
//             "answer": "10km/hr",
//           },
//         },
//         {
//           "Question5": {
//             "question": "When was the world’s first official motor race held?",
//             "options": ["1918", "1939", "1913", "1895"],
//             "answer": "1895",
//           },
//         },
//       ],
//     },
//     "quiz2": {
//       "title": "Legacy of  Indian Bikes",
//       "description": "Indian classic two stroke Bikes",
//       "image":
//         " https://drive.google.com/uc?export=view&id=11bcR8oB1Kn3WKmDeN9k1fkgUzVVdCuf7",
//       "questions": [
//         {
//           "Question1": {
//             "question": "Which of the year yezdi was started producing bikes?",
//             "options": ["1947", "1973", "1990", "1980"],
//             "answer": "1973",
//           },
//         },
//         {
//           "Question2": {
//             "question": "Who bought JAWA bikes company after its dilution?",
//             "options": ["Mahindra", "Tata", "Jaguar", "Bajaj"],
//             "answer": "Mahindra",
//           },
//         },
//         {
//           "Question3": {
//             "question": "When was the first gas driven car made?",
//             "options": ["1807", "1885", "1760", "1910"],
//             "answer": "1885",
//           },
//         },
//         {
//           "Question4": {
//             "question":
//               "What was the top speed of the Benz Motorwagen, the first practical automobile?",
//             "options": ["50km/hr", "10km/hr", "25km/hr", "5km/hr"],
//             "answer": "10km/hr",
//           },
//         },
//         {
//           "Question5": {
//             "question": "When was the world’s first official motor race held?",
//             "options": ["1918", "1939", "1913", "1895"],
//             "answer": "1895",
//           },
//         },
//       ],
//     },
//   },
// ];

const quizCategory = [
  {
    title: "History of automobile",
    description: "What do you know about the automobile history?",
    image:
      "https://drive.google.com/uc?export=view&id=1xiyrNvW7VKMUAMV2IkWW1TbDovCN6lwP",
    quiz1: {
      title: "American Muscle cars History",
      description: "American Cars were fabulous",
      image:
        "https://drive.google.com/uc?export=view&id=1JjzA4mqtWa0JfZkEvVErAwEh1RiFPddT",
      questions: [
        {
          Question1: {
            question: "Which of the following car is driven by the James Bond",
            options: [
              "DeLorean DMC-12",
              "Herbie",
              "Aston Martin DB5",
              "Chitty Chitty Bang Bang",
            ],
            answer: "Aston Martin DB5",
          },
        },
        {
          Question2: {
            question:
              "Who invented the gas-powered internal combustion engine?",
            options: [
              "Henry Ford",
              "Rudolf Diesel",
              "Karl Benz",
              "Nicolas Otto",
            ],
            answer: "Nicolas Auto",
          },
        },
        {
          Question3: {
            question: "When was the first gas driven car made?",
            options: ["1807", "1885", "1760", "1910"],
            answer: "1885",
          },
        },
        {
          Question4: {
            question:
              "What was the top speed of the Benz Motorwagen, the first practical automobile?",
            options: ["50km/hr", "10km/hr", "25km/hr", "5km/hr"],
            answer: "10km/hr",
          },
        },
        {
          Question5: {
            question: "When was the world’s first official motor race held?",
            options: ["1918", "1939", "1913", "1895"],
            answer: "1895",
          },
        },
      ],
    },
    quiz2: {
      title: "Legacy of  Indian Bikes",
      description: "Indian classic two stroke Bikes",
      image:
        " https://drive.google.com/uc?export=view&id=11bcR8oB1Kn3WKmDeN9k1fkgUzVVdCuf7",
      questions: [
        {
          Question1: {
            question: "Which of the year yezdi was started producing bikes?",
            options: ["1947", "1973", "1990", "1980"],
            answer: "1973",
          },
        },
        {
          Question2: {
            question: "Who bought JAWA bikes company after its dilution?",
            options: ["Mahindra", "Tata", "Jaguar", "Bajaj"],
            answer: "Mahindra",
          },
        },
        {
          Question3: {
            question: "When was the first gas driven car made?",
            options: ["1807", "1885", "1760", "1910"],
            answer: "1885",
          },
        },
        {
          Question4: {
            question:
              "What was the top speed of the Benz Motorwagen, the first practical automobile?",
            options: ["50km/hr", "10km/hr", "25km/hr", "5km/hr"],
            answer: "10km/hr",
          },
        },
        {
          Question5: {
            question: "When was the world’s first official motor race held?",
            options: ["1918", "1939", "1913", "1895"],
            answer: "1895",
          },
        },
      ],
    },
  },
];
const obj3 = [
  {
    image:
      "https://drive.google.com/uc?export=view&id=1xiyrNvW7VKMUAMV2IkWW1TbDovCN6lwP",
    title: "History OF Automobiles",
    quiz: ["quiz1", "quiz2"],
  },
];
(async function () {
  await setDoc(
    doc(db, "QuizCategory", "HistoryOFAutomobiles"),
    obj3[0]
  );
})();

export const auth = getAuth(app);
export default app;
export { db };
