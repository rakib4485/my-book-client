import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import cover from '../../../assets/empty.jpg';
import avatar from '../../../assets/empty-avatar.jpg'
import ProfileDetails from './ProfileDetails';

const ProfileSection = () => {

    const {user} = useContext(AuthContext)

    const {data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users/${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='min-h-screen'>
            <div className="cover-img w-[550px] h-64 rounded-md">
                {
                    users?.cover ?
                    <img src={users.cover} alt="" className='w-full h-full rounded-md' />
                    :
                    <img src={cover} alt="" className='w-full h-full rounded-md' />
                }
            </div>

            <div className="profile h-28 w-28 rounded-full text-center mx-auto mt-[-50px] ">
            {
                    user?.photoURL ?
                    <img src={user?.photoURL} alt="" className='h-28 w-28 border-4 border-lime-400 rounded-full' />
                    :
                    <img src={avatar} alt="" className='h-28 w-28 border-4 border-lime-400 rounded-full' />
                }
            </div>
            <h2 className="text-center text-3xl font-semibold my-5">{users.name}</h2>
            <hr />
            <ProfileDetails
                users={users}
            ></ProfileDetails>
        </div>
    );
};

export default ProfileSection;