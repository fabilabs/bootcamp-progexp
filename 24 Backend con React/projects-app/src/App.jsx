import { useState, useEffect } from 'react'
import { supabase } from './services/supabaseClient'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard.jsx'
import Notes from './pages/Notes'
import DashboardStats from './components/DashboardStats'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentView, setCurrentView] = useState('dashboard') // 'dashboard' o 'notes'

  useEffect (() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) console.error("Erro al obtener la sesión:", error)
      setSession(data.session)
      setLoading(false)
    }

    getSession()

    // validar su la sesión esta activa o no
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    // limpiamos el listener
    return () => listener.subscription.unsubscribe()
  }, []) // unica ves cuando se renderiz el componente de forma inicial

  // Logout from app
  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }


  if (loading) {
    return (
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='spinner-border text-primary' role="status">
          <span className='visually-hidden'>Cargando...</span>
        </div>
      </div>
    )
  }

  return session ? (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Projects App</span>
          <div className="navbar-nav">
            <button
              className={`btn ${currentView === 'dashboard' ? 'btn-primary' : 'btn-outline-light'} me-2`}
              onClick={() => setCurrentView('dashboard')}
            >
              Proyectos
            </button>
            <button
              className={`btn ${currentView === 'notes' ? 'btn-primary' : 'btn-outline-light'} me-2`}
              onClick={() => setCurrentView('notes')}
            >
              Notas
            </button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <DashboardStats />

      {currentView === 'dashboard' ? (
        <Dashboard session={session} onLogout={handleLogout} />
      ) : (
        <Notes />
      )}
    </div>
  ) : (
    <AuthPage onAuthSuccess={(s) => setSession(s)}/>
  )
}

export default App
