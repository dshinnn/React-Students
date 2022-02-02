// import React, { useState, useEffect } from 'react';

export default function StudentPosts(props) {

    return (
        <>
            <div className="carousel-item">
                <div className="card">
                    <div className="card-body text-center">
                        <h3 className="card-title my-2">{props.post.title}</h3>
                        <h6 className="card-text">{props.post.body} <span className="fst-italic">{`\t- ${props.post.user.first_name} ${props.post.user.last_name} (${props.post.id}) `}</span></h6>
                        <h6 className="card-subtitle mb-3"></h6>
                        <h7 className="card-subtitle text-muted fw-light fst-italic">{props.post.date_created}</h7>
                    </div>
                </div>
            </div>
        </>
    )
}