import React from 'react'
import { Link } from 'react-router-dom'

const Templates = () => {
  return (
    <div>
      <div className='min-h-screen space-y-12 flex flex-col items-center justify-center px-4'>
        <div className="text-2xl font-bold text-center">
          <h1>Choose a Template</h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-6'>
          
          {/* Modern Template */}
          <div className='h-auto lg:h-[450px] w-full max-w-[300px] shadow-2xl border-l-4 rounded-sm border-blue-900 space-y-1 p-4'>
            <div className='place-content-start'>
              <h1 className='text-lg font-semibold pl-2'>Modern</h1>
            </div>
            <div className='flex flex-col justify-center items-center space-y-5'>
              <div className='shadow-2xl w-full h-[280px] flex flex-col justify-center items-center space-y-2 border border-gray-200'>
                <div className='flex flex-col justify-center items-center'>
                  <div><h1 className='font-bold text-xl'>Jhon Doe</h1></div>
                  <div><p className='text-center'>jhon.doe@example.com <br />|+1234567890</p></div>
                </div>
                <div>
                  <div>
                    <h1 className='text-blue-900 text-lg'>Profile</h1>
                    <div className='bg-black h-[1px] w-[150px]'></div>
                    <p>Dynamic professional...</p>
                  </div>
                  <div>
                    <h1 className='text-blue-900 text-lg'>Experience</h1>
                    <div className='bg-black h-[1px] w-[150px]'></div>
                    <li>Developed scaleable web <br />apps...</li>
                  </div>
                </div>
              </div>
              <div className='pl-2 text-sm text-center'>
                <p>A clean, professional look with bold accents and a streamlined layout.</p>
              </div>
              <div className='bg-blue-900 text-white rounded-sm py-1 px-6 w-full text-center'>
                <Link to="/details/modern">Select Modern</Link>
              </div>
            </div>
          </div>

          {/* Classic Template */}
          <div className='h-auto lg:h-[450px] w-full max-w-[300px] shadow-2xl border-l-4 rounded-sm border-black p-4'>
            <div className='place-content-start'>
              <h1 className='text-lg font-semibold pl-2'>Classic</h1>
            </div>
            <div className='flex flex-col justify-center items-center space-y-6'>
              <div className='shadow-2xl w-full h-[280px] flex flex-col justify-center items-center space-y-2 border border-gray-200'>
                <div className='flex flex-col justify-center items-center'>
                  <div><h1 className='font-bold text-xl'>Jhon Doe</h1></div>
                  <div><p className='text-center'>jhon.doe@example.com <br />|+1234567890</p></div>
                </div>
                <div>
                  <div>
                    <h1 className='text-black text-lg font-semibold'>Profile</h1>
                    <div className='bg-black h-[1px] w-[150px]'></div>
                    <p>Dynamic professional...</p>
                  </div>
                  <div>
                    <h1 className='text-black text-lg font-semibold'>Experience</h1>
                    <div className='bg-black h-[1px] w-[150px]'></div>
                    <li>Developed scaleable web <br />apps...</li>
                  </div>
                </div>
              </div>
              <div className='pl-2 text-sm text-center'>
                <p>A Timeless, formal design with clear sections and a professional tone.</p>
              </div>
              <div className='bg-blue-900 text-white rounded-sm py-1 px-6 w-full text-center'>
                <Link to="/details/classic">Select Classic</Link>
              </div>
            </div>
          </div>

          {/* Creative Template */}
          <div className='h-auto lg:h-[450px] w-full max-w-[300px] shadow-2xl border-l-4 rounded-sm border-red-700 p-4'>
            <div className='place-content-start'>
              <h1 className='text-lg font-semibold pl-2'>Creative</h1>
            </div>
            <div className='flex flex-col justify-center items-center space-y-6'>
              <div className='shadow-2xl w-full h-[280px] flex flex-col justify-center items-center space-y-1 border border-gray-200'>
                <div className='flex flex-col justify-center items-center sm:w-[220px] bg-yellow-100 py-2 px-4'>
                  <div><h1 className='font-bold text-xl'>Jhon Doe</h1></div>
                  <div><p className='text-center'>jhon.doe@example.com <br />|+1234567890</p></div>
                </div>
                <div className='space-y-1'>
                  <div className='bg-blue-100 py-2 px-4'>
                    <h1 className='text-red-600 text-lg'>Profile</h1>
                    <p>Dynamic professional...</p>
                  </div>
                  <div className='bg-green-200 py-2 px-2'>
                    <h1 className='text-red-600 text-lg'>Experience</h1>
                    <li>Developed scaleable web <br />apps...</li>
                  </div>
                </div>
              </div>
              <div className='pl-2 text-sm text-center'>
                <p>A vibrant, bold design with colorful sections and modern typography.</p>
              </div>
              <div className='bg-blue-900 text-white rounded-sm py-1 px-6 w-full text-center'>
                <Link to="/details/creative">Select Creative</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Templates
