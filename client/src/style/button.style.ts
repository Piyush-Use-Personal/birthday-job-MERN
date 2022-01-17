/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

interface buttonProps {
  color?: string;
  reverse?: boolean;
  stretch?: boolean;
}
const ButtonContainer = styled.button.attrs((props: any) => {
  const color = `${props.color}Text`;
  const backgroundColor = `${props.color}`;
  const width = props.stretch ? '100%' : 'auto';
  return {
    color: props.reverse ? backgroundColor : color,
    backgroundColor: props.reverse ? color : backgroundColor,
    width,
  };
})<Pick<buttonProps, 'color' | 'reverse' | 'stretch'>>`
  color: ${(props: any) => props.theme[props.color]};
  width: ${(props: any) => props.width};
  background-color: ${(props: any) => props.theme[props.backgroundColor]};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 15px 25px;
  font-weight: 700;
  font-size: 12px;
  &:hover {
    opacity: 0.9;
  }
`;

export const Button = styled(ButtonContainer).attrs((props: any) => {
  return {
    width: props.width ?? '180px',
  };
})`
  width: ${(props: any) => props.width};
  a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    width: 100%;
  }
`;

export const PrimaryButton = styled.span.attrs((props: any) => ({
  padding: props.isMobile ? '8px 40px' : '8px 120px',
}))`
  background: ${(props: any) => props.theme.accent};
  color: ${(props: any) => props.theme.accentColor};
  border: 1px solid #707070;
  border-radius: 19px;
  padding: ${(props: any) => props.padding};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  background: ${(props: any) => props.theme.secondary};
  color: ${(props: any) => props.theme.secondaryColor};
  border: 1px solid #707070;
  border-radius: 34px;
  cursor: pointer;
  padding: 8px 32px;
  &:hover {
    opacity: 0.9;
  }
`;
export const TernaryButton = styled(SecondaryButton)`
  background: ${(props: any) => props.theme.ternary};
  color: ${(props: any) => props.theme.mainColor};
  font-size: 22px;
  line-height: 30px;
`;

export const RoundButton = styled(PrimaryButton)`
  border-radius: 50%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SingleCharacterButton = styled(PrimaryButton)`
  padding: 8px 20px;
`;
export const InheritInput = styled.input`
  background: none;
  border: none;
  font-size: inherit;
  width: 100%;
  outline: none;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
