import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalNotes: 0,
    totalTasks: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const userId = session?.user?.id

      if (!userId) return

      // Obtener total de proyectos
      const { data: projects, error: projectsError } = await supabase
        .from('projects')
        .select('id, status', { count: 'exact' })
        .eq('user_id', userId)

      // Obtener total de notas
      const { data: notes, error: notesError } = await supabase
        .from('notes')
        .select('id', { count: 'exact' })
        .eq('user_id', userId)

      // Obtener total de tareas
      const { data: tasks, error: tasksError } = await supabase
        .from('tasks')
        .select('id', { count: 'exact' })
        .eq('user_id', userId)

      if (!projectsError && !notesError && !tasksError) {
        const activeProjects = projects?.filter(p => p.status === 'active').length || 0

        setStats({
          totalProjects: projects?.length || 0,
          activeProjects: activeProjects,
          totalNotes: notes?.length || 0,
          totalTasks: tasks?.length || 0
        })
      }

      setLoading(false)
    } catch (error) {
      console.error('Error al obtener estadísticas:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-3">
        <div className="text-center">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-primary shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2 text-white-50">Total Proyectos</h6>
                  <h2 className="card-title mb-0">{stats.totalProjects}</h2>
                </div>
                <div className="fs-1">
                  <i className="bi bi-folder"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-success shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2 text-white-50">Proyectos Activos</h6>
                  <h2 className="card-title mb-0">{stats.activeProjects}</h2>
                </div>
                <div className="fs-1">
                  <i className="bi bi-check-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-warning shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2 text-white-50">Total Notas</h6>
                  <h2 className="card-title mb-0">{stats.totalNotes}</h2>
                </div>
                <div className="fs-1">
                  <i className="bi bi-sticky"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-white bg-info shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-subtitle mb-2 text-white-50">Total Tareas</h6>
                  <h2 className="card-title mb-0">{stats.totalTasks}</h2>
                </div>
                <div className="fs-1">
                  <i className="bi bi-list-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
