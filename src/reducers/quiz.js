import { createSlice } from '@reduxjs/toolkit'
import bubble from '../bubble-wrap.png'
import pyramid from '../pyramid.png'
import mandm from '../candy-jar.png'
import horse from '../horse.png'
import baby from '../baby.png'
import island from '../island.png'

// Change these to your own questions!
const questions = [
  { id: 1,
    questionText: 'Bubble wrap was originally invented as...?',
    options: ['Wallpaper', 'Art', 'Carpet', 'Isolation'],
    correctAnswerIndex: 0,
    imgUrl: `${bubble}` },
  { id: 2,
    questionText: 'Which country in the world has the most pyramids?',
    options: ['Libya', 'Egypt', 'Sudan', 'Algeria'],
    correctAnswerIndex: 2,
    imgUrl: `${pyramid}` },
  { id: 3,
    questionText: 'What is the rarest M&M (candy) color?',
    options: ['Blue', 'Red', 'Yellow', 'Brown'],
    correctAnswerIndex: 3,
    imgUrl: `${mandm}` },
  { id: 4,
    questionText: 'Which animal can gallop like a horse?',
    options: ['Crocodiles', 'Ants', 'Sir Vääs', 'Lizzard'],
    correctAnswerIndex: 0,
    imgUrl: `${horse}` },
  { id: 5,
    questionText: 'How much water does a new born baby contain? ',
    options: ['1/4', '2/4', '3/4', '4/4'],
    correctAnswerIndex: 2,
    imgUrl: `${baby}` },
  { id: 6,
    questionText: 'Which country in the world has the most islands?',
    options: ['Idonesia', 'Finland', 'Greece', 'Sweden'],
    correctAnswerIndex: 3,
    imgUrl: `${island}` }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: false,
  currentQuestion: 1
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    },

    startQuiz: (state) => {
      state.quizStart = true
    }
  }
})