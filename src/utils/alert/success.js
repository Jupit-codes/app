import React from "react";
import { useState } from "react";
import {Alert,Toast} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  Success= ({itemHeader,itemData,itemState})=> {
    const [show, setShow] = useState(itemState);
    const notify = ()=> toast(itemData);
    if (show) {
      return (
          <div style={{padding:10}}>
              <Alert variant="success" >
                  <p>{itemData}</p>
              </Alert>
          </div>
          
      );
    }
    
  }

  export default Success;