const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/renoir.png" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
          I am an aspiring full-stack developer, and I really enjoy working in a fast-paced,
          flexible environment where folks love learning and tackling tough problems.
          My excitement for coding keeps me motivated to keep learning and improving in this ever-changing field.
          I actively look for projects that challenge me and help me get better while coming up with creative solutions.
          I am committed to staying up-to-date with the latest tech trends and love sharing what I know with others.
          My goal is to be a helpful team member, working together to make software that makes a real difference in the world.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 37
              </li>
              <li>
                <strong>Residence:</strong> Houston, TX
              </li>
              <li>
                <strong>Phone:</strong> +1 (346) 634-6222
              </li>
              <li>
                <strong>E-mail:</strong> renoirlucena@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="/docs/docs/resume.pdf" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
