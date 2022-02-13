import {useState,useEffect} from 'react'
import '../../assets/css/Modal/modal.css'
import { Button,Modal } from 'react-bootstrap'
const Index = ({closeModal})=>{
    const handleClose = ()=>{
      closeModal(false)
    }
    return (
        <>
      
           <Modal show={closeModal} hide={handleClose}>
            <Modal.Header >
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        
        
      </>
    )
}

export default Index