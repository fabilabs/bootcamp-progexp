import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export default function Notes() {
  const [user, setUser] = useState(null)
  const [notes, setNotes] = useState([])
  const [newNoteTitle, setNewNoteTitle] = useState("")
  const [newNoteContent, setNewNoteContent] = useState("")

  useEffect(() => {
    async function loadSession() {
      const { data: { session } } = await supabase.auth.getSession()
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) fetchNotes(currentUser.id)
    }

    loadSession()
  }, [])

  // Consultar todas las notas
  async function fetchNotes(userId) {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) console.error(error)
    else setNotes(data)
  }

  // Insertar nota
  async function addNote(e) {
    e.preventDefault()
    if (newNoteTitle.trim() === "" || !user) return

    const { data, error } = await supabase
      .from("notes")
      .insert([{
        title: newNoteTitle,
        content: newNoteContent,
        user_id: user.id
      }])
      .select()

    if (error) {
      console.error("Error al crear la nota:", error)
      alert(`Error: ${error.message}`)
    } else {
      console.log("Nota creada:", data)
      setNewNoteTitle("")
      setNewNoteContent("")
      fetchNotes(user.id)
    }
  }

  // Eliminar nota
  async function deleteNote(id) {
    const { error } = await supabase.from("notes").delete().eq("id", id)
    if (!error && user) fetchNotes(user.id)
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Mis Notas</h2>

      {user && (
        <div className="alert alert-info">
          <strong>Usuario:</strong> {user.email}
        </div>
      )}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="card-title mb-3">Crear nueva nota</h4>

          <form onSubmit={addNote}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Título de la nota..."
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Contenido de la nota..."
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                rows="4"
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Crear Nota
            </button>
          </form>
        </div>
      </div>

      <div className="row">
        {notes.length === 0 ? (
          <div className="col-12">
            <p className="text-muted">Aún no tienes notas.</p>
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                  <div className="text-muted small mb-2">
                    {new Date(note.created_at).toLocaleString()}
                  </div>
                  <button
                    className="btn btn-sm btn-danger w-100"
                    onClick={() => deleteNote(note.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
