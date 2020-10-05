import React from 'react';

    const Profile = ({ user }) => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mb-3" style={{width: "18rem"}}>
                    <img className="card-img-top" alt="Profile" src={user.avatar_url}/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Repositórios: 
                            <span className="badge badge-primary ml-1">{user.public_repos}</span>
                        </li>
                        <li className="list-group-item">
                            Seguidores: 
                            <span className="badge badge-secondary ml-1">{user.followers}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;
