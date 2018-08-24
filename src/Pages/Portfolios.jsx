import React, { Component } from 'react';
import urlPropType from 'url-prop-type';
import renderHTML from 'react-render-html';
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor';

class Portfolios extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount(){

        // user information
        const requestList = fetch(this.props.api + 'wp/v2/portfolio/list');

        const promise = [requestList];

        Promise.all(promise).then(data => {
            data[0].json().then(res=>{
                this.setState({
                    list: res
                });
            })
        }).catch(error => {
            console.log(error)
        });


    }

    render(){
        return(
            <div className="page-projects row mx-0 top-left-line bottom-left-line top-left-focus">
                <div className="container">
                    <div className="row mx-0 project-page-header flex-column flex-md-row">
                        <h1 className="page-title">Projects</h1>
                        <p>I look to engage with my clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies I work with.</p>
                    </div>

                    <div className="row">

                        {
                            this.state.list.map(item => {
                                let url = item.thumbnail_url;
                                if(url.match('^http://')){
                                    url = url.replace("http://","https://")
                                }
                                return(
                                    <a href={'/work/' + item.slug} className="card portfolio-card col-12 col-md-4" key={item.id }>
                                        <div className="card-header">
                                            <VisibilitySensor>
                                                <Img src={url} alt={'Shot for ' + renderHTML('&mdash; ' + item.title) } />
                                            </VisibilitySensor>
                                        </div>
                                        <div className="card-footer">
                                            <h2 className="single-title">{ renderHTML(item.title) }</h2>
                                        </div>
                                    </a>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

Portfolios.propTypes = {
    api: urlPropType.isRequired
}

export default Portfolios;