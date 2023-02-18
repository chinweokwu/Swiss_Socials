import React from 'react';
import Post from '../Post/Post';
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from '../../utils/axios';
const Posts = () => {
const {isLoading, error, data} = useQuery(["posts"], ()=>
  makeRequest.get("/posts").then(res =>{
    return res.data;
  })
)
 
console.log(data)

  return (
    <div className='posts'>
      
      { error ? 
        "something went wrong!":
        isLoading ? 
        "loading" : 
        data.map(post => <Post key={post.id} post={post}/>)
      }
    </div>
  )
}

export default Posts