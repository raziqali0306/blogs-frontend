import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePosts from "../hooks/use-posts";
import CreateBlog from './create';


export default function Edit() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const { getPostById } = usePosts();
    
    useEffect(() => {
        getPostById(id, setPost);
    }, [getPostById, id]);

    return (
        post && <CreateBlog blog={post} />
    )
}
