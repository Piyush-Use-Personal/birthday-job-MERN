import styled from 'styled-components';
import { ColumnFill } from './layout.style';

export const CollapsableContainer = styled(ColumnFill)`
  border: 2px solid rgba(11, 102, 35, 1);
  background: linear-gradient(
    195deg,
    rgba(11, 102, 35, 1) 0,
    rgba(0, 128, 0, 0.8) 100%
  );
  color: #fff;
  margin: 1rem 0;
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
`;

export const CollapsableContent = styled.div.attrs((props: any) => ({
  hide: props.hide ? '0' : 'auto',
}))`
  height: ${(props: any) => props.hide};
  transition: all 0.5s linear;
  overflow: hidden;
`;
