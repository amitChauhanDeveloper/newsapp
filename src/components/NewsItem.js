import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ right: '90%', zIndex: '1' }}>{source}</span>
                    <img src={!imgUrl ? "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" : imgUrl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
