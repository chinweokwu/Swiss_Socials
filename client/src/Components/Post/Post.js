import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './post.scss';
import Comments from '../Comments/Comments';
import moment from 'moment';

const Post = ({post}) => {
  const [commentOpen, setCommentOpen] = useState(false)

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
                <Link className="inline-block text-lg font-bold mr-2" to="#">{post.name}</Link>
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
          <div className="inline-flex items-center" to="#">
            <button className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </button>
            <span className="text-lg font-bold">68</span>
            <button 
              onClick={() => setCommentOpen(!commentOpen)}
              type="button" 
              className="relative  mx-5 inline-flex items-center p-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
            </button>
          </div>
        </div>
        {commentOpen && <Comments/>}
      </article>
    </div>
  )
}

export default Post