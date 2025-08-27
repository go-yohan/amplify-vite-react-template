import styled from 'styled-components';

const Nav = styled.nav`
  // background-color: #f2f2f2;
  padding: 20px;
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
      <NavLink href="/teams">Teams</NavLink>
      <NavLink href="/contact">Contact</NavLink>

    </Nav>

  );
};

const LeftSection = styled.nav`
  display: flex;
  // align-items: center;
  // background-color: #f2f2f2;
  font-size: 2em;
  padding: 30px;
`;


const Header = () => {
  return (
    <div className="header">
      <LeftSection className='site-title'>Aperture Robotics</LeftSection>
      <Navbar></Navbar>
    </div>
  )
};

export default Header;