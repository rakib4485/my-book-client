import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import SinglePost from '../../Home/ShowPosts/SinglePost';
import Loader from '../../Shared/Loader/Loader';

const MyPosts = () => {

    const {user, loading} = useContext(AuthContext);

    const {data: posts = [] , refetch , isLoading} = useQuery({
        queryKey: ['post'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/myposts/${user.email}`);                               
            const data = await res.json();
            return data;
        }
    });

    const reversePosts = [...posts].reverse();

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            {
                reversePosts?.map(post => <SinglePost
                    key={post._id}
                    post={post}
                    refetch={refetch}
                ></SinglePost>)
            }
        </div>
    );
};

export default MyPosts;