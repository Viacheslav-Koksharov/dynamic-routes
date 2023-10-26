import styled from 'styled-components';

const ContainerStyles = styled.div`
  position: relative;
  height: 100vh;
`;

const SpinnerStyles = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export { ContainerStyles, SpinnerStyles };
