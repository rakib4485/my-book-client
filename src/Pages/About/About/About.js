import React from 'react';
import MyPosts from '../MyPosts/MyPosts';
import ProfileSection from '../ProfileSection/ProfileSection';

const About = () => {
    return (
        <div className='w-[350px] md:w-[550px] mx-auto'>
            <ProfileSection></ProfileSection>
            <MyPosts></MyPosts>
        </div>
    );
};

export default About;