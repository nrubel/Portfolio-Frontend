import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { HashLink } from 'react-router-hash-link';
import isEmpty from './isEmpty';

const Bio = props => {
    let data = props.user,
        name = data.first_name + ' ' + data.last_name,
        tagline = ReactHtmlParser(data._pn_u_tagline),
        userPhoto = data._pn_u_photo,
        skills = props.skills,
        badges = props.badge,
        badge = '<div class="row mx-0 profile-badges align-items-center">';

    if( !isEmpty(badges) ){
        for( let [k, v] of Object.entries(badges) ){
            let url = v;
            // if(v.match('^http://')){
            //     url = v.replace("http://","https://")
            // }
            badge += '<img src=' + url + ' alt=' + k +'/>';
        }
    }

    badge += '</div>';

    return(
        <section className="row mx-0 bio-section top-left-line bottom-left-line top-left-focus" id="bio">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-md-6 order-md-1 order-2">
                        <div className="bio-infos row mx-0 flex-column align-items-center align-items-md-start text-center text-md-left">
                            <h5 className="greeting">Hello, My name is</h5>
                            <h1 className="my-name">{ name }</h1>
                            <h2 className="my-intro">I’m <span>{ tagline }</span></h2>
                            { isEmpty(badges) ? '' : ReactHtmlParser(badge) }

                            {
                                (typeof skills !== 'undefined' && skills.length > 0) ? (
                                    <h4 className="skill-title">Skillset</h4>
                                ) : ''
                            }
                            {
                                (typeof skills !== 'undefined' && skills.length > 0) ? (
                                    <div className="row mx-0 skill-set justify-content-center justify-content-md-start">
                                        {
                                            skills.map((skill, index) => {
                                                return (
                                                    <em className="skill badge" key={index}>{skill._pn_skill}</em>
                                                )
                                            })
                                        }
                                    </div>
                                ) : ''
                            }

                            <div><HashLink smooth to={'/#featured-projects'} className="scroll-more">scroll for more</HashLink></div>
                        </div>
                    </div>
                    {
                        userPhoto
                            ?
                                (
                                    <div className="col-12 col-md-6 order-md-2 order-1">
                                        <div className="row profile-photo-container no-gutters justify-content-center justify-content-sm-end">
                                            <div><img src={userPhoto} alt="Nasir Uddin" className="img-fluid" /></div>
                                        </div>
                                    </div>
                                )
                            :
                                ''
                    }
                </div>
            </div>
        </section>
    )
}

Bio.propTypes = {
    user: PropTypes.object.isRequired,
    badge: PropTypes.object.isRequired,
    skills: PropTypes.array.isRequired
}

export default Bio;