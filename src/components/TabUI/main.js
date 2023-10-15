import styled from "styled-components";

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

export const Tab = styled.button`
  background-color: ${props => (props.active ? "#c9a575" : "transparent")};
  border-radius: 1rem;
  color: ${props => (props.active ? "#fff" : "#292F36]")};
`;