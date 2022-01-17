import styled from 'styled-components';

export const Spacer = styled.div.attrs((props: any) => ({
  margin: `${props.margin}rem`,
}))`
  margin: ${(props: any) => props.margin};
`;

export const Padder = styled.div.attrs((props: any) => ({
  padding: `${props.padding}rem`,
}))`
  padding: ${(props: any) => props.padding};
`;

export const SpacerAll = styled.div.attrs((props: any) => {
  const marginTop = props.top ? `${props.top}rem` : '0rem';
  const marginBottom = props.bottom ? `${props.bottom}rem` : '0rem';
  const marginLeft = props.left ? `${props.left}rem` : '0rem';
  const marginRight = props.right ? `${props.right}rem` : '0rem';
  return {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  };
})`
  margin-top: ${(props: any) => props.marginTop};
  margin-bottom: ${(props: any) => props.marginBottom};
  margin-left: ${(props: any) => props.marginLeft};
  margin-right: ${(props: any) => props.marginRight};
`;

export const PadderAll = styled.div.attrs((props: any) => {
  const paddingTop = props.top ? `${props.top}rem` : '0rem';
  const paddingBottom = props.bottom ? `${props.bottom}rem` : '0rem';
  const paddingLeft = props.left ? `${props.left}rem` : '0rem';
  const paddingRight = props.right ? `${props.right}rem` : '0rem';
  return {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  };
})`
  padding-top: ${(props: any) => props.paddingTop};
  padding-bottom: ${(props: any) => props.paddingBottom};
  padding-left: ${(props: any) => props.paddingLeft};
  padding-right: ${(props: any) => props.paddingRight};
`;

interface spacerYProps {
  top: number;
  bottom: number;
}

export const SpacerY = styled.div.attrs((props: any) => {
  const marginTop = props.top ? `${props.top}rem` : '0rem';
  const marginBottom = props.bottom ? `${props.bottom}rem` : '0rem';
  return {
    marginTop,
    marginBottom,
  };
})<Pick<spacerYProps, 'top' | 'bottom'>>`
  margin-top: ${(props: any) => props.marginTop};
  margin-bottom: ${(props: any) => props.marginBottom};
`;
export const SpacerX = styled.div.attrs((props: any) => {
  const marginLeft = props.left ? `${props.left}rem` : '0rem';
  const marginRight = props.right ? `${props.right}rem` : '0rem';
  return {
    marginLeft,
    marginRight,
  };
})`
  margin-left: ${(props: any) => props.marginLeft};
  margin-right: ${(props: any) => props.marginRight};
`;
