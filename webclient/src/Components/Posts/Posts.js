import React from 'react';
import Post from '../Post/Post';
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Bernice Joan",
      title: "Technology Advancement in Africa",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      img: "https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      name: "Owie Mumu",
      title: "The Act of Sex in Marriages",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    }
  ];

  return (
    <div className='posts'>
      {posts.map((post) => (
        <div>
          <Post key={post.id} post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Posts