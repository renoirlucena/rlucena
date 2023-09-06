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
          I am an aspiring full stack developer and marketing director.
          I thrive in a fast-paced, agile environment where people value
          learning and growing with challenges.
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
            <a href="docs/resume.pdf" className="btn hover-animated">
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
