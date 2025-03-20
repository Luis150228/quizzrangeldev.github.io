import { create } from "zustand";
import { type Question } from "../store/types.d";
const API_QUESTIONS = "http://localhost:5173/public/question.json";

interface QuestionGameStore {
    questions: Question[];
    currentQuestion: number;
    endGame: boolean;
    setCurrentQuestion: (question: number) => Promise<void>;
    selectedAnswer: (answerId: number)=> void
    goNextQuestion: ()=>void
    goBackQuestion: ()=>void
    endGameQuestions: ()=>void
}


export const useQuestionGameStore = create<QuestionGameStore>((set, get) =>{
    return{
        questions: [],
        currentQuestion: 0,//Posicion o ID,numero de la pregunta (no el id de la API)
        endGame: false,

        setCurrentQuestion: async (limit: number) => {
            const call = await fetch(API_QUESTIONS)
            const callQuestions = await call.json()
            const callQuestionsGame = callQuestions.sort(()=>Math.random() - 0.5).slice(0,limit);

            // console.log(callQuestionsGame);
            set({ questions: callQuestionsGame });
        },

        selectedAnswer:(answerId: number)=>{
            const { questions, endGameQuestions, currentQuestion } = get()//recuperamos el estado o data actual
            const questionId = questions[currentQuestion].id;
            const newQuestion = structuredClone(questions)
            const questionIndex = newQuestion.findIndex(quest => quest.id === questionId)
            const questionInfo = newQuestion[questionIndex]
            const isCorrectAnswer = questionInfo.correctAnswer === answerId

            //actualizamos el estado
            // la copia se Actualiza
            newQuestion[questionIndex] = {
                ...questionInfo,
                isCorrectSeletedAnswer: isCorrectAnswer,
                selectedAnswer: answerId
            }

            set({questions: newQuestion})
            endGameQuestions()
        },

        goNextQuestion : ()=>{
            const {questions, currentQuestion} = get()
            const nextQuestion = currentQuestion + 1
            if(nextQuestion < questions.length){
                set({currentQuestion: nextQuestion})
            }
        },

        goBackQuestion : ()=>{
            const {currentQuestion} = get()
            const backQuestion = currentQuestion - 1
            if(backQuestion >= 0 ){
                set({currentQuestion: backQuestion})
            }
        },

        endGameQuestions : ()=>{
            const {questions} = get()
            const allHaveResponse = questions.every(question => question.hasOwnProperty('selectedAnswer'));
            if (allHaveResponse) {
                set({endGame: allHaveResponse})
            }
        }
    }
});