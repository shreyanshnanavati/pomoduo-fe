import { useNavigate } from 'react-router'

export default function Landing(){
  const navigate= useNavigate()
  
  const handleGetStarted = () => {
    navigate('/dashboard')
  }
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
    {/* Hero Section */}
    <header className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-indigo-100 to-white">
      <h1 className="text-5xl font-bold mb-4">Pomoduo</h1>
      <p className="text-xl mb-6 max-w-xl">
        A collaborative pomodoro timer to help teams focus together and track progress.
      </p>
      <p className="italic text-gray-700 mb-8">
        "Close the execution gap between planning and doing."
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow" onClick={handleGetStarted}>
        Start a Focus Room
      </button>
    </header>

    {/* How It Works */}
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-2">1. Join a Room</h3>
          <p>Create or join a room with your team in seconds.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">2. Focus Together</h3>
          <p>Work in synchronized Pomodoro sessions with your team.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">3. Track Progress</h3>
          <p>Visualize your focus streaks and session stats over time.</p>
        </div>
      </div>
    </section>

    {/* Why Pomoduo */}
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Why Pomoduo?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <p>Turn your planning into execution with real-time accountability.</p>
        <p>Stay connected and productive with your peers.</p>
        <p>Boost team momentum—one Pomodoro at a time.</p>
      </div>
    </section>

    {/* Motto Section */}
    <section className="py-20 px-6 bg-indigo-50 text-center">
      <blockquote className="text-2xl italic font-medium text-gray-700 max-w-3xl mx-auto">
        "Planning means nothing if it doesn’t turn into action. Pomoduo helps you do."
      </blockquote>
    </section>

    {/* Footer */}
    <footer className="py-8 px-6 bg-white border-t text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Pomoduo. All rights reserved.</p>
    </footer>
  </div>
  )
}