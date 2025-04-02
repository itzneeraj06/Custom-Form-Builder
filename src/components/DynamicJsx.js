import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";

const DynamicForm = ({ formData }) => {
    console.log(formData);
    const navigate = useNavigate()

    const initialValues = {}
    const validationSchema = {}
    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            console.log('form :-', values);
            formik?.resetForm();
        }
    })

    const generateForm = (fields) => {
        return fields?.map((field) => {
            let fieldHTML = null;

            switch (field?.type) {
                case "textarea":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <textarea
                                className={field?.className}
                                // name={field?.name}
                                name={field?.label}
                                required={field?.required === true ? true : false}
                                placeholder={field?.placeholder}
                                style={{ borderRadius: '5px', border: '1px solid #000' }}
                                value={formik?.values?.textArea}
                                onChange={formik?.handleChange}
                            ></textarea>
                        </div>
                    );
                    break;

                case "select":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <select
                                className={field?.className}
                                // name={field?.name}
                                name={field?.label}
                                required={field?.required === true ? true : false}
                                style={{ padding: '5px' }}
                                value={formik?.values?.select}
                                onChange={formik?.handleChange}
                            >
                                <option value="">Please select</option>
                                {field?.values && field?.values?.map((option, index) => (
                                    <option value={option?.value}>{option?.label}</option>
                                ))}
                            </select>
                        </div>
                    );
                    break;

                case "radio-group":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor={field?.name} style={{ marginBottom: '5px' }}>{field?.label}</label>
                            {field?.values && field?.values?.map((checkbox, index) => (
                                <div className='' ke={index}>
                                    <input
                                        className=''
                                        type="radio"
                                        name={checkbox?.label}
                                        value={formik?.values?.radio}
                                        onChange={formik?.handleChange}
                                    />
                                    <label className=''>{checkbox?.label}</label>
                                </div>
                            ))}
                        </div>
                    );
                    break;

                case "number":
                    fieldHTML = (
                        <div className='' key={field?.name} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <input
                                type="number"
                                className={field?.className}
                                // name={field?.name}
                                name={field?.labe}
                                required={field?.required === true ? true : false}
                                placeholder={field?.placeholder}
                                style={{ minHeight: '25px', borderRadius: '5px', border: '1px solid #000' }}
                                value={formik?.values?.number}
                                onChange={formik?.handleChange}
                            />
                        </div>
                    );
                    break;

                case "file":
                    fieldHTML = (
                        <div className='' key={field?.name} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <input
                                type="file"
                                className={field?.className}
                                // name={field?.name}
                                name={field?.label}
                                required={field?.required === true ? true : false}
                                value={formik?.values?.file}
                                onChange={formik?.handleChange}
                            />
                        </div>
                    );
                    break;

                case "date":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <input
                                type="date"
                                className={field?.className}
                                // name={field?.name}
                                name={field?.label}
                                required={field?.required === true ? true : false}
                                value={formik?.values?.date}
                                onChange={formik?.handleChange}
                            />
                        </div>
                    );
                    break;

                case "checkbox-group":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ marginBottom: '10px' }}>{field?.label}</label>
                            {field?.values && field?.values?.map((checkbox, index) => (
                                <div className='' key={index}>
                                    <input
                                        className=""
                                        type="checkbox"
                                        name={checkbox?.label}
                                        value={formik?.values?.checkBox}
                                        onChange={formik?.handleChange}
                                    />
                                    <label className="form-check-label">{checkbox?.label}</label>
                                </div>
                            ))}
                        </div>
                    );
                    break;

                case "button":
                    fieldHTML = (
                        <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className={field?.className} name={field.name} style={{
                                background: '#1e88e5',
                                height: '40px',
                                width: '100px',
                                borderRadius: '10px',
                                color: '#fff',
                                border: 'none'
                            }}>
                                {field?.label}
                            </button>
                        </div>
                    );
                    break;

                case "text":
                    fieldHTML = (
                        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <input
                                type="text"
                                className={field?.className}
                                // name={field?.name}
                                name={field?.label}
                                required={field?.required === true ? true : false}
                                placeholder={field?.placeholder}
                                style={{ minHeight: '25px', borderRadius: '5px', border: '1px solid #000' }}
                                // value={formik?.values?.text}
                                onChange={formik?.handleChange}
                            />
                        </div>
                    );
                    break;

                case "paragraph":
                    fieldHTML = (
                        <p className={field?.className} style={{ fontSize: '10px', opacity: '0.8' }}>{field?.label}</p>
                    );
                    break;

                case "header":
                    fieldHTML = (
                        <h1 className={field?.className} style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>{field?.label}</h1>
                    );
                    break;

                default:
                    break;
            }

            return fieldHTML;
        });
    };

    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <div style={{
                backgroundColor: '#fff',
                width: '30%',
                margin: 'auto',
                padding: '50px',
                borderRadius: '10px'
            }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={formik?.handleSubmit}>
                    {generateForm(formData)}
                </form>
            </div>
        </div>
    );
};

export default DynamicForm;
