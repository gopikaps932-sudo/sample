
function About() {
  return (
    <section id="about" className="about section">
      <div className="section-heading">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <div className="profile-icon">G</div>
          <h3>Gopika</h3>
          <p>Computer Science Student</p>
          <div className="profile-line"></div>
          <p className="profile-location">Kerala, India</p>
        </div>

        <div className="about-text">
          <h3>Curious mind. Creative problem solver.</h3>

          <p>
            I am a Computer Science undergraduate with a
            strong interest in software development and
            artificial intelligence.
          </p>

          <p>
            I enjoy learning programming, exploring new
            technologies, and creating projects that solve
            real-world problems.
          </p>

          <p>
            My goal is to continuously improve my technical
            skills and build meaningful digital experiences.
          </p>

          <a href="#skills" className="primary-button">
            Explore My Skills
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
