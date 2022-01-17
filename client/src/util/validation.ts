interface loginFormProp {
  email?: string;
  password?: string;
}
export const loginFormValidate: any = (values: any) => {
  const errors: loginFormProp = {};

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is required!';
  }

  return errors;
};
