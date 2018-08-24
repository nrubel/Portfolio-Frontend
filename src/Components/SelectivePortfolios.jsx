import React from 'react';
import renderHTML from "react-render-html";
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor';

const SelectivePortfolios = props => {

    const show = props.show;
    const list = props.list;
    const newList = list.filter(f => {
        if( show.includes(f.id) )
            return f;
        return false
    });

    // console.log(newList);

    return(
        <section className="row mx-0 feature-works client-works top-left-line bottom-left-line" id={props.id}>
            <div className="container">
                <div className="row mx-0 justify-content-between align-items-center works-header flex-column flex-md-row">
                    <h2 className="section-title">{props.title}</h2>
                    <a href="/works" className="btn btn-default">See All Projects</a>
                </div>
                <div className="row">

                    {
                        newList.map(item => {
                            let url = item.thumbnail_url;
                            if(url.match('^http://')){
                                url = url.replace("http://","https://")
                            }
                            return(
                                <a href={'/work/' + item.slug} className="card portfolio-card col-12 col-md-6" key={item.id }>
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
        </section>
    )
}

export default SelectivePortfolios;