import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SinglePost from './SinglePost';

const ShowPosts = () => {

    const {data: posts = [] , refetch} = useQuery({
        queryKey: ['post'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allposts');
            const data = await res.json();
            return data;
        }
    });

    const reversePosts = [...posts].reverse();

    return (
        <div>
            {
                reversePosts.map( post => <SinglePost
                    key={post._id}
                    post = {post}
                    refetch= {refetch}
                ></SinglePost>)
            }
        </div>
    );
};

export default ShowPosts;