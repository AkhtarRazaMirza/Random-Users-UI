import React from 'react'

function UserCard({ user }) {
  if (!user) return null

  const { picture, name, email, location, phone, cell, dob, gender } = user
  const age = Math.floor((new Date() - new Date(dob.date)) / (365.25 * 24 * 60 * 60 * 1000))
  
  const genderColor = gender === 'male' ? 'from-blue-400 to-blue-600' : 'from-pink-400 to-pink-600'
  const initials = `${name.first.charAt(0)}${name.last.charAt(0)}`.toUpperCase()

  return (
    <div className='group relative h-full'>
      {/* Card Background */}
      <div className='absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl'></div>
      
      {/* Main Content */}
      <div className='relative p-6 h-full flex flex-col rounded-2xl border border-gray-700 group-hover:border-purple-500 transition-colors duration-300'>
        
        {/* Header Section with Image */}
        <div className='flex flex-col items-center -mt-16 mb-4'>
          <div className={`w-28 h-28 rounded-full bg-linear-to-br ${genderColor} p-1 shadow-lg`}>
            <img 
              src={picture.large} 
              alt={`${name.first} ${name.last}`}
              className='w-full h-full rounded-full object-cover border-4 border-gray-800'
            />
          </div>
        </div>

        {/* User Name */}
        <h2 className='text-center text-2xl font-bold text-white mb-1'>
          {name.first} {name.last}
        </h2>
        
        {/* Gender Badge */}
        <div className='flex justify-center mb-4'>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r ${genderColor} text-white capitalize`}>
            {gender}
          </span>
        </div>

        {/* Age */}
        <p className='text-center text-gray-300 text-sm font-medium mb-4'>
          {age} years old
        </p>

        {/* Divider */}
        <div className='w-12 h-1 bg-linear-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-4'></div>

        {/* Contact Information */}
        <div className='space-y-3 grow'>
          
          {/* Email */}
          <div className='flex items-start space-x-3'>
            <span className='text-blue-400 text-lg mt-1'>✉</span>
            <div className='flex-1'>
              <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Email</p>
              <p className='text-sm text-gray-200 break-all hover:text-blue-400 transition-colors'>{email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start space-x-3'>
            <span className='text-green-400 text-lg mt-1'>☎</span>
            <div className='flex-1'>
              <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Phone</p>
              <p className='text-sm text-gray-200 hover:text-green-400 transition-colors'>{phone}</p>
            </div>
          </div>

          {/* Cell */}
          <div className='flex items-start space-x-3'>
            <span className='text-purple-400 text-lg mt-1'>📱</span>
            <div className='flex-1'>
              <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Mobile</p>
              <p className='text-sm text-gray-200 hover:text-purple-400 transition-colors'>{cell}</p>
            </div>
          </div>

          {/* Location */}
          <div className='flex items-start space-x-3'>
            <span className='text-red-400 text-lg mt-1'>📍</span>
            <div className='flex-1'>
              <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Location</p>
              <p className='text-sm text-gray-200 hover:text-red-400 transition-colors'>
                {location.city}, {location.state} {location.postcode}
              </p>
              <p className='text-xs text-gray-500'>{location.country}</p>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <button className='mt-6 w-full py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95'>
          View Profile
        </button>
      </div>
    </div>
  )
}

export default UserCard