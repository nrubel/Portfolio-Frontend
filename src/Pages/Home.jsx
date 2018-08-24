import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bio from './../Components/Bio';
import Career from './../Components/Career';
import SelectivePortfolios from './../Components/SelectivePortfolios';
import urlPropType from 'url-prop-type';
import isEmpty from '../Components/isEmpty';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            userData: {},
            jobs: [],
            cv: '',
            userBadge: {},
            skills: [],
            list: []
        }
    }

    componentDidMount(){

        // user information
        const requestUser = fetch(this.props.api + 'wp/v2/users/' + this.props.user);
        const requestList = fetch(this.props.api + 'wp/v2/portfolio/list');

        const promise = [requestUser, requestList];

        Promise.all(promise).then(data => {
            data[0].json().then(res=>{
                this.setState({
                    userData: res.user_meta,
                    jobs: res.user_career,
                    cv: res.user_meta._pn_u_cv && res.user_meta._pn_u_cv[0],
                    userBadge: res.user_badge,
                    skills: res.user_skills
                });
            });
            data[1].json().then(res=>{
                this.setState({
                    list: res
                });
            })
        }).catch(error => {
            console.log(error)
        });
    }

    render(){
        if( isEmpty( this.state.userData ) ){
            return (
                <div className="home-loading row m-0 flex-column">
                    <div className="container">
                        fetching data ....
                    </div>
                </div>
            )
        }else{
            return (
                <div className="home row m-0 flex-column">
                    <Bio user={this.state.userData} badge={this.state.userBadge} skills={this.state.skills} />
                    <SelectivePortfolios list={this.state.list} show={[183]} title={'Work in Progress'} id={'featured-projects'}/>
                    <SelectivePortfolios list={this.state.list} show={[46,14,33,162]} title={'Client Projects'} id={'featured-projects'}/>
                    <Career jobs={this.state.jobs} cv={this.state.cv} />
                </div>
            )
        }
    }
}

Home.propTypes = {
    api: urlPropType.isRequired,
    user: PropTypes.number.isRequired
}

export default Home;