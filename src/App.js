import React, { useState } from 'react';
import FormBuilder from './components/FormBuilder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DynamicForm from './components/DynamicJsx';
import TemplateOne from './components/TemplateOne';

const App = () => {
  const [formData, setFormData] = useState([])
  const style = { color: '#6A9C89', textAlign: 'center', margin: 0, padding: '20px' }
  const addBg = { backgroundColor: '#2a2a2a', minHeight: '100vh' }
  return (
    <div style={addBg}>
      <h1 style={style}>ThirdEx Survey Form</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormBuilder setFormData={setFormData} />}></Route>
          <Route path='/preview' element={<DynamicForm formData={formData} />}></Route>
          <Route path='/templateone' element={<TemplateOne formData={formData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;