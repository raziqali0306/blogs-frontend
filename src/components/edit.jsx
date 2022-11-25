import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    
    return (
        <div>Edit</div>
    )
}
