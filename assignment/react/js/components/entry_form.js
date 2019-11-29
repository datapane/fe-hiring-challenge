import React, { Component } from 'react';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', age: '', email: '',
    errors: {name: '', age: '', email: ''}
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    const { name, value } = event.target;
    this.setState({name: value});
    let errors = this.state.errors;
    errors.name =
        value.length < 5
          ? 'Name must be at least 5 characters long'
          : '';
    this.setState({errors, [name]: value});
  }

  handleAgeChange(event) {
    this.setState({age: event.target.value});
  }

  handleEmailChange(event) {
    const { email, value } = event.target;
    this.setState({email: value});
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    errors.email =
        validEmailRegex.test(value)
          ? ''
          : 'Enter a valid email';
    this.setState({errors, [email]: value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };
    if(validateForm(this.state.errors)) {
         const data = new FormData(event.target);
         fetch('/api/entry/', {
         method: 'POST',
         body: data,
    });
    }else{
        alert('Enter correct value in all the fields.');
  }
  this.props.refreshTable();
  }

  render() {
    const {errors} = this.state;
    return (
      <form className="col-md-5" onSubmit={this.handleSubmit}>
      <div className="form-group">
          <label for="nameInput">Name</label>
          <input className='form-control' id='nameInput' name='name' type="text" value={this.state.name} onChange={this.handleNameChange} />
          {errors.name.length > 0 &&
           <span className='text-danger'>{errors.name}</span>}
      </div>
      <div className="form-group">
        <label for="ageInput">Age</label>
        <input className='form-control' id="ageInput" name='age' type="number" min="0" step="1" value={this.state.age} onChange={this.handleAgeChange} />
      </div>
      <div className="form-group">
        <label for="emailInput">Email</label>
        <input className='form-control' id="emailInput" name='email' type="email" value={this.state.email} onChange={this.handleEmailChange} />
        {errors.email.length > 0 &&
           <span className='text-danger'>{errors.email}</span>}
      </div>
      <input className='btn btn-primary' type="submit" value="Submit" />
      </form>
    );
  }
}

export default EntryForm;
