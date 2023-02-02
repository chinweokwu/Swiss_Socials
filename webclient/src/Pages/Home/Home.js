import React from 'react'
import Posts from '../../Components/Posts/Posts'
import Stories from '../../Components/Stories/Stories'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home