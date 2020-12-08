import styled from "styled-components";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
  text-align: ${(props) => (props.centered ? "center" : "left")};
  width: ${(props) => (props.centered ? "60%" : "100%")};

  ${(props) => props.theme.responsiveMediumHigh} {
    width: ${(props) => (props.centered ? "80%" : "100%")};
  }
`;

export { Group };
