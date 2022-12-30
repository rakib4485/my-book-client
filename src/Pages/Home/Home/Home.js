import React from 'react';
import PostCreate from '../PostCreate/PostCreate';
import ShowPosts from '../ShowPosts/ShowPosts';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <PostCreate></PostCreate>
            <ShowPosts></ShowPosts>
        </div>
    );
};

export default Home;