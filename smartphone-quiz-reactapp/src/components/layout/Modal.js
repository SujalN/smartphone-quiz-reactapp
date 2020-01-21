import React, { Component } from "react";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardTitle,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  Delete,
  Button,
  Content
} from "bloomer";

import quizQuestions from "../../api/quizQuestions";
import Quiz from "../Quiz/Quiz";
import Result from "../Quiz/Result";
import update from "react-addons-update";
import QuestionCount from "../Quiz/QuestionCount";

class ModalComponent extends Component {
  state = {
    counter: 0,
    questionId: 1,
    question: "",
    answerOptions: [],
    answer: "",
    answersCount: {
      iPhone_11_Pro: 0,
      Galaxy_s10: 0,
      OnePlus_7T: 0
    },
    result: ""
  };

  UNSAFE_componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected = event => {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  };

  setUserAnswer = answer => {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  };

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  };

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  };

  setResults = result => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  };

  renderResult = () => {
    return <Result quizResult={this.state.result} />;
  };

  render() {
    const { isActive, launchModal } = this.props;
    return (
      <Modal isActive={isActive}>
        <ModalBackground onClick={launchModal} />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>
              <QuestionCount />
            </ModalCardTitle>
            <Delete onClick={launchModal} />
          </ModalCardHeader>

          <ModalCardBody>
            <Content>
              {this.state.result ? this.renderResult() : this.renderQuiz()}
            </Content>
          </ModalCardBody>

          <ModalCardFooter>
            <Button isColor="success">Save</Button>
            <Button isColor="warning" onClick={launchModal}>
              Cancel
            </Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
  }
}

export default ModalComponent;
