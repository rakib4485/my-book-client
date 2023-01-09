import React, { useContext } from 'react';
import { FaRegCommentDots, FaShareAlt, FaThumbsUp, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import AddComment from './AddComment';
import ShowComments from './ShowComments';

const SinglePost = ({post, refetch}) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const {_id, author, img, description, postImg, react, comments} = post;

    const reverseComment = [...comments].reverse();


    const handleReact = (id) => {

        if(!user){
            navigate('/login');
        }

        else{
            fetch(`https://mybook-server.vercel.app/allposts/${id}`, {
            method: 'PUT',
            headers: {
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 1){
                refetch();
            }
        })
        }
    }

    return (
        <div className='w-[100%] mx-auto my-7 p-7 border rounded-xl'>
            <div className="flex items-center">
                {
                    img ?
                    <img src={img} alt="" className='w-12 h-12 rounded-full'/>
                    :
                    <FaUser className='text-4xl rounded-full'></FaUser>

                }
                
                <p className="text-lg ml-2">{author}</p>
            </div>
            <div className='my-5'>
                {
                    description && 
                    <p className="text-sm">{description}</p>
                }

                {
                    postImg &&
                    <img src={postImg} alt="" className='w-[80%] mx-auto rounded-xl mt-5'/>
                }
                
            </div>
            <hr />

            <div className="grid grid-cols-3 text-center">
                <div>
                <button onClick={() => handleReact(_id)} className="btn btn-ghost flex items-center justify-center"><p className='text-md mr-2'>({react})</p> <FaThumbsUp className='mr-2'></FaThumbsUp> Like</button>
                </div>
                <div>
                <button className="btn btn-ghost"><p className='text-md mr-2'>({comments.length})</p><FaRegCommentDots className='mr-2'></FaRegCommentDots> comments</button>
                </div>
                <div>
                <button className="btn btn-ghost"><FaShareAlt className='mr-2'></FaShareAlt> share</button>
                </div>
            </div>
            <hr />
            <div>
            <div>
                {
                    comments &&
                    reverseComment.slice(0,3).map((singleComment, i) => <ShowComments
                        key={i}
                        singleComment = {singleComment}
                    ></ShowComments>)
                }
            </div>
            <div>
                <AddComment
                    post={post}
                    refetch = {refetch}
                ></AddComment>
            </div>
            </div>
        </div>
    );
};

export default SinglePost;