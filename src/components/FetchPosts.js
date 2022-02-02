import React, { useState, useEffect } from 'react';
import StudentPosts from '../views/StudentPosts';

export default function FetchPosts(props) { 
    //  First instantiate 'posts' with an empty list
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])
    
    return (
        <>
            {console.log(posts)}
            <div id="carouselExampleSlidesOnly" className="carousel slide mx-auto w-75" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className="d-block w-100 bg-primary text-center">Student Posts</h1>
                    </div>
                    {posts.map((p,i) => <StudentPosts post={p} key={i} /> )}
                </div>
            </div>
        </>
    ); 
}
