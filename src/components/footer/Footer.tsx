import * as React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item"><a className="title is-4" href="#">Pied Piper</a></div>
                        </div>
                        <div className="level-right"><a className="level-item" href="#">Features</a><a
                            className="level-item" href="#">Enterprise</a><a className="level-item" href="#">Support</a><a
                            className="level-item" href="#">ICO</a></div>
                    </div>
                    <hr/>
                        <div className="columns">
                            <div className="column">
                                <div className="buttons"><a className="button" href="#"><img
                                    src="/src/assets/placeholder/icons/twitter.svg" alt=""/></a><a className="button" href="#"><img
                                    src="/src/assets/placeholder/icons/facebook-f.svg" alt=""/></a><a className="button"
                                                                                         href="#"><img
                                    src="/src/assets/placeholder/icons/instagram.svg" alt=""/></a></div>
                            </div>
                            <div className="column has-text-centered has-text-right-tablet">
                                <p className="subtitle is-6">&copy; 2020 Pied Piper. All right reserved.</p>
                            </div>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
