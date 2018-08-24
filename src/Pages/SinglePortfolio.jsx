import React, { Component } from 'react';
import urlPropType from "url-prop-type";
import { withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import renderHTML from 'react-render-html';
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor';
import isEmpty from '../Components/isEmpty';

class SinglePortfolio extends Component{
    constructor(props){
        super(props);

        this.state = {
            work: {},
            date: ''
        }
    }

    componentDidMount(){

        // user information
        const requestWork = fetch(this.props.api + 'wp/v2/portfolio?slug=' + this.props.match.params.slug);

        const promise = [requestWork];

        Promise.all(promise).then(data => {
            data[0].json().then(res => {
                let newres = res[0];
                let date = new Date(newres.meta[0]);
                this.setState({
                    work: newres,
                    date: date.toLocaleString("en-us", { month: "long" }) + ' ' + date.getDay() + ', ' + date.getFullYear()
                });
            })
        }).catch(error => {
            console.log(error)
        });


    }

    render(){
        return(
            <div className="page-projects single-project row mx-0 top-left-line bottom-left-line top-left-focus">
                {
                    isEmpty( this.state.work ) ? (
                        <div className="container">
                            fetching data ....
                        </div>
                    ) : (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 order-2 order-md-1">
                                    {
                                        this.state.work.shots.map((v, i) => {
                                            return(
                                                <div key={i} className={'project-shots'}>
                                                    <VisibilitySensor>
                                                        <Img src={v} alt={'Shot ' + i+1} className="project-shot" />
                                                    </VisibilitySensor>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-md-5 order-1 order-md-2">
                                    <h1 className="project-title">{renderHTML( this.state.work.title.rendered )}</h1>
                                    <div className="row project-meta">
                                        <div className="col-6 project-date">
                                            <h2>Date</h2>
                                            <h4><time dateTime={this.state.date}>{this.state.date}</time></h4>
                                        </div>
                                        <div className="col-6 project-client">
                                            <h2>Client</h2>
                                            <h4>{this.state.work.meta[1]}</h4>
                                        </div>
                                        <div className="col-6 project-client mt-3 mb-4">
                                            <h2>Live Url</h2>
                                            <a href={this.state.work.meta[2]} target="_blank"><h4>{renderHTML('&#128279;')} See Live</h4></a>
                                        </div>
                                        <div className="col-6 project-role mt-3 mb-4">
                                            <h2>Role</h2>
                                            <h4>{this.state.work.meta[3]}</h4>
                                        </div>
                                        <div className="col-12 project-category">
                                            <h2>Category</h2>
                                            <p className={'project-categories'}>
                                                {
                                                    this.state.work.categories.map((c, i) => {
                                                        return(
                                                            <span key={i}><HashLink to={'#' + c.slug } className={'project-category'}>{c.name}</HashLink></span>
                                                        )
                                                    })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="project-description">
                                        { renderHTML( this.state.work.content.rendered ) }
                                    </div>
                                </div>
                            </div>


                            <div className="row mx-0 project-pagination justify-content-between">
                                {
                                    this.state.work.prev === 0 ? (<span>&nbsp;</span>) : (
                                        <a href={'/work/' + this.state.work.prev.ID + '/' + this.state.work.prev.post_name } className="previous-project">
                                            <svg  viewBox="0 0 32.635 32.635"><g><path d="M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5S32.411,16.817,32.135,16.817z"/><path d="M13.037,29.353c-0.128,0-0.256-0.049-0.354-0.146L0.146,16.669C0.053,16.575,0,16.448,0,16.315s0.053-0.26,0.146-0.354L12.684,3.429c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L1.207,16.315l12.184,12.184c0.195,0.195,0.195,0.512,0,0.707C13.293,29.304,13.165,29.353,13.037,29.353z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                            <div className="item-details">
                                                <span className="link-title">Previous Work</span>
                                                <h2 className="link-project-title">{this.state.work.prev.post_title}</h2>
                                            </div>
                                        </a>
                                    )
                                }
                                {
                                    this.state.work.next === 0 ? (<span>&nbsp;</span>) : (
                                        <a href={'/work/' + this.state.work.next.ID + '/' + this.state.work.next.post_name } className="next-project">
                                            <div className="item-details">
                                                <span className="link-title">Next Work</span>
                                                <h2 className="link-project-title">{this.state.work.next.post_title}</h2>
                                            </div>
                                            <svg  viewBox="0 0 32.635 32.635"><g><path d="M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5S32.411,16.817,32.135,16.817z"/><path d="M19.598,29.353c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l12.184-12.184L19.244,4.136c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l12.537,12.533c0.094,0.094,0.146,0.221,0.146,0.354s-0.053,0.26-0.146,0.354L19.951,29.206C19.854,29.304,19.726,29.353,19.598,29.353z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                                        </a>
                                    )
                                }
                            </div>

                        </div>
                    )
                }
            </div>
        )
    }
}

SinglePortfolio.propTypes = {
    api: urlPropType.isRequired
}

export default withRouter(SinglePortfolio);