import React from 'react'

const EditMessageForm = ({
  saveMessage,
  handleMessageChange,
  toggleShowForm,
  updatedMessage
}) => (
  <form onSubmit={saveMessage}>
    <input
      value={updatedMessage}
      onChange={handleMessageChange}
    />
    <button onClick={toggleShowForm}>cancel</button>
    <button type="submit">save changes</button>
  </form>
)

export default EditMessageForm
