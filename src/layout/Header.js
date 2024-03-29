import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          Renoir <strong>Lucena</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item menu-item-has-children">
              <Link href="/">

                <span className="mask-lnk">Home</span>
                <span className="mask-lnk mask-lnk-hover">Home</span>

              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/resume">

                <span className="mask-lnk">Resume</span>
                <span className="mask-lnk mask-lnk-hover">Resume</span>

              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/works">

                <span className="mask-lnk">Portfolio</span>
                <span className="mask-lnk mask-lnk-hover">Portfolio</span>

              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/contacts">

                <span className="mask-lnk">Contact</span>
                <span className="mask-lnk mask-lnk-hover">Contact</span>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
