import Buttons from './Buttons';

export default function HeroSection() {
  return (
    <>
      <div className="container ">
        <div className="hero-text">
          <h1>Empower Your Business With Stunning Design!</h1>
          <h3>
            Circle is a digital design and development studio. We design and
            develop astonishing websites and mobile apps.
          </h3>
          <div className="hero-cta">
            <Buttons />
            <Buttons />
          </div>
        </div>
        <div className="hero-img">
          <img src="./Hero Image.svg" alt="" />
        </div>
      </div>
    </>
  );
}
