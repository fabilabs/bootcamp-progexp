import { useState, useEffect } from 'react'
import { supabase } from './services/supabaseClient'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  // Cargar sesión actual al iniciar la app
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) console.error("Error al obtener sesión:", error)
      setSession(data.session)
      setLoading(false)
    }

    getSession()

    // Escuchar cambios en el estado de autenticación
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    // Limpiar el listener al desmontar
    return () => listener.subscription.unsubscribe()
  }, []) // If your Effect truly doesn’t use any reactive values, it will only run after the initial render.

  // useEffect(() => {
  //   const testConnection = async () => {
  //     const { data, error } = await supabase.from("projects").select("*").limit(1);
  //     console.log("Test conexión:", { data, error });
  //   };
  //   testConnection();
  // }, []);


  if (loading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  // Función para cerrar sesión
  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  // Mostrar la página según el estado de sesión
  return session ? (
    <Dashboard session={session} onLogout={handleLogout} />
  ) : (
    <AuthPage onAuthSuccess={(s) => setSession(s)} />
  )
}

export default App
