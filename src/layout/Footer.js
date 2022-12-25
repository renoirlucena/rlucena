const Footer = () => {
  return (
    <footer className="footer">
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.github.com/renoirlucena">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/renoirlucena">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/renoirlucena">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/5511973753155">
            <span className="icon fab fa-whatsapp" />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:13475719001">
            <span className="icon fab fa-skype" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:hi@renoirlucena.dev">
            <span className="icon fa fa-envelope" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
