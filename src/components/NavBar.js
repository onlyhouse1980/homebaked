import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color='indigo' dark expand='md'>
          <MDBNavbarBrand>
            <a href="#"><img src="/images/obcglogo-p-500.png" width={60} height={60} /></a>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/about'>
                  <a className='nav-link'>About</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>Documents</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href='/'>
                        <a>Articles of Incorporation</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/proposed'>
                        <a>Proposed Bylaws</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href='/current'>
                        <a>Current Bylaws</a>
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link'>Check Usage</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/Efficiency'>
                  <a className='nav-link'>Use Efficiency</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/executive'>
                  <a className='nav-link'>Executive Board</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>System Plan</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link'>Contact</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default Layout;
