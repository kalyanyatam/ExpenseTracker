import React from 'react';
import styled from 'styled-components';
import menuItems from '../../utils/menuitems';

const avatar = 'avatar1.png';  // Avatar image

function Navigation({ active, setActive }) {  // Accept active and setActive as props
  return (
    <NavStyled>
      <div className='user-con'>
        <img src={avatar} alt='User Avatar' />
        <h2>Mike</h2>
        <p>Your Money</p>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active' : ''}>
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className='bottom-nav'>
        <li>
          <LogoutButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 13v-2H7V9l-5 3 5 3v-2h9zm4 7H5v-2h15V5H5V3h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" fill="rgba(34,34,96,0.7)" />
            </svg>
            <span>Logout</span>
          </LogoutButton>
        </li>
      </div>
    </NavStyled>
  );
}
const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(155, 139, 132, 0.6));
  border: 2px solid #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;
  
  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  .user-con {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #FFFFFF;
      padding: 0.3rem;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease-in-out;
    }

    img:hover {
      transform: scale(1.05);
    }

    h2 {
      margin: 0;
      color: rgba(34, 34, 96, 1);
      font-size: 1.5rem;
      transition: color 0.3s ease;
    }

    p {
      color: rgba(34, 34, 96, 0.6);
      font-size: 1rem;
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column; 

    li {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 3rem;
      position: relative;

      &:hover {
        color: rgba(34, 34, 96, 1);
        padding-left: 3.5rem;
      }

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
    .active {
  color: rgba(34, 34, 96, 1) !important ;
  
  i {
    color: rgba(34, 34, 96, 1);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background-color: #222260;
    border-radius: 0 10px 10px 0;
  }
}


    span {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }

  .bottom-nav {
    margin-top: 2rem;
    list-style: none;
    display: flex;
    justify-content: center;
    cursor: pointer;

    li {
      display: flex;
      align-items: center;
    }
  }

  /* Responsive Styling */

  @media (max-width: 1200px) {
    width: 320px;
    .menu-items li {
      padding-left: 2.5rem;
    }
  }

  @media (max-width: 992px) {
    width: 280px;
    .menu-items li {
      padding-left: 2rem;
    }
    .user-con img {
      width: 70px;
      height: 70px;
    }
    .user-con h2 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    width: 240px;
    .menu-items li {
      padding-left: 1.5rem;
    }
    .user-con img {
      width: 60px;
      height: 60px;
    }
    .user-con h2 {
      font-size: 1.2rem;
    }
    .user-con p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    width: 200px;
    padding: 1rem;
    .menu-items li {
      padding-left: 1rem;
    }
    .user-con img {
      width: 50px;
      height: 50px;
    }
    .user-con h2 {
      font-size: 1rem;
    }
    .user-con p {
      font-size: 0.8rem;
    }
  }
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(34, 34, 96, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: rgba(34, 34, 96, 0.2);
    span {
      color: rgba(34, 34, 96, 1);
    }
    svg {
      fill: rgba(34, 34, 96, 1);
    }
  }

  svg {
    fill: rgba(34, 34, 96, 0.6);
    margin-right: 0.5rem;
    transition: all 0.4s ease-in-out;
  }

  span {
    font-size: 1rem;
    color: rgba(34, 34, 96, 0.7);
    transition: color 0.4s ease-in-out;
  }
`;

export default Navigation;
