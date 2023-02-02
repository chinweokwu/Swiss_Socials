import React from 'react'

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Paul Morah",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Paul Morah",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Paul Morah",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Paul Morah",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  return (
    <div className='stories'>
      {
        stories.map(story => (
          <div className="story">
            <img src={story.img} alt=''/>
            <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories