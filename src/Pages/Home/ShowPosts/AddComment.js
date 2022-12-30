import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddComment = (post, refetch) => {

    const {_id} = post.post;

    const {user} = useContext(AuthContext);

    const handleComment = event =>{
        event.preventDefault();

        const form = event.target;
        const message = form.comment.value;

        const newComment = {
            name: user.displayName,
            img: user.photoURL,
            comment: message
        }


        fetch(`http://localhost:5000/allposts/${_id}/comments`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })

        console.log(newComment);
    }
    return (
        <div className='my-2'>
            <form onSubmit={handleComment}>
            <input type="text" placeholder="Type here" name='comment' className="input input-bordered input-accent w-full max-w-xs rounded-3xl" />
            </form>
        </div>
    );
};

export default AddComment;