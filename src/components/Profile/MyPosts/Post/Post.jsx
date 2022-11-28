import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {


    return (
        <div className={classes.item}>
            <img src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>


        </div>

    )
}

export default Post;