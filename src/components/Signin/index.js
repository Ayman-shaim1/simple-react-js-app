import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form acttion="#">
            <FormH1>Sign in your account</FormH1>
            <FormLabel htmlFor="Email">Email </FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="Password">Password</FormLabel>
            <FormInput type="email" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
