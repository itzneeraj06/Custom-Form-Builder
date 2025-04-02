import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormBuilder = ({ setFormData }) => {
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
                disableFields: ['autocomplete', 'hidden'],
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
    navigate('/templateone')
  }

  return (
    <div style={{
      width: '60%',
      margin: 'auto'
    }}>
      <div id="fb-editor" style={{
        backgroundColor: '#C1D8C3',
        padding: '10px',
        borderRadius: '10px',
        marginTop: '20px'
      }}></div>
      <div style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <button style={{
          background: '#B17F59',
          height: '40px',
          width: '100px',
          borderRadius: '10px',
          color: '#fff',
          border: 'none'
        }} onClick={getFormData}>Save</button></div>
    </div>
  );
};

export default FormBuilder;
