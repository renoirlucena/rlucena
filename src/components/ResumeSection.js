const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2016 - Present</div>
                <div className="name">Marketing Director - Lidi Lopez Studio - São Paulo</div>
                <div className="text">
                •	Plan and execute all digital marketing, including SEO/SEM,
                marketing database, email, social media and display advertising campaigns
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2011 - 2016</div>
                <div className="name">Assistant Manager - Sant Ambroeus - New York City</div>
                <div className="text">
                Responsible for managing all facets of the Dining Room and Service operations at
                the restaurant and consistently looks for opportunities to grow our teams and provide
                memorable moments of hospitality for our guests.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2007 - 2010</div>
                <div className="name">Manager - Shell - Randolph, MA</div>
                <div className="text">
                Responsible for the overall operations of the store. Handled multiple
                responsibilities and delivered quality customer service in a fast-paced environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
