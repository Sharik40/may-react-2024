import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.service";
import Post from "./post/Post";
import {IPost} from "../../models/IPost";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => {
             setPosts(value)
        })
    }, []);
    return (
        <div>
            {
                posts.map(post => (<Post key={post.id} post={post}/>))
            }
        </div>
    );
};

export default Posts;
