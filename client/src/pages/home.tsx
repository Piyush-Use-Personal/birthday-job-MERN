import React from 'react';
import { useFormik } from 'formik';
import { Button } from '../style/button.style';
import { CardContainer } from '../style/card.style';
import { ColumnFill, Container } from '../style/layout.style';
import { SpacerY } from '../style/spacer.style';
import { TextBox } from '../style/textbox.style';
import { Subheading, Text } from '../style/typo.style';
import { loginFormValidate } from '../util/validation';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const history = useHistory();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginFormValidate,
    onSubmit: () => {
      localStorage.setItem('login', 'true');
      history.push('/home');
    },
  });

  return (
    <Container>
      <ColumnFill height="90%" justifyContent="center" alignItems="center">
        <CardContainer width="500px">
          <form onSubmit={handleSubmit}>
            <SpacerY top={1} bottom={1}>
              <Subheading color="primary">Login</Subheading>
            </SpacerY>
            <SpacerY top={1} bottom={1}>
              <TextBox
                color="fade"
                placeholder="Email*"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                stretch
              />
              <Text color="danger">{errors.email}</Text>
            </SpacerY>
            <SpacerY top={1} bottom={1}>
              <TextBox
                color="fade"
                placeholder="Password*"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                stretch
              />
              <Text color="danger">{errors.password}</Text>
            </SpacerY>
            <SpacerY top={0.4} bottom={0.4}>
              <Text color="secondary">forget password?</Text>
            </SpacerY>
            <SpacerY top={0.4} bottom={1}>
              <Button type="submit" color="secondary" stretch reverse>
                Submit
              </Button>
            </SpacerY>
          </form>
        </CardContainer>
      </ColumnFill>
    </Container>
  );
};

export default Login;
