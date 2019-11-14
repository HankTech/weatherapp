import React from 'react';

const Error = (props) => {
    return (
        <div className="container mb-3">
            <div className="row justify-content-center">
                <div className="card red lighten-1">
                    <div className="card-body">
                        <p className="lead card-title text-white">{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;