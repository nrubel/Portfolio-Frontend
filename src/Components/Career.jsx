import React from 'react';
import PropTypes from 'prop-types';

const Career = props => {
    return(
        <section className="row mx-0 top-left-line bottom-left-line career feature-works" id="career">
            <div className="container">
                <div className="row mx-0 justify-content-between align-items-center works-header flex-column flex-md-row">
                    <h2 className="section-title">Career</h2>
                    { props.cv ? (<a href={props.cv} className="btn btn-default">Get my CV (.PDF)</a>) : '' }
                </div>
                <div className="row career-timeline">
                    {
                        props.jobs.map((job, i) => {
                            let title = job._pn_c_title,
                                designation = job._pn_c_designation,
                                current = job._pn_c_current === 'on' ? true : false,
                                currently = current ? <span>currently</span> : '',
                                locale = "en-us",
                                start_date = new Date(job._pn_c_start),
                                end_date = new Date(job._pn_c_end),
                                date_start = start_date.toLocaleString(locale, { month: "long" }) + ', ' + start_date.getFullYear(),
                                date_end = current ? 'now' : end_date.toLocaleString(locale, { month: "long" }) + ', ' + end_date.getFullYear();
                            return(
                                <div className="col-md-6 col-lg-4 career-timeframe-col" key={i}>
                                    <h2 className="career-title">{ title }{ currently }</h2>
                                    <h2 className="career-designation">{ designation }</h2>
                                    <h2 className="career-timeframe">{ date_start } - { date_end }</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

Career.propTypes = {
    cv: PropTypes.string.isRequired,
    jobs: PropTypes.array.isRequired,
}

Career.defaultProps = {
    cv: ''
}

export default Career;