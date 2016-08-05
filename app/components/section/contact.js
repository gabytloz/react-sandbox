import React from "react";
import ContactForm from  "../modules/contact-form";

const EmailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    //Bind this, to this component on every event
    this.sendEmail        = this.sendEmail.bind( this );
    this.validateEmail    = this.validateEmail.bind( this );
    this.validateName     = this.validateName.bind( this );
    this.validateMessage  = this.validateMessage.bind( this );

    // Set initial component state
    this.state = { validEmail: false, validName: false, validMessage: false,  firstLoad: true };
  }

  sendEmail( refs ) {
    const { nameInput, emailInput, messageInput } = refs;
    const { validEmail, firstLoad } = this.state;

    if ( ! validEmail ) return

    this.setState({ name: nameInput.value, email: emailInput.value, message: messageInput.value, firstLoad: false });
  }

  validateName(nameInput) {
    const name = nameInput.value;
    this.setState({ validName: ( name.length && name.length > 1 ), firstLoad: false });
  }

  validateEmail( emailInput ) {
    const email = emailInput.value;

    // Only update state if email string is longer than 5 characters
    if ( email.length && email.length < 5 ) return

    this.setState({ validEmail: EmailRegexp.test( email ), firstLoad: false });
  }

  validateMessage( messageInput ) {
    const message = messageInput.value;

    // Only update state if email string is longer than 5 characters
    this.setState({ validMessage: ( message.length && message.length > 4 ), firstLoad: false });
  }

  render() {
    const { name, validEmail, validName, validMessage, firstLoad } = this.state;

    return <section id="contactComponent" className="grayBack">
      <h1>Contact me</h1>

      { name ? <p id="messageSent"><em>Thanks for writting { name }</em>,<br /> Your message as been sent, I'll contact you as soon as I can.</p> : <ContactForm sendEmail={ this.sendEmail } validateEmail={ this.validateEmail } validateName={ this.validateName } validateMessage={ this.validateMessage } validEmail={ validEmail } validName={ validName } validMessage={ validMessage } firstLoad={ firstLoad } /> }
    </section>
  }
}
