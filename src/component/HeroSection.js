import Buttons from './Buttons';

export default function HeroSection() {
  return (
    <div className="hero">
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
      <div className="floatItem-A">
        <div className="floatItem-text">
          <p>Back</p>
          <h1>Choose your card</h1>
        </div>
        <img src="./Group 51.svg" alt="" />
      </div>
      <div className="floatItem-B">
        <div className="floatItem-text">
          <p>Project has been accepted.</p>
          <h1>👍</h1>
        </div>
      </div>
    </div>
  );
}
