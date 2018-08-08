import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 0,
    borderRadius: 8,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px 0px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    background: 'rgba(200, 200, 200, .75)'
  }
}

Modal.setAppElement('#app')

const ConfirmDeleteModal = ({
  isOpen,
  close,
  deleteMessage
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={close}
    contentLabel="Confirm message deletion"
    style={customStyles}
  >
    <button onClick={close}>&times;</button>
    <h2>Delete message</h2>
    <p>Are you sure you wanna delete this message? This action cannot be undone.</p>
    <button onClick={close}>Cancel</button>
    <button onClick={deleteMessage}>Delete</button>
  </Modal>
)

export default ConfirmDeleteModal
