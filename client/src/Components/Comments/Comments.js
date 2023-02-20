import React, {useState, useContext} from 'react'
import "./comments.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../useContext/AuthContext';
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { makeRequest } from '../../utils/axios';
import moment from 'moment';

const Comments = ({postId}) => {
  const {currentUser} = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [desc, setDesc] = useState("");

  const {isLoading, error, data} = useQuery(["comments"+ postId], ()=>
    makeRequest.get("/comments?postId=" + postId).then(res =>{
      return res.data;
    })
  );
  const mutation = useMutation(
    newComment => {
      return makeRequest.post("/comments", newComment)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments']);
      }
    }
  )

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId});
    setDesc("");
  }

  return (
    <div className='comments'>
      <div className="relative">
        <div className='flex'>
          <div>
            <img alt='' className="rounded-full max-w-none w-10 h-10 mr-4" src={currentUser.profilePic} />
          </div>
          <input
            onChange={e => setDesc(e.target.value)}
            className="comment-txt pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text" 
            value={desc}
            placeholder="Write a comment" 
          />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg className="mr-2" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
              </path>
            </svg>
            <button onClick={handleClick}>
              <svg className="fill-blue-500 dark:fill-slate-50"style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="pt-6">
        {
          error ? 
          "something went wrong!":
          isLoading ? 
          "loading" : 
          data.map(comment => (
            <div className="media flex pb-4" key={comment.id}>
            <Link className="mr-4" to="#">
              <img className="rounded-full max-w-none w-12 h-12" src={comment.profilePic} alt='' />
            </Link>
            <div className="media-body">
              <div>
                <Link className="inline-block text-base font-bold mr-2" to="#">{comment.username}</Link>
                <span className="text-slate-500 dark:text-slate-300">{moment(comment.createdAt).fromNow()}</span>
              </div>
              <p>
                {comment.desc}
              </p>
              <div className="mt-2 flex items-center">
                <Link className="inline-flex items-center py-2 mr-3" to="#">
                  <span className="mr-2">
                    <svg className="fill-rose-600 dark:fill-rose-400" style={{width: "24px", height: "24px"}}
                      viewBox="0 0 24 24">
                      <path
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                      </path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">2</span>
                </Link>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
          ))
        }
          <div className="w-full">
            <Link to="#"
              className="btn-comments py-3 px-4 w-full block text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more comments
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Comments