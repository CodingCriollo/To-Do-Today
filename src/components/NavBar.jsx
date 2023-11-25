import styled from 'styled-components';
import { useState } from 'react';

const bgColor = '#352f44';

const Header = styled.header`
  padding: 10px;
  background-color: ${bgColor};
  position: relative;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.li`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Title = styled.li`
  margin: 0;
  cursor: pointer;
`;

const MenuButton = styled.li`
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 300px;
  height: 100vh;
  background-color: ${bgColor};
  max-height: ${(props) => (props.isOpen ? '100vh' : '0')};
  overflow: hidden;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-out, max-height 0.3s ease-out;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;


const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.625rem;
`;

const MenuListItem = styled.li`
  width: 50%;
  text-align: center;
  padding: 0.625rem;
  background-color: #5c5470;
  cursor: pointer;
`;

// ... (código anterior)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Nav>
        <NavList>
          <Logo>
            <a>
              <img src="src/assets/imgs/logo.png" alt="Logo To Do" />
            </a>
          </Logo>
          <Title>
            <h1>TO DO TODAY</h1>
          </Title>
          <MenuButton onClick={toggleMenu}>
            <a>
              <img src="src/assets/imgs/menu-button.svg" alt="Menu Button" />
            </a>
          </MenuButton>
        </NavList>
      </Nav>
      <Menu isOpen={isOpen}>
        <MenuList>
          <MenuListItem>Mi día</MenuListItem>
          <MenuListItem>Importante</MenuListItem>
          <MenuListItem>Planeado</MenuListItem>
        </MenuList>
      </Menu>
    </Header>
  );
};

export default NavBar;
