import React from 'react'
import './rightbar.scss'
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <card class="card rounded-lg flex flex-col p-5 gap-5">
          <header class="font-semibold text-xl">
            Suggestions for you
          </header>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class="col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
              <description class="text-gray-500 text-sm">Company . Financial Services</description>
              <div class="mt-1">
                <button class="hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Follow
                </button>
                <button class=" mx-3 hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Dismiss
                </button>
              </div>
            </div>
          </content>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class="col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
              <description class="text-gray-500 text-sm">Company . Financial Services</description>
              <div class="mt-1">
                <button class=" hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Follow
                </button>
                <button class="mx-3 hover:border-gray-900 hover:bg-gray-300 delay-100 duration-100 border border-gray-500 rounded-full text-gray-700 inline-flex px-3 py-1 text-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                    Dismiss
                </button>
              </div>
            </div>
          </content>
          <footer class="text-gray-500">
            <button class="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all recommendations
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </card>

        <card class="rounded-lg flex flex-col p-5 gap-5 my-5">
          <header class="font-semibold text-xl">
            Latest Activites
          </header>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class="col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
              <description class="text-gray-500 text-sm">comment on a post</description>
              <date class="text-gray-500 text-sm">1 mins</date>
            </div>
          </content>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class="col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
              <description class="text-gray-500 text-sm">Liked a post</description>
              <date class="text-gray-500 text-sm">1 mins</date>
            </div>
          </content>
          <footer class="text-gray-500">
            <button class="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all latest activites
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </card>

        <card class="rounded-lg flex flex-col p-5 gap-5 my-5">
          <header class="font-semibold text-xl">
            Online Friends
          </header>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class="mt-3 col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
            </div>
          </content>
          <content class="grid grid-cols-6">
            <div>
              <img src="https://picsum.photos/70/70" class="rounded-full" alt=''/>
            </div>
            <div class=" mt-3 col-span-5 flex flex-col gap-1 pl-3">
              <name class="font-semibold">Flip</name>
            </div>
          </content>
          <footer class="text-gray-500">
            <button class="hover:bg-gray-200 delay-100 duration-100 inline-flex items-center px-3 py-1 rounded">
                  View all onlinefriends
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </footer>
        </card>
      </div>
    </div>
  )
}

export default RightBar