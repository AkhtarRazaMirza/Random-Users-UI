import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './UserCard'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers?results=12")
        const data = await response.json()
        setUsers(data.data.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching users:", error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className='bg-linear-to-br from-gray-900 via-gray-800 to-black min-h-screen py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl font-bold text-center mb-3 text-amber-50'>
          User Dashboard
        </h1>
        <p className='text-center text-gray-400 mb-12'>Explore our diverse community of users</p>
        
        {loading ? (
          <div className='flex justify-center items-center min-h-96'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500'></div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {users.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
