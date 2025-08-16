import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-red-500">
            Welcome to the Dark Realm
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our collection of gothic and occult merchandise
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Explore Collection
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 border border-red-900 rounded-lg p-6 hover:border-red-600 transition-colors">
            <h3 className="text-xl font-bold text-red-400 mb-3">Gothic Fashion</h3>
            <p className="text-gray-300">Dark and mysterious clothing for those who embrace the shadows</p>
          </div>
          <div className="bg-gray-800 border border-red-900 rounded-lg p-6 hover:border-red-600 transition-colors">
            <h3 className="text-xl font-bold text-red-400 mb-3">Occult Artifacts</h3>
            <p className="text-gray-300">Mystical items and ritual supplies for the devoted practitioner</p>
          </div>
          <div className="bg-gray-800 border border-red-900 rounded-lg p-6 hover:border-red-600 transition-colors">
            <h3 className="text-xl font-bold text-red-400 mb-3">Dark Art</h3>
            <p className="text-gray-300">Haunting artwork and decorative pieces for your sanctuary</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App