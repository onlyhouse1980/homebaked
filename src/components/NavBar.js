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
        <MDBNavbar color='indigo' dark expand='xl'>
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
                  <a className='nav-link' onClick={this.toggleCollapse} >Home</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/about'>
                  <a className='nav-link' onClick={this.toggleCollapse}>About</a>
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
                  <a className='nav-link' onClick={this.toggleCollapse}>Check Usage</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/Efficiency'>
                  <a className='nav-link' onClick={this.toggleCollapse}>Use Efficiency</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/executive'>
                  <a className='nav-link' onClick={this.toggleCollapse}>Executive Board</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link' onClick={this.toggleCollapse}>System Plan</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link' onClick={this.toggleCollapse}>Contact</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

export default Layout;
