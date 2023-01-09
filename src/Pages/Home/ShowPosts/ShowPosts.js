import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SinglePost from './SinglePost';

const ShowPosts = () => {

    const {data: posts = [] , refetch} = useQuery({
        queryKey: ['post'],
        queryFn: async() =>{
            const res = await fetch('https://mybook-server.vercel.app/allposts');
            const data = await res.json();
            return data;
        }
    });

    const reversePosts = [...posts].reverse();

    return (
        <div className='w-[350px] md:w-[550px] mx-auto'>
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