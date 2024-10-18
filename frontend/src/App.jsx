import React, { useState } from 'react';
import styled from 'styled-components';
import bg from './components/img/bg.png';  // Ensure correct image path
import { MainLayout } from './styles/layout';
import Navigation from './components/Navigations/Navigation.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Transactions from './components/Transactions/Transactions.jsx';
import Income from './components/Income/Income.jsx';
import Expenses from './components/Expenses/Expenses.jsx';
import Reports from './components/Reports/Reports.jsx';
import Settings from './components/Settings/Settings.jsx';
import Profile from './components/Profile/Profile.jsx';

const App = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Reports />;
      case 6:
        return <Settings />;
      case 7:
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled $bg={bg}>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()} {/* Render the active component here */}
        </main>
      </MainLayout>
    </AppStyled>
  );
};

// Main styled component
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  main {
    flex: 1;
    background: rgba(255, 230, 255, 0.2); /* Glassmorphism effect */
    border: 3px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    overflow: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center; 
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
