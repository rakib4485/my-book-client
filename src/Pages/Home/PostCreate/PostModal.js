import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../../../contexts/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const PostModal = () => {
  const { user, loading } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;

  if(loading){
    return <Loader></Loader>
  }
  return (
    <div>
      <input type="checkbox" id="post-create-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div>
            <h3 className="text-center text-lg font-bold">Create Post</h3>
            <label
              htmlFor="post-create-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <div className="divider"></div>
          <div className="flex items-center">
            <img src={photoURL} alt="" className="w-[50px] rounded-full" />
            <p className="text-lg ml-2">{displayName}</p>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full mt-3"
          />
          <div className=" mt-3 w-full h-20 border-2 rounded-sm flex justify-center items-center">
            <input type="file" name="drag and drop" id="" className="w-full h-full pt-7 pl-28" />
          </div>
          <button className="btn btn-block btn-primary mt-3">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
