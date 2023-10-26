import { BallTriangle } from 'react-loader-spinner';
import {
  ContainerStyles,
  SpinnerStyles,
} from './Loader.styled';

const Loader = ({ ariaLabel, height, width, radius, color }) => (
  <ContainerStyles>
    <SpinnerStyles>
      <BallTriangle
        ariaLabel={ariaLabel}
        height={height}
        width={width}
        radius={radius}
        color={color}
      />
    </SpinnerStyles>
  </ContainerStyles>
);

export default Loader;
