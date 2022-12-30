import React from 'react';
import { FaUser } from 'react-icons/fa';

const ShowComments = (singleComment) => {
    const {img, name, comment} = singleComment.singleComment;
    return (
        <div className='my-2'>
            <div className="flex">
                <div>
                {
                    img ?
                    <img src={img} alt="" className='w-12 h-12 rounded-full'/>
                    :
                    <FaUser className='text-4xl rounded-full'></FaUser>

                }
                </div>
                
                <div className='ml-3'>
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-lg">
                {comment}
            </p>
                </div>
            </div>
            
        </div>
    );
};

export default ShowComments;