import './App.css';
import { Navbar } from 'flowbite-react';
import brandImg from './assets/img/brandImg.jpg'

function App() {
  return (
    <Navbar
    className='dark-theme'
    fluid={true}
  >
    <Navbar.Brand>
      <img
        src={brandImg}
        className="mr-3 h-6 sm:h-9 border-blue-700 rounded-full"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Astrography
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Services
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default App;
