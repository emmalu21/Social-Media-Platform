import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    // State to hold the list of posts
    const [posts, setPosts] = useState([]);

    // Fetch posts from the backend API when the component mounts
    useEffect(() => {
        axios.get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        <div>
            {/* Render each post */}
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.username}</h2>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    );
};

export default Feed;
