import React from 'react'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 500, margin: 'auto' }}>
      <label htmlFor="title">Title here</label>
      <input id="title" style={{ marginBottom: 50 }} />
      <label htmlFor="description">Description here</label>
      <textarea id="description" />
    </div>
  )
}

export default App;
