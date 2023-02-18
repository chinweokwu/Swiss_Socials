import React, {useState,  useContext} from 'react';
import { Link } from 'react-router-dom';
import './addpost.scss';
import {AuthContext} from '../../useContext/AuthContext';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { makeRequest } from '../../utils/axios';

const AddPost = () => {
  const {currentUser} = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const upload = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post('/upload', formData);
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation(
    newPost => {
      return makeRequest.post("/posts", newPost)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      }
    }
  )

  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl = "";
    if(file) imgUrl = await upload();
    mutation.mutate({title, desc, img: imgUrl});
    setDesc("");
    setFile(null);
    setTitle("");
  }

  return (
    <div className='addpost'>
      <article className="mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex justify-between w-full">
            <div className='flex'>
              <Link className="inline-block mr-4" to="#">
                <img alt='' className="rounded-full max-w-none w-10 h-10" src={currentUser.profilePic} />
              </Link>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Link className="inline-block text-lg font-bold mr-2" to="#">{currentUser.username}</Link>
                </div>
              </div>
            </div>
            <div>
              {file && <img src={URL.createObjectURL(file)} alt="" className="w-20 h-20 object-cover" />}
            </div>
          </div>
        </div>
        <form>
          <div className="w-full mb-4  rounded-lg">
            <div className="relative z-0 mb-4">
              <input
                onChange= {e => setTitle(e.target.value)} 
                type="text" 
                value={title} 
                className="text-color peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Hi!! what is the topic of your post {currentUser.username}?
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea 
                onChange={e => setDesc(e.target.value)}
                value={desc} 
                rows="5" 
                className="text-color peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
               What is on your mind {currentUser.username} ?
              </label>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t">
              <button
                onClick={handleClick} 
                type="submit" 
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Share
              </button>
           <div className="flex pl-0 sm:pl-2">
              <input
                onChange={e => setFile(e.target.files[0])} 
                type="file" 
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer"/>
            </div>
          </div>
        </div>
      </form>
    </article>
  </div>
  );
}

export default AddPost;