import React from "react";
import ContactForm from  "./contact-form";

const EmailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    //Bind this, to this component on every event
    this.sendEmail      = this.sendEmail.bind( this );
    this.validateEmail  = this.validateEmail.bind( this );
    this.validateName   = this.validateName.bind( this );

    // Set initial component state
    this.state = { validEmail: false, validName: false, firstLoad: true };
  }

  sendEmail( refs ) {
    const { nameInput, emailInput } = refs;
    const { validEmail, firstLoad } = this.state;

    if ( ! validEmail ) return

    this.setState({ name: nameInput.value, email: emailInput.value, firstLoad: false });
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

  render() {
    const { name, validEmail, validName, firstLoad } = this.state;

    return <div id="contactComponent">
      <h1>Contactanos!</h1>

      { name ? <h1>Hola { name }</h1> : <ContactForm sendEmail={ this.sendEmail } validateEmail={ this.validateEmail } validateName={ this.validateName } validEmail={ validEmail } validName={ validName } firstLoad={ firstLoad } /> }
    </div>
  }
}
