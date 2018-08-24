import React, { Component } from 'react';
import Love from './../assets/images/love.svg';
import PropTypes from 'prop-types';
import urlPropType from "url-prop-type";

class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
            mailAddress: '',
            fb: '',
            tw: '',
            ln: '',
            cp: '',
        }
    }

    componentDidMount(){
        fetch( this.props.api + 'wp/v2/users/' + this.props.user )
            .then(res=>res.json())
            .catch(e=>{console.log(e)})
            .then(user=>{
                this.setState({
                    mailAddress: user.user_meta._pn_u_email,
                    fb: user.user_meta._pn_u_fb,
                    tw: user.user_meta._pn_u_tw,
                    ln: user.user_meta._pn_u_ln,
                    cp: user.url,
                })
            })
    }

    render(){
        return(
            <footer className="page-footer row mx-0 top-left-line top-right-line top-left-focus" id="contact-me">
                <div className="container">
                    <h2 className="footer-title text-center text-md-left">Contact with me</h2>
                    <div className="row justify-content-between align-items-end">
                        <div className="col-lg-6">
                            <div className="row mx-0 align-items-center justify-content-center justify-content-md-start flex-column flex-md-row">
                                <a href={ "mailto:" + this.state.mailAddress } className="btn btn-primary">Write an email</a>
                                <span className="or-text">or,</span>
                                <div className="social-links">
                                    <a href={ this.state.fb } className="social-link sl-facebook">
                                        <svg width="14px" height="29px" viewBox="0 0 14 29">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Artboard" transform="translate(-954.000000, -4080.000000)" fill="currentColor" fillRule="nonzero">
                                                    <g id="facebook" transform="translate(940.000000, 4072.000000)">
                                                        <path d="M27.3349027,22.6985487 L23.4372035,22.6985487 L23.4372035,36.9779115 L17.5318584,36.9779115 L17.5318584,22.6985487 L14.7232566,22.6985487 L14.7232566,17.6802124 L17.5318584,17.6802124 L17.5318584,14.4327788 C17.5318584,12.1105133 18.6349735,8.4740885 23.4897699,8.4740885 L27.8640708,8.49238938 L27.8640708,13.3635398 L24.6902301,13.3635398 C24.1696283,13.3635398 23.4375929,13.623646 23.4375929,14.7314336 L23.4375929,17.684885 L27.8508319,17.684885 L27.3349027,22.6985487 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href={ this.state.ln } className="social-link sl-linkedin">
                                        <svg width="25px" height="25px" viewBox="0 0 25 25">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Artboard" transform="translate(-1015.000000, -4081.000000)" fill="currentColor" fillRule="nonzero">
                                                    <g id="linkedin" transform="translate(1005.000000, 4072.000000)">
                                                        <path d="M34.8947257,24.3201316 L34.8947257,33.4496053 L29.6735221,33.4496053 L29.6735221,24.9319737 C29.6735221,22.7932895 28.9196814,21.3327632 27.0292389,21.3327632 C25.5865841,21.3327632 24.7295575,22.3160526 24.3510796,23.2681579 C24.2136283,23.6084211 24.1781947,24.0809211 24.1781947,24.5581579 L24.1781947,33.4492105 L18.9566018,33.4492105 C18.9566018,33.4492105 19.0266903,19.0231579 18.9566018,17.5298684 L24.1785841,17.5298684 L24.1785841,19.7857895 C24.1680708,19.8035526 24.1532743,19.8209211 24.1439292,19.8378947 L24.1785841,19.8378947 L24.1785841,19.7857895 C24.8724602,18.7034211 26.1099115,17.1560526 28.8842478,17.1560526 C32.3193628,17.1560526 34.8947257,19.4313158 34.8947257,24.3201316 Z M13.4943717,9.85618421 C11.7082832,9.85618421 10.5397522,11.0447368 10.5397522,12.6063158 C10.5397522,14.1347368 11.6744071,15.3576316 13.4258407,15.3576316 L13.4597168,15.3576316 C15.2808496,15.3576316 16.4131681,14.1347368 16.4131681,12.6063158 C16.3785133,11.0447368 15.2808496,9.85618421 13.4943717,9.85618421 Z M10.8500885,33.4496053 L16.0697345,33.4496053 L16.0697345,17.5298684 L10.8500885,17.5298684 L10.8500885,33.4496053 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href={ this.state.tw } className="social-link sl-twitter">
                                        <svg width="27px" height="21px" viewBox="0 0 27 21">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Artboard" transform="translate(-1079.000000, -4085.000000)" fill="currentColor" fillRule="nonzero">
                                                    <g id="twitter" transform="translate(1070.000000, 4072.000000)">
                                                        <path d="M35.2237522,15.6982655 C34.2876814,16.1133451 33.2807434,16.3940885 32.2247434,16.519469 C33.3029381,15.8734867 34.1303717,14.8513628 34.5209204,13.6314336 C33.5120354,14.2299115 32.3941239,14.6640708 31.2053451,14.8980885 C30.2529204,13.8837522 28.8959292,13.2498407 27.3933097,13.2498407 C24.5103363,13.2498407 22.1721062,15.5880708 22.1721062,18.4710442 C22.1721062,18.8802832 22.2184425,19.2786195 22.308,19.6609912 C17.9687434,19.4433274 14.1212743,17.3648142 11.5459115,14.2049912 C11.0965664,14.9759646 10.8387965,15.8734867 10.8387965,16.8301947 C10.8387965,18.6412035 11.7612389,20.24 13.1614513,21.1760708 C12.3059823,21.1492035 11.500354,20.9144071 10.7967434,20.5223009 C10.796354,20.5444956 10.796354,20.5666903 10.796354,20.5884956 C10.796354,23.1183009 12.5968496,25.228354 14.9849204,25.7076814 C14.5472566,25.8276106 14.0850619,25.8910796 13.6096283,25.8910796 C13.2724248,25.8910796 12.9457345,25.8587611 12.6272212,25.7980177 C13.2915044,27.8718584 15.2193274,29.3814867 17.5046018,29.4239292 C15.7173451,30.824531 13.4663363,31.6589735 11.019469,31.6589735 C10.5989381,31.6589735 10.1823009,31.6344425 9.77461947,31.5857699 C12.0840354,33.0677522 14.8291681,33.9317876 17.7775575,33.9317876 C27.3812389,33.9317876 32.6332035,25.9759646 32.6332035,19.0757522 C32.6332035,18.8495221 32.6281416,18.6240708 32.6180177,18.4005664 C33.6389735,17.6646372 34.5240354,16.7453097 35.2237522,15.6982655 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-right mt-4 mt-lg-0 text-center text-md-left">
                            <p className="copyrights">&copy; 2013 - 2018, <a href={ this.state.cp }>Nasir Uddin</a></p>
                            <p className="builtwith">Built by <a href="https://nasiruddin.com">Nasir Uddin</a> &amp; design with <img src={Love} alt="Love" /> by <a href="http://nad.im" className="design-credit" title="design by Nadim (nad.im)">nad.im</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    api: urlPropType.isRequired,
    user: PropTypes.number.isRequired
}

export default Footer;