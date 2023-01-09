import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const EditProfile = ({setOpenModal, users}) => {
    const { user } = useContext(AuthContext);

    const {work, status, school, college, gender} = users;

    const handleEditProfile = (event) =>{
        event.preventDefault();

        const form = event.target;
        const  work = form.work.value;
        const gender = form.gender.value;
        const school = form.school.value;
        const college = form.college.value;
        const status = form.status.value;
        const cover = form.cover.files[0];

        const imageHostKey = process.env.REACT_APP_imageHostKey; 
        console.log(imageHostKey);
        const formData = new FormData();
        formData.append('image', cover);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imageData => {
            if(imageData.success){
                console.log(imageData.data.url)
                const userInfo = {
                    cover:imageData.data.url,
                    work,
                    gender,
                    school,
                    college,
                    status
                }
        
                console.log(userInfo);
        
                fetch(`https://mybook-server.vercel.app/users/${user.email}`, {
                      method: 'PUT',
                      headers: {
                        'content-type': 'application/json',
                      },
                      body: JSON.stringify(userInfo)
                    })
                    .then(res => res.json())
                    .then(result => {
                      console.log(result);
                      form.reset();
                      setOpenModal(false);
                    })
            
            }
        })

        
    }

  return (
    <div>
      <input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <div>
        <h3 className="text-center text-lg font-bold">Create Post</h3>
          <label
            htmlFor="edit-profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </div>
          <div>
          <form onSubmit={handleEditProfile} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Work</span>
                </label>
                <input
                  type="text"
                  name="work"
                  defaultValue={work? work : ""}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <input
                  type="text"
                  name="gender"
                  defaultValue={gender? gender : ""}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">School</span>
                </label>
                <input
                  type="text"
                  name="school"
                  defaultValue={school? school : ""}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College</span>
                </label>
                <input
                  type="text"
                  name="college"
                  defaultValue={college? college : ""}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <input
                  type="text"
                  name="status"
                  defaultValue={status? status : ""}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cover Photo</span>
                </label>
                <input
                  type="file"
                  name="cover"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">update</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
