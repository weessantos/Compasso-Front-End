import React from 'react';

const Starred = ({ starred }) => (
    <div className="card card-body mb-2" width = "40rem">
        <div className="row align-items-center">
            <a className="col-sm btn btn-success mr-3 ml-3 mb-1" href= {`${starred.html_url}`} target="blank">
                Repositório: 
                <span className="badge badge-light ml-1"> { starred.name }</span>
            </a>
            <a className="col-sm btn btn-primary mr-3 ml-3" href= {`${starred.owner.html_url}`} target="blank">
                Criado por: 
                <span className="badge badge-dark ml-1"> { starred.owner.login }</span>
            </a>
        </div>
    </div>
)

export default Starred;
