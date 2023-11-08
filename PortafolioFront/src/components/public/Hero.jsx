const Hero = () => {
  return (
    <>
      {" "}
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(src/assets/img/hero-bg.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6 color-d">Hello, world!</p>
              <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
