// src/components/Analytics/Analytics.jsx
import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layout';

const IncomeStyled = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`;

const Income = () => {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-content">
            <div className="form-container"></div>
            <div className="incomes">
              
            </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

export default Income;
