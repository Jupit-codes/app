import React from "react";
import { useState } from "react";
import {Alert,Toast} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  AlertDismissible= ({itemHeader,itemData,itemState})=> {
    const [show, setShow] = useState(itemState);
    const notify = ()=> toast(itemData);
    if (show) {
      return (
          <div style={{padding:10}}>
              <Alert variant={itemState === "success" ? 'info': 'danger'} >
                  <p>{itemData}</p>
              </Alert>
          </div>
          
      );
    }
    
  }

  export default AlertDismissible;