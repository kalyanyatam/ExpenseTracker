// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layout';

const DashboardStyled = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`;

const Dashboard = () => {
  return (
    <DashboardStyled>
      <InnerLayout>
        
      </InnerLayout>
    </DashboardStyled>
  );
};

export default Dashboard;
