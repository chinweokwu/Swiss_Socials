import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './post.scss';
import Comments from '../Comments/Comments';
import moment from 'moment';
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from '../../utils/axios';
import { AuthContext } from '../../useContext/AuthContext';

const Post = ({post}) => {
  const [commentOpen, setCommentOpen] = useState(false)
  const {currentUser} = useContext(AuthContext)
  const {isLoading, data} = useQuery(["likes" + post.id], async()=>
   await makeRequest.get("/likes?likePostId=" + post.id).then(res =>{
    return res.data;
    })
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();

  const likedMutation = useMutation(
   async (liked)=>{
       liked !== false ? 
       await makeRequest.delete("/likes?likePostId=" + post.id):
        await makeRequest.post("/likes", {likePostId: post.id});
    },
    {
      onSucess: ()=>{
        queryClient.invalidateQueries(["likes" + post.id])
      },
    },
  )

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );


  const handleLike = () => {
    console.log(data?.includes(currentUser.id))
    console.log(likedMutation.mutate(data?.includes(currentUser.id)))
    likedMutation.mutate(data?.includes(currentUser.id));
  }

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className='post'>
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <Link className="inline-block mr-4" to="#">
              <img alt='' className="rounded-full max-w-none w-14 h-14" src={post.profilePic} />
            </Link>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Link className="inline-block text-lg font-bold mr-2" to="#">{post.username}</Link>
                <span>
                  <svg className="fill-blue-500 dark:fill-slate-50 w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                    </path>
                  </svg>
                </span>
              </div>
              <div className="text-slate-500 dark:text-slate-300">
                {moment(post.createdAt).fromNow()}
              </div>
            </div>
          </div>
          <div>
            {post.postUserId._id === currentUser._id && (
              <i className="cursor fa-solid fa-grip-vertical text-lg leading-lg nav-icon opacity-75" onClick={() => setMenuOpen(!menuOpen)} >             </i>
            )}
            {menuOpen && 
              <div>
                <button onClick={handleDelete}>delete</button>
              </div> 
            }
          </div>
        </div>
        <h2 className="text-3xl font-extrabold">
          {post.title}
        </h2>
        <div className="py-4">
          <Link className="flex" to="#">
            <img alt='' className="max-w-full rounded-lg"
              src={"./uploads/"+post.img} />
          </Link>
        </div>
        <p>
         {post.desc}
        </p>
        <div className="py-4">
          <div className="inline-flex items-center">
              { isLoading ?
                "Loading...":
                data?.includes(currentUser.id) ? 
              (
                <svg  onClick={handleLike} className="fill-rose-600" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                  <path
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                  </path>
                </svg>
             )
                :
                (
                <svg  onClick={handleLike} className="fill-rose-200" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                  <path
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                  </path>
                </svg>
              )
              }

            <span className="text-lg font-bold">{data?.length} likes</span>
            <button 
              key={post.id}
              onClick={() => setCommentOpen(!commentOpen)}
              type="button" 
              className="relative  mx-5 inline-flex items-center p-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span className="sr-only">Notifications</span>
            </button>
          </div>
        </div>
        {commentOpen && <Comments key={post.id} postId={post.id}/>}
      </article>
    </div>
  )
}

export default Post