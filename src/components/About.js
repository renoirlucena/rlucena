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
          My tech journey started at age 14 and has been full of ups and downs. Early challenges,
          like leaving college for financial reasons and becoming a parent in 2009,
          made me even more determined.</p>
          <p>
          In 2022, I joined a Full Stack Boot Camp in São Paulo, Brazil. During this program,
          I got into web development and became proficient in tools and languages like HTML5, CSS3, JavaScript, SQL, and Ruby.
          Additionally, working within Agile frameworks allowed me to understand the importance of adaptability, collaboration,
          and continuous feedback in project management. Realizing the importance of digital marketing today,
          I jumped into areas like SEO, Google Analytics, and online ads, giving me a well-rounded view of the digital world.
          </p>
          <p>
          My time at Lidi Lopez Studio was a real eye-opener. Beyond the usual marketing stuff, I got into photography and videomaking.
          This experience helped me get better at the creative side, and now I’m pretty good with tools like Photoshop and Premiere to make cool visuals.

          Throughout my career, teamwork and clear communication have been key. I believe the best results come when everyone collaborates, sharing the same goal.
          I have always aimed to create a positive, goal-focused environment, no matter my role.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 37
              </li>
              <li>
                <strong>Residence:</strong> Katy, TX
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
            <a href="docs/resume - renoir lucena.pdf" className="btn hover-animated">
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
