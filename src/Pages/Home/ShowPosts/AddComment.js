import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddComment = (post, refetch) => {

    const {_id} = post.post;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleComment = event =>{
        event.preventDefault();

        const form = event.target;
        const message = form.comment.value;

        const newComment = {
            name: user.displayName,
            img: user.photoURL,
            comment: message
        }

        if(!user){
            navigate('/login');
        }

        else{
            fetch(`https://mybook-server.vercel.app/allposts/${_id}/comments`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset()
            refetch();
        })

        console.log(newComment);
        }
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