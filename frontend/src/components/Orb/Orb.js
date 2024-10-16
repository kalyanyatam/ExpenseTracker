import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowsize';// Ensure correct import

// Use useWindowSize inside a component
const OrbComponent = () => {
  const { width, height } = useWindowSize(); // Hooks should be called inside a component
  console.log(width, height);

  // Define keyframes for complex animations
  const orbAnimation = keyframes`
    0% {
      transform: translate(0,0) scale(1) rotate(0deg);
      background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
      opacity: 1;
    }
    25% {
      transform: translate(400px, 500px) scale(1.1) rotate(90deg);
      background: linear-gradient(180deg, #ff9966 0%, #ff5e62 100%);
      opacity: 0.9;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
      background: linear-gradient(180deg, #56ccf2 0%, #2f80ed 100%);
      opacity: 0.8;
    }
    75% {
      transform: translate(-50%, -50%) scale(1.1) rotate(270deg);
      background: linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 100%);
      opacity: 0.9;
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(360deg);
      background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
      opacity: 1;
    }
  `;

  // Styled component with advanced animations
  const StyledOrb = styled.div`
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  margin-left: -40vh;
  margin-top: -40vh;
  filter: blur(600px);
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${orbAnimation} 5s infinite ease-in-out;
  transition: opacity 0.3s ease;
`;

  return StyledOrb; // Modify this part with your JSX if needed
};

export default OrbComponent;
