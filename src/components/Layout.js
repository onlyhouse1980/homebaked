import { MDBContainer } from 'mdbreact';
import NavBar from './NavBar';
import Footer from './Footer';
import Notes from './Notes'

function Layout(props) {
  return (
    <>
      <NavBar />
      <Notes />
      <MDBContainer>{props.children}</MDBContainer>
      <Footer />
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}

export default Layout;
