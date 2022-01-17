import styled from 'styled-components';

interface inputProps {
  color?: string;
  reverse?: boolean;
  stretch?: boolean;
}
export const TextBox = styled.input.attrs((props: any) => {
  const color = `${props.color}Text`;
  const backgroundColor = `${props.color}`;
  const width = props.stretch ? '100%' : 'auto';
  return {
    color: props.reverse ? backgroundColor : color,
    backgroundColor: props.reverse ? color : backgroundColor,
    width,
  };
})<Pick<inputProps, 'color' | 'reverse' | 'stretch'>>`
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props: any) => props.theme[props.color]};
  width: ${(props: any) => props.width};
  background-color: ${(props: any) => props.theme[props.backgroundColor]};
`;

export const Select = styled.select.attrs((props: any) => {
  const color = `${props.color}Text`;
  const backgroundColor = `${props.color}`;
  const width = props.stretch ? '100%' : 'auto';
  return {
    color: props.reverse ? backgroundColor : color,
    backgroundColor: props.reverse ? color : backgroundColor,
    width,
  };
})<Pick<inputProps, 'color' | 'reverse' | 'stretch'>>`
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props: any) => props.theme[props.color]};
  width: ${(props: any) => props.width};
  background-color: ${(props: any) => props.theme[props.backgroundColor]};
`;