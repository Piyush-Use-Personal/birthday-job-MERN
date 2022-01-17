interface homeFormProp {
  email?: string;
  name?: string;
  dob?: string;
  template?: string;
}
export const homeFormValidate: any = (values: any) => {
  const errors: homeFormProp = {};

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address';
  }

  if (!values.name) {
    errors.name = 'name is required!';
  }

  if (!values.dob) {
    errors.dob = 'date of birth is required!';
  }

  if (!values.template) {
    errors.template = 'template is required!';
  }
  return errors;
};
