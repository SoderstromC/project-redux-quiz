/* eslint-disable */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion';
import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
import quizIcon from '../quiz.png'

export const StartPage = () => {
  //const question = useSelector((state) => state.quizStart())
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>

      {!question.quizStart ? (
        <OuterWrapperStartpage>
            <InnerWrapperStartpage>
            <Start>
              <img className='start-icon' src={`${quizIcon}`} alt="icon"/>
              <h1>about random stuff</h1>
              <StartButton onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Lets get started</StartButton>
            </Start>
            </InnerWrapperStartpage>
            </OuterWrapperStartpage>
        ) : (
          <CurrentQuestion />
      )}
 
    </>
  )
}
const Start = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: solid;
border: solid 8px #C371D2;
border-radius: 50%;
height: 250px;
width: 250px;
background-color: #A27DA7;
position: absolute;
  
.start-icon {
  width: 99px;
  padding-right: 89px;
  margin-top: -20px;
  position: absolute;
  margin-bottom: 0px;
  top: 1px;
}

h1 {
  font-size: 30px;
  color: white;
  position: relative;
  margin: 5px;
  top: 65px;
  padding: 5px 15px 5px 15px;
}

  @media (min-width: 668px) {
    height: 450px;
    width: 450px;
    .start-icon {
      width: 165px;
      padding-right: 138px;
      margin-top: 13px;
    }
    
    h1 {
      font-size: 61px;
      top: 169px;
      line-height: 53px;
      padding: 5px 55px -1px 55px;
    }
  }

  @media (min-width: 1025px) {
    height: 450px;
    width: 450px;

    h2 {
      font-size: 47px;
      top: 75px;
    }
    
    h1 {
      font-size: 51px;
      top: 170px;
      line-height: 50px;
      padding: 5px 55px 5px 55px;
    }
  }
`

const StartButton = styled.button`
  padding: 10px;
  color: white;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  border: solid 1px #9D78A2;
  width: 133px;
  background-color:#D9B2DE;
  position: relative;
  top: 65px;
  text-transform: uppercase;

  &:hover {
    background-color: #533258; 
    color: white;
  }

  @media (min-width: 668px) {
    position: relative;
    top: 195px;
    padding: 14px;
    color: white;
    border-radius: 18px;
    border: none;
    width: 162px;
  }

  @media (min-width: 1025px) {
    padding: 15px;
    width: 233px;
    font-size: 18px;
`
export const InnerWrapperStartpage = styled.div`
  background-color: transparent;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`
