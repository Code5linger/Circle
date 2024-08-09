import Buttons from './Buttons';

export default function Navbar() {
  return (
    <header className="">
      <div className="container ">
        <div className="logo">
          <img src="./Logo.svg" alt="logo" />
        </div>
        <div className="menu-items">
          <p className="active-page">Home</p>
          <p>Projects</p>
          <p>Services</p>
        </div>
        <Buttons />
      </div>
    </header>
  );
}
