import React from 'react'
import './leftbar.scss'
const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <i className="fa-solid fa-circle-user text-brown-500"></i>
            <span>Paul Morah</span>
          </div>
          <div className='item'>
            <i className="fa-solid fa-user-group"></i>
            <span>Friends</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-user-group"></i>
            <span>Groups</span>
          </div>
          <div className='item'>
            <i className="fa-solid fa-shop"></i>
            <span>Market place</span>
          </div>
          <div className='item'>
            <i className="fa-solid fa-circle-user"></i>
            <span>Watch</span>
          </div>
          <div className='item'>
            <i className="fa-solid fa-memory text-neon-500"></i>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Your Shortcuts</span>
          <div className='item'>
          <i className="fa-solid fa-calendar-days text-gray-500"></i>
            <span>Events</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-gamepad text-orange-500"></i>
            <span>Gaming</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-folder-open text-indigo-500"></i>
            <span>Gallery</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-video text-red-500"></i>
            <span>Videos</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-message text-blue-500"></i>
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className='menu'>
          <span>Others</span>
          <div className='item'>
          <i className="fa-solid fa-money-bill text-green-500"></i>
            <span>Fundrasier</span>
          </div>
          <div className='item'>
          <i className="fa-solid fa-chalkboard-user text-yellow-500"></i>
            <span>Tutorials</span>
          </div>
          <div className='item'>
          <i className="fa-brands fa-discourse text-rose-500"></i>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar