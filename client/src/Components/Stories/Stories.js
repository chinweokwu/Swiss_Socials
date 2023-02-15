import React, { useContext } from 'react'
import { AuthContext } from '../../useContext/AuthContext'
import './stories.scss'
const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  const stories = [
    {
      id: 1,
      name: "Bernice Joan",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Akaza Mumu",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Uwie Mumu",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Aluka Morah",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic}  alt=''/>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {
        stories.map(story => (
          <div className="story" key={story.id}>
            <img src={story.img} alt=''/>
            <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories