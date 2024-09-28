import styled from 'styled-components';
import logo from '../assets/spartanics.webp';

const Nav = styled.nav`
  // background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  // justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  padding: 10px;
  text-decoration: none;
  font-weight: 100;
  
  &:hover {
    color: #007bff;
  }
  
  font-size: 1.5em;
`;

const Navbar = () => {
    return (
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">Teams</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
        </Nav>

    );
};

const LeftSection = styled.nav`
  display: flex;
  flex-basis: auto;
  justify-content: flex-start; // Align items to the left
  // align-items: center;
  // background-color: #f2f2f2;
  padding: 30px;
`;


const Header = () => {
    return (
        <div className="header">
            <LeftSection className='site-title'><img src={logo} width="20%" />Spartanics</LeftSection>
            <Navbar></Navbar>
        </div>
    )
};

export default Header;