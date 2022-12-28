import React, { useContext } from 'react';
import { FaPhotoVideo, FaRegGrinAlt, FaVideo } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import PostModal from './PostModal';

const PostCreate = () => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className=' md:w-[45%] mx-auto p-7 rounded-sm shadow-2xl'>
            <div className="flex items-center mx-auto px-5">
                <div className=''>
                    <img src={user?.photoURL} alt="" className='w-[50px] rounded-full' />
                </div>
                <div className='w-full ml-3'>
                <label htmlFor="post-create-modal" className="btn btn-active btn-ghost btn-block rounded-3xl">What's on your mind?</label>
                </div>
            </div>
            <div className="divider"></div>

            <div className="grid grid-cols-3">
                <div className='flex justify-center items-center'>
                    
                    <FaVideo className='text-red-500 text-xl lg:text-3xl'></FaVideo>
                    <p className="text-sm lg:text-xl ml-2">Live video</p>
                </div>
                <div className='flex justify-center items-center'>
                <label htmlFor="post-create-modal" className="btn btn-ghost">
                <FaPhotoVideo className=' text-4xl text-success'></FaPhotoVideo>
                    <p className="text-lg ml-2">Photo/Video</p>
                </label>
                    
                </div>
                <div className='flex justify-center items-center'>
                    <FaRegGrinAlt className='text-warning text-xl lg:text-4xl'></FaRegGrinAlt>
                    <p className="text-sm lg:text-xl ml-2">Live video</p>
                </div>
            </div>

            <PostModal></PostModal>
        </div>
    );
};

export default PostCreate;