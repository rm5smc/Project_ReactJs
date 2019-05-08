import React, { Component } from 'react';

class Social_Icons extends Component {
  render() {
    return (
        <section className="social">
            <div className="header-socials">
                <ul className="socials">
                    <li className="socials-item1 fb-icon"><a className="select__fb" ><i className="fa fa-facebook" />FACEBOOK</a></li>
                    <li className="socials-item tw-icon"><a className="select" ><i className="fab fa-twitter" />TWITTER</a></li>
                    <li className="socials-item inst-icon"><a className="select" ><i className="fab fa-instagram" />INSTAGRAM</a></li>
                    <li className="socials-item gg-icon"><a className="select" ><i className="fab fa-google-plus" />GOOGLE+</a></li>
                    <li className="socials-item wf-icon"><a className="select" ><i className="fas fa-wifi" />PINTEREST</a></li>
                    <li className="socials-item lk-icon"><a className="select" ><i className="fab fa-linkedin" />LINKIDN</a></li>
                </ul>
            </div>
       </section>
    );
  }
}

export default Social_Icons;