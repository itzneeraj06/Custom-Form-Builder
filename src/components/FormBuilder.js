import { Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormBuilder = ({ setFormData, FormData }) => {

  const navigate = useNavigate()

  const loadScripts = () => {
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
    scriptJQuery.onload = () => {
      const scriptJQueryUI = document.createElement('script');
      scriptJQueryUI.src = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js";
      scriptJQueryUI.onload = () => {
        const scriptFormBuilder = document.createElement('script');
        scriptFormBuilder.src = "https://formbuilder.online/assets/js/form-builder.min.js";
        scriptFormBuilder.onload = () => {
          const scriptFormRender = document.createElement('script');
          scriptFormRender.src = "https://formbuilder.online/assets/js/form-render.min.js";
          scriptFormRender.onload = () => {
            if (!document.getElementById('fb-editor').classList.contains('fb-builder-initialized')) {
              const options = {
                disableFields: ['autocomplete', 'hidden', 'header', 'button'],
                controlPosition: 'left',
                disabledActionButtons: ['save', 'data'],
                disabledAttrs: [
                  'access',
                  // 'className',
                  'inline',
                  'min',
                  'max',
                  'multiple',
                  'maxlength',
                  'name',
                  'other',
                  'helperext',
                  'rows',
                  'style',
                  'step',
                  'toggle',
                  'subtype',
                  'value',
                ],
                defaultFields: [{
                  "type": "header",
                  "subtype": "h1",
                  "label": "Title"
                }],
                formData: FormData
              }
              window.$(document.getElementById('fb-editor')).formBuilder(options);
              document.getElementById('fb-editor').classList.add('fb-builder-initialized');
            }
          };
          document.body.appendChild(scriptFormRender);
        };
        document.body.appendChild(scriptFormBuilder);
      };
      document.body.appendChild(scriptJQueryUI);
    };
    document.body.appendChild(scriptJQuery);
  };

  useEffect(() => {
    loadScripts();
  }, []);

  const getFormData = () => {
    const formData = window.$('#fb-editor').formBuilder('getData');
    setFormData(formData)
    navigate('/selecttemplate')
  }

  return (
    <div style={{ backgroundColor: '#f0ebf8', padding: '20px', }}>
      <div style={{
        width: '80%',
        margin: 'auto',
        padding: '5px',
        borderRadius: '10px',
        backgroundColor: '#fff'

      }}>
        <div id="fb-editor" style={{
        }}></div>
        <Divider sx={{ mt: '10px' }} />
        <div style={{
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button variant='contained' style={{ backgroundColor: '#673ab7' }} onClick={getFormData}>Preview Form</Button></div>
      </div>
    </div>
  );
};

export default FormBuilder;
