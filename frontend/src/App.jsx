import React from 'react';
import styled from 'styled-components';
import bg from './components/img/bg.png'; // Ensure correct path to the image
import { MainLayout } from './styles/layout'; // Assuming this is defined elsewhere


const App = () => {
  return (
    <AppStyled $bg={bg} className="App">
      <MainLayout>
        <h1>Hello, World!</h1>
        {/* Other content */}
      </MainLayout>
    </AppStyled>
  );
};

// Define styled component for the main container
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.$bg}); /* Using transient prop $bg */
  background-size: cover;
  background-position: center;
  position: relative; /* To ensure Orb stays inside the viewport */
  overflow: hidden; /* Prevents scrolling due to orb overflow */
`;

export default App;
