import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super( props );
  }

  componentDidMount() {
    this.refs.emailInput.focus();
  }

  render() {
    const { validateEmail, validateName, validateMessage, validEmail, validName, validMessage, sendEmail, firstLoad } = this.props;

    let errors = {};

    errors.email  = ( ! validEmail  && ! firstLoad );
    errors.name   = ( ! validName   && ! firstLoad);
    errors.message  = ( ! validMessage  && ! firstLoad )

    const emailErrorMessage = <p>The email doesn't seem to be valid</p>
    const nameErrorMessage  = <p>Name seems to be too short</p>
    const messageErrorMessage  = <p>Your message needs to be a little longer</p>

    return <form ref="contactForm" onSubmit={ this.sendEmail }>

      <label htmlFor="name">Name</label>
      <input className={ errors.name ? "error" : null } id="name" type="email" ref="nameInput" placeholder="" onChange={ () => validateName( this.refs.nameInput ) } />
      { errors.name ? nameErrorMessage : null }

      <label htmlFor="email">Email</label>
      <input className={ errors.email ? "error" : null } id="email" type="text" ref="emailInput" placeholder="" onChange={ () => validateEmail( this.refs.emailInput ) } />
      { errors.email ? emailErrorMessage : null }

      <label>Service that you are interested on:</label>
      <select id="service" ref="serviceInput">
        <option value="-"></option>
        <option value="coding">Coding - You already have a design</option>
        <option value="design">Web design - You need just the image of the website</option>
        <option value="design and coding">Web design and coding</option>
        <option value="other or undecided">Other / Undecided</option>
      </select>


      <label className="hidden">Your message</label>
      <textarea id="message" ref="messageInput" placeholder="So what can you tell me about the project?" onChange={ () => validateMessage( this.refs.messageInput ) }></textarea>
      { errors.message ? messageErrorMessage : null }

      <input type="button" value="Send" onClick={ () => sendEmail( this.refs ) } />
    </form>
  }
}
