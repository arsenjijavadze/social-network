import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div >
            <div>
                <img src='https://t3.ftcdn.net/jpg/02/04/13/52/360_F_204135260_LfG6JsgMDeunFydneprDFvrzRMOjRZGd.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile;



