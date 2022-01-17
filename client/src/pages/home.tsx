import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Button } from '../style/button.style';
import { CardContainer } from '../style/card.style';
import { ColumnFill, Container } from '../style/layout.style';
import { SpacerY } from '../style/spacer.style';
import { TextBox, Select } from '../style/textbox.style';
import { Subheading, Text } from '../style/typo.style';
import { homeFormValidate } from '../util/validation';
import useAxios from '../hooks/fetch';

const Home: React.FC = () => {
  const {
    post: {
      failed: postFailed,
      loading: postLoading,
      success,
      method: postMethod,
    },
    get: { method: getMethod, result: birthdays },
  } = useAxios();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: '',
      name: '',
      dob: '',
      template: '',
    },
    validate: homeFormValidate,
    onSubmit: (input) => {
      postMethod(`/birthday`, input);
    },
  });

  useEffect(() => {
    getMethod(`/template`, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ColumnFill height="90%" justifyContent="center" alignItems="center">
        <CardContainer width="500px">
          <form onSubmit={handleSubmit}>
            <SpacerY top={1} bottom={1}>
              <Subheading color="primary">Add birthday</Subheading>
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
                placeholder="Name of person*"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                stretch
              />
              <Text color="danger">{errors.name}</Text>
            </SpacerY>
            <SpacerY top={1} bottom={1}>
              <TextBox
                color="fade"
                placeholder="Date of birth of person*"
                type="date"
                id="dob"
                name="dob"
                onChange={handleChange}
                value={values.dob}
                stretch
              />
              <Text color="danger">{errors.dob}</Text>
            </SpacerY>
            <SpacerY top={1} bottom={1}>
              <Select
                stretch
                color="fade"
                onChange={handleChange}
                name="template"
                id="template"
              >
                <option value="">Select Template</option>
                {birthdays.map(({ _id, name }: any) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
              </Select>
              <Text color="danger">{errors.template}</Text>
            </SpacerY>
            <SpacerY top={0.4} bottom={1}>
              <Button type="submit" color="secondary" stretch reverse>
                {postLoading ? 'Loading...'
                  : (success
                  ? 'Saved and add more'
                  : 'Submit')}
              </Button>
              {postFailed && <Text color="danger">Something went wrong!</Text>}
            </SpacerY>
          </form>
        </CardContainer>
      </ColumnFill>
    </Container>
  );
};

export default Home;
