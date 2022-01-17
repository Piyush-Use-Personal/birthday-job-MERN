/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const CardContainer = styled.div.attrs((props: any) => ({
  width: `${props.width ?? 'auto'}`,
}))`
  transition: 0.3s;
  width: ${(props: any) => props.width};
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 40%);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const CardInnerStyle = styled.div`
  padding: 2px 16px;
`;

export const RoundedCardContainer = styled.div.attrs((props: any) => ({
  borderRadius: `${props.radius ?? 0}px`,
}))`
  border-radius: ${(props: any) => props.borderRadius};
  overflow: hidden;
  width: fit-content;
`;

export const FeatureCard = styled.div.attrs((props: any) => ({
  barColor: `${props.barColor ?? 'none'}`,
  barWidth: `${props.barWidth ?? 0}px`,
  padding: `${props.fullpad ?? 0}`,
}))`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 20px 10px;
  padding: ${(props: any) => props.padding};
  border: ${(props: any) => `3px solid ${props.theme[props.barColor]}`};
  box-shadow: 0 3px 10px rgb(0 0 0 / 40%);
  // &:before {
  //   content:'';
  //   position:absolute;
  //   top:0;
  //   left:0;
  //   width: ${(props: any) => props.barWidth};
  //   height:100%;
  //   background-color: ${(props: any) => props.theme[props.barColor]}
  // }
`;
