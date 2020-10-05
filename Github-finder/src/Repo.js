import React from 'react';

const Repo = ({ repo }) => (
    <div className="card card-body mb-2">
        <div className="row">
            <div className="col-mb-6">
                <a href= {`${repo.html_url}`} target="blank">{ repo.name }</a>
            </div>
            <div className="col-md-6">
                <span className="badge badge-primary ml-1">Stars: { repo.stargazers_count }</span>
                <span className="badge badge-secondary ml-1">Watchers: { repo.watchers_count }</span>
                <span className="badge badge-success ml-1">Forks: { repo.forks_count }</span>
            </div>
        </div>
    </div>
)

export default Repo;