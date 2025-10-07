import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'
import ProjectDetails from './ProjectDetails'

export default function Dashboard({ onLogout }) {
  // dashboard
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([])
  // para la creacion de nuevos proyectos
  const [newProjectTitle, setNewProjectTitle] = useState("")
  const [newProjectDescription, setNewProjectDescription] = useState("")
  // para acceder al detalle de determinado proyecto
  const [selectedProjectId, setSelectedProjectId] = useState()

  useEffect (() => {
    // obtener la session actual
    async function loadSession () {
      const { data: {session} } = await supabase.auth.getSession()
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) fetchProjects(currentUser.id)
    }

    loadSession()
  }, []) // ejecutar unica ves cuando se renderiza el componente inicial


  // consultar todos los proyectos
  async function fetchProjects (userId) {
    // SELECT * FROM "table"
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", userId)
      .order("id", { ascending: false })

    if (error) console.error(error)
    else setProjects(data)
  } 

  // insertar proyecto
  async function addProject (e) {
    e.preventDefault()
    if (newProjectTitle.trim() === "" || !user) return

    const { data, error } = await supabase
      .from("projects")
      .insert([{
        title: newProjectTitle,
        description: newProjectDescription, 
        user_id: user.id,
        status: 'active'
      }])
      .select()

      if (error) {
        console.error("Error al crear el proyecto:", error)
        alert(`Error: ${error.message}`)
      } else {
        console.log("Proyecto creado:", data)
        setNewProjectTitle("")
        setNewProjectDescription("")
        fetchProjects(user.id)
      }
  }

  // eliminar proyecto
  async function deleteProject(id) {
    const { error } = await supabase.from("projects").delete().eq("id", id)
    if (!error && user) fetchProjects(user.id)
  }

    // Si hay un proyecto seleccionado, mostrar sus detalles
  if (selectedProjectId) {
    return (
      <ProjectDetails
        projectId={selectedProjectId}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h2>Mis Proyectos</h2>
      </div>

      {user && (
        <div className="alert alert-info">
          <strong>Usuario:</strong> {user.email}
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3">Crear nuevo proyecto</h4>

          <form onSubmit={addProject} className="mb-3">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Título del proyecto..."
                value={newProjectTitle}
                onChange={(e) => setNewProjectTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <textarea
                className="form-control"
                placeholder="Descripción (opcional)..."
                value={newProjectDescription}
                onChange={(e) => setNewProjectDescription(e.target.value)}
                rows="2"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Agregar Proyecto
            </button>
          </form>

          {projects.length === 0 ? (
            <p className="text-muted">Aún no tienes proyectos.</p>
          ) : (
            <ul className="list-group">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="flex-grow-1">
                    <strong>{project.title}</strong>
                    {project.description && (
                      <p className="mb-1 text-secondary">
                        {project.description}
                      </p>
                    )}
                    <div className="text-muted small">
                      Estado: {project.status} | Creado:{" "}
                      {new Date(project.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => setSelectedProjectId(project.id)}
                    >
                      Ver detalles
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteProject(project.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
