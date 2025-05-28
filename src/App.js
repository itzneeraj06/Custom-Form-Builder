import React, { useEffect, useState } from 'react';
import FormBuilder from './components/FormBuilder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemplateTwo from './components/TemplateTwo';
import TemplateOne from './components/TemplateOne';
import DescriptionIcon from '@mui/icons-material/Description';
import SelectTemplate from './components/SelectTemplate';
import TemplateThree from './components/TemplateThree';

const App = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '100vh'
      }}><h1
        style={{
          color: '#000',
          margin: 0,
          padding: '20px',
          fontSize: '20px',
          display: 'flex',
          gap: 1,
          alignItems: 'center'
        }}><DescriptionIcon
          sx={{ color: '#673ab7' }} /> ThirdEx Survey Form</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormBuilder setFormData={setFormData} FormData={formData} templateData={templateData} setTemplateData={setTemplateData} />}></Route>
          <Route path='/selecttemplate' element={<SelectTemplate formData={formData} />}></Route>
          <Route path='/template/1' element={<TemplateOne formData={formData} />}></Route>
          <Route path='/template/2' element={<TemplateTwo formData={formData} />}></Route>
          <Route path='/template/3' element={<TemplateThree formData={formData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;