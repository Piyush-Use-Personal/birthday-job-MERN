import styled from 'styled-components';

export const Container = styled.div.attrs((props: any) => {
  const color = `${props.color || 'primary'}Text`;
  const backgroundColor = props.color || 'primary';

  return {
    color: props.reverse ? backgroundColor : color,
    backgroundColor: props.reverse ? color : backgroundColor,
  };
})`
  background: ${(props: any) => props.theme[props.backgroundColor]};
  color: ${(props: any) => props.theme[props.color]};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageContainer = styled(Container)`
  background: ${(props: any) => props.background};
`;

export const Row = styled.div.attrs((props: any) => {
  const direction = props.mobile ? 'column' : 'row';
  const justifyContent = props.justifyContent ?? 'start';
  const alignItems = props.alignItems ?? 'start';
  const reverse = props.reverse;

  return {
    direction: `${direction + (reverse ? '-reverse' : '')}`,
    justifyContent,
    alignItems,
  };
})`
  display: flex;
  flex-direction: ${(props: any) => props.direction};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
`;

export const RowFill = styled(Row)`
  width: 100%;
`;

export const PseudoRowFill = styled(RowFill)`
  position: relative;
  margin-bottom: 34px;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 35px;
    transform: translateX(-50%);
    width: 2px;
    height: 35px;
    background: #fff;
  }
`;

export const Column = styled.div.attrs((props: any) => {
  const justifyContent = props.justifyContent;
  const justifySelf = props.justifySelf;
  const alignItems = props.alignItems;
  const alignSelf = props.alignSelf;
  const flex = props.flex;
  const height = props.height ?? 'auto';

  return {
    justifyContent,
    alignItems,
    alignSelf,
    justifySelf,
    flex,
    height,
  };
})`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  align-self: ${(props: any) => props.alignSelf};
  justify-self: ${(props: any) => props.justifySelf};
  flex: ${(props: any) => props.flex};
  height: ${(props: any) => props.height};
`;

export const ColumnFill = styled(Column)`
  width: 100%;
`;
