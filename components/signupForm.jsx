import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: false };
  }

  handleValidSubmit = (event, values) => {
    this.setState({ email: values.email });
    console.log(`Sign Up Successful`);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Sign Up Failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
            required: true,
            email: true,
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password",
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers",
            },
            minLength: {
              value: 6,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
          }}
        />
        <AvField
          name="confirm_password"
          label="Confirm Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please confirm your password",
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers",
            },
            minLength: {
              value: 6,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 6 and 16 characters",
            },
            match: {
              value: "password",
              errorMessage: "Your password must match the confirm password",
            },
          }}
        />
        <Button id="submit">Submit</Button>
      </AvForm>
    );
  }
}
