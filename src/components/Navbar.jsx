import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #322b42;
`;
const Nav = styled.nav`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #5c5470;
`;
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b9b4c7;
  list-style-type: none;
`;
const MyLogo = styled.a`
  width: 10%;
  background-color: violet;
`;

const nombre = 'TO DO TODAY';

export const Navbar = () => {
  return (
    <Header>
      <Nav>
        <MyLogo href="./App.jsx">
          <img src=""></img>
        </MyLogo>
        <Ul>
          <li>{nombre}</li>
          <li>
            <a>BOTON</a>
          </li>
        </Ul>
      </Nav>
    </Header>
  );
};
