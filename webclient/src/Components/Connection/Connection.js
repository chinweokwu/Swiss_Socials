import React from 'react'
import "./connection.scss";
import { Link } from 'react-router-dom';
const Connection = () => {
  return (
    <div className='connection'>
      <div className="connetion-info rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold">Connections (532)</h4>
            <Link to="#" title="View All">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
            </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" className="w-16 rounded-full"/>
                <p className="text-center connect font-bold connect text-sm mt-1">Diane Aguilar</p>
                <p className="text-xs connect text-center">UI/UX Design at Upwork</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Frances Mather</p>
                <p className="text-xs connect text-center">Software Engineer at Facebook</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Carlos Friedrich</p>
                <p className="text-xs connect text-center">Front-End Developer at Tailwind CSS</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Donna Serrano</p>
                <p className="text-xs connect text-center">System Engineer at Tesla</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Randall Tabron</p>
                <p className="text-xs connect text-center">Software Developer at Upwork</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">John McCleary</p>
                <p className="text-xs connect text-center">Software Engineer at Laravel</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Amanda Noble</p>
                <p className="text-xs connect text-center">Graphic Designer at Tailwind CSS</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Christine Drew</p>
                <p className="text-xs connect text-center">Senior Android Developer at Google</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Lucas Bell</p>
                <p className="text-xs connect text-center">Creative Writer at Upwork</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Debra Herring</p>
                <p className="text-xs connect text-center">Co-Founder at Alpine.js</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Benjamin Farrior</p>
                <p className="text-xs connect text-center">Software Engineer Lead at Microsoft</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Maria Heal</p>
                <p className="text-xs connect text-center">Linux System Administrator at Twitter</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Edward Ice</p>
                <p className="text-xs connect text-center">Customer Support at Instagram</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Jeffery Silver</p>
                <p className="text-xs connect text-center">Software Engineer at Twitter</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Jennifer Schultz</p>
                <p className="text-xs connect text-center">Project Manager at Google</p>
              </Link>
              <Link to="#" className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                <img alt="" src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg" className="w-16 rounded-full"/>
                <p className="text-center font-bold connect text-sm mt-1">Joseph Marlatt</p>
                <p className="text-xs connect text-center">Team Lead at Facebook</p>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Connection