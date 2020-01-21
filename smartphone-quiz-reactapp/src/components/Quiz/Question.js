import React from "react";

const Question = props => {
  return <h4 className="question">{props.content}</h4>;
};

// Question.propTypes = {
//   content: React.PropTypes.string.isRequired
// };

export default Question;
