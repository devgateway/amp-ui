import React from 'react';

export default class ErrorHelper {
  static showErrors(errors, translate) {
    const messages = [];
    if (Array.isArray(errors)) {
      errors.forEach((error, index) => {
        messages.push(<span key={index}>{translate(error.messageKey)} <br /></span>);
      });
    } else {
      let message = '';
      if (errors && errors.message) {
        message = errors.message;
      } else {
        message = translate('unexpectedError');
      }
      messages.push(<span key={1}>{message} <br /></span>);
    }
    return (messages.length > 0 && <div className="alert alert-danger" role="alert">
      {messages}
    </div>);
  }
}
