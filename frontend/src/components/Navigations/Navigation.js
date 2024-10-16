import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.jpg'
import menuItems from '../../utils/menuitems'


function Navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt='' />
            <h2>Mike</h2>
            <p>your Money</p>

        </div>
        <ul className='menu-items'>
            {menuItems.map((item) =>{
                return <li
                  key={item.id}
                ></li>
            })}
        </ul>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
`;

export default Navigation