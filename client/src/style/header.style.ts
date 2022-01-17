import styled from 'styled-components';
import { Paragraph } from './typo.style';

export const SideBarStyle = styled.div`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.mainColor};
  height: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  overflow-x: hidden;
  transition: 0.3s;
`;

export const NavItem = styled(Paragraph)`
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.primaryText};
`;
