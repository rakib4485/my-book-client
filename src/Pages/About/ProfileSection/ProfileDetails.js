import React, { useState } from 'react';
import { FaGraduationCap, FaSchool, FaUserFriends } from 'react-icons/fa';
import { FcDepartment, FcLike, IconName } from "react-icons/fc";
import EditProfile from '../EditProfile/EditProfile';

const ProfileDetails = ({users}) => {
    const [openModal, setOpenModal] = useState(true)
    const {work, status, school, college, gender} = users;
    return (
        <div className='my-7'>
            {
                work &&
                <p className='flex items-center my-3'><FcDepartment className='text-3xl'></FcDepartment> <span className='text-lg ml-3'> {work}</span></p>
            }
            {
                gender &&
                <p className='flex items-center my-3'><FaUserFriends className='text-3xl'></FaUserFriends> <span className='text-lg ml-3'>{gender}</span></p>
            }
            {
                school &&
                <p className='flex items-center my-3'><FaSchool className='text-3xl'></FaSchool> <span className='text-lg ml-3'> {school}</span></p>
            }
           {
            college &&
            <p className='flex items-center my-3'><FaGraduationCap className='text-3xl'></FaGraduationCap> <span className='text-lg ml-3'> {college}</span></p>
           }
            {
                status &&
                <p className='flex items-center my-3'><FcLike className='text-3xl'></FcLike> <span className='text-lg ml-3'> {status}</span></p>
            }

            <label htmlFor="edit-profile-modal" className="btn btn-ghost">Edit Profile</label>
            {
                openModal === true &&
                <EditProfile
                setOpenModal={setOpenModal}
                users={users}
            ></EditProfile>
            }
            
        </div>
    );
};

export default ProfileDetails;