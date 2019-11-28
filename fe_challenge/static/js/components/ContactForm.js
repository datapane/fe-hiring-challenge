import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import ContactsList from "./ContactsList";

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forms: [] };
  }
  submitForm(data) {
    if (data.age) {
      axios.post("http://localhost:8000/forms", data, {
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  getForms() {
    console.log("Getting forms");
    axios.get("http://localhost:8000/forms").then(response => {
      this.setState({ forms: response.data });
    });
  }

  componentDidMount() {
    this.getForms();
  }

  render() {
    const { forms } = this.state;
    return (
      <div>
        <h1>Please fill in your contact info</h1>
        <Formik
          initialValues={{ email: "", name: "", age: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.age) {
              errors.age = "Age is Required";
            } else if (!Number.isInteger(parseInt(values.age, 10))) {
              errors.age = "Age should be a number";
            }
            if (!values.name) {
              errors.name = "Name is Required";
            } else if (values.name.length > 100) {
              errors.name = "Name is too long";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("On submit fired");
            setTimeout(() => {
              this.submitForm(values);
              this.getForms();
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="name" name="name" placeholder="name" />
              <ErrorMessage name="name" component="div" />
              <Field type="age" name="age" placeholder="age" />
              <ErrorMessage name="age" component="div" />
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={this.submitForm}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {forms ? (
          <div id="contacts-list">
            <ContactsList contacts={forms} />
          </div>
        ) : null}
      </div>
    );
  }
}
