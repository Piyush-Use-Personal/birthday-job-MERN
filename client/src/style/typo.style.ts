/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const Typo = styled.p.attrs((props: any) => {
  const color = `${props.color}Text`;
  return {
    color,
    centered: props.centered ? 'center' : 'left',
  };
})`
  color: ${(props: any) => props.theme[props.color]};
  text-align: ${(props: any) => props.centered};
  font-weight: 700;
`;

export const Heading = styled(Typo).attrs((props: any) => ({
  textAlign: props.isMobile ? 'center' : 'left',
  fontSize: props.isMobile ? '28px' : '36px',
  lineHeight: props.isMobile ? '30px' : '45px',
}))`
  text-align: ${(props: any) => props.textAlign};
  font-size: ${(props: any) => props.fontSize};
  line-height: ${(props: any) => props.lineHeight};
`;

export const Subheading = styled(Typo).attrs((props: any) => ({
  textAlign: props.isMobile ? 'center' : 'left',
  fontSize: props.isMobile ? '24px' : '28px',
  lineHeight: props.isMobile ? '30px' : '45px',
}))`
  text-align: ${(props: any) => props.textAlign};
  font-size: ${(props: any) => props.fontSize};
  line-height: ${(props: any) => props.lineHeight};
`;
export const Paragraph = styled(Typo).attrs((props: any) => ({
  fontSize: props.isMobile ? '14px' : '20px',
  textAlign: props.isMobile ? 'center' : 'left',
  lineHeight: props.isMobile ? '22px' : '28px',
  weight: props.weight ? props.weight : 500,
}))`
  font-size: ${(props: any) => props.fontSize};
  text-align: ${(props: any) => props.textAlign};
  line-height: ${(props: any) => props.lineHeight};
  font-weight: ${(props: any) => props.weight};
  letter-spacing: 0.6px;
`;

export const InheritLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const SubParagraph = styled(Paragraph).attrs((props: any) => ({
  fontSize: props.isMobile ? '12px' : '16px',
}))`
  font-size: ${(props: any) => props.fontSize};
`;

export const Text = styled(Paragraph).attrs((props: any) => ({
  fontSize: props.isMobile ? '10px' : '14px',
}))`
  font-size: ${(props: any) => props.fontSize};
`;

export const CenterParagraph = styled(SubParagraph).attrs((props: any) => ({
  maxWidth: props.maxWidth || '100%',
  padding: props.padding || 0,
}))`
  margin: 0 auto;
  max-width: ${(props: any) => props.maxWidth};
  text-align: center;
  padding: ${(props: any) => props.padding};
`;
