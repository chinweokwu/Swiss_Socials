import React from 'react'
import './rightbar.scss'
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className="card rounded-lg flex flex-col p-5 gap-5">
          <header className="font-semibold text-xl">
            Suggestions for you
          </header>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className="col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
              <p className="text-gray-500 text-sm">Company . Financial Services</p>
              <div className="mt-1">
                <button className="hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Follow
                </button>
                <button className=" mx-3 hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Dismiss
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className="col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
              <p className="text-gray-500 text-sm">Company . Financial Services</p>
              <div className="mt-1">
                <button className=" hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Follow
                </button>
                <button className="lg:mx-3 hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Dismiss
                </button>
              </div>
            </div>
          </div>
          <footer className="text-gray-500">
            <button className="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all recommendations
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </div>

        <div className=" card rounded-lg flex flex-col p-5 gap-5 my-5">
          <header className="font-semibold text-xl">
            Latest Activites
          </header>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className="col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
              <p className="text-gray-500 text-sm">comment on a post</p>
              <p className="text-gray-500 text-sm">1 mins</p>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className="col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
              <p className="text-gray-500 text-sm">Liked a post</p>
              <p className="text-gray-500 text-sm">1 mins</p>
            </div>
          </div>
          <footer className="text-gray-500">
            <button className="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all latest activites
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </div>

        <div className="card rounded-lg flex flex-col p-5 gap-5 my-5">
          <header className="font-semibold text-xl">
            Online Friends
          </header>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className="mt-3 col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" className="rounded-full" alt=''/>
            </div>
            <div className=" mt-3 col-span-5 flex flex-col gap-1 pl-3">
              <p className="font-semibold">Flip</p>
            </div>
          </div>
          <footer className="text-gray-500">
            <button className="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all onlinefriends
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default RightBar