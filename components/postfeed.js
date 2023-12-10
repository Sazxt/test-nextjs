"use client"
import React, { useEffect, useState } from 'react';

const getPosts = () => {
    return new Promise((resolve) => {
        // Simulating a delay of 2 seconds (2000 milliseconds)
        setTimeout(() => {
            const posts = [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
                // Add more posts as needed
            ];
            resolve(posts);
        }, 2000);
    });
};

export function PostFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulating a delay of 2 seconds (2000 milliseconds)
                setTimeout(async () => {
                    const fetchedPosts = await getPosts();
                    setPosts(fetchedPosts);
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Post Feed</h2>
            { posts && posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </div>
    );
}
