import styled from "styled-components";

interface GroupProps {
  centered: boolean;
}

const Group = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
  text-align: ${(props) => (props.centered ? "center" : "left")};
  width: ${(props) => (props.centered ? "60%" : "100%")};

  & > *:first-child {
    margin-bottom: 1rem;
  }

  ${(props) => props.theme.responsive.mediumHigh} {
    width: ${(props) => (props.centered ? "80%" : "100%")};
  }
`;

export { Group };
