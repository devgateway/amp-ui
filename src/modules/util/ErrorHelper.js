import React from 'react';

export default class ErrorHelper {
  static showErrors(errors, translate) {
    const messages = [];
    if (Array.isArray(errors)) {
      errors.forEach((error, index) => {
        messages.push(<span key={index}>{translate(error.messageKey)} <br /></span>);
      });
    } else {
      messages.push(<span key={1}>{errors} <br /></span>);
    }


    return (errors.length > 0 && <div className="alert alert-danger" role="alert">
      {messages}
    </div>);
  }
}
