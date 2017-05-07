import React, {PropTypes} from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="four columns">
            <div className="side-footer-left">
              <p>All Content is from <a href="https://bethesda.net/en/dashboard" target="_blank">Bethesda</a> <a href="https://www.fallout4.com/" target="_blank">Fallout</a> games.</p>
              <p>Support them by buying the games <a href="http://store.bethsoft.com/brands/fallout" target="_blank">here</a>.</p>
            </div>
          </div>
          <div className="four columns">
            <p className="vault-logo">Vault Tech</p>
            <img src="../images/logo.png" className="vault-logo-img"/>
          </div>
          <div className="four columns">
            <div className="side-footer-right">
              <p>Website Built By</p>
              <p>
                <a href="http://jacobtheevans.com" target="_blank">Jacob Evans</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
