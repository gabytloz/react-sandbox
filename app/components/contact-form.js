import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super( props );
  }

  componentDidMount() {
    this.refs.emailInput.focus();
  }

  render() {
    const { validateEmail, validateName, validEmail, validName, sendEmail, firstLoad } = this.props;

    let errors = {};

    errors.email  = ( ! validEmail  && ! firstLoad );
    errors.name   = ( ! validName   && ! firstLoad)

    const emailErrorMessage = <p>El email que introdujiste es incorrecto, filthy animal</p>
    const nameErrorMessage  = <p>El nombre es obligatorio y mayor a 2 caracteres</p>

    return <form ref="contactForm" onSubmit={ this.sendEmail }>
      <label htmlFor="email">Email</label>

      <input className={ errors.email ? "error" : null } id="email" type="text" ref="emailInput" placeholder="pon tu email aquí" onChange={ () => validateEmail( this.refs.emailInput ) } />
      { errors.email ? emailErrorMessage : null }

      <label htmlFor="name">Nombre</label>
      <input className={ errors.name ? "error" : null } id="name" type="text" ref="nameInput" placeholder="pon tu nombre aquí, animal!" onChange={ () => validateName( this.refs.nameInput ) } />
      { errors.name ? nameErrorMessage : null }

      <input type="button" value="Enviale!" onClick={ () => sendEmail( this.refs ) } />
    </form>
  }
}
