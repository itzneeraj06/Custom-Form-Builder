import React from "react";
import { useNavigate } from "react-router-dom";

const DynamicForm = ({ formData }) => {

    const navigate = useNavigate()

    const generateForm = (fields) => {
        return fields?.map((field) => {
            let fieldHTML = null;

            switch (field?.type) {
                case "textarea":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <textarea
                                className=''
                                name={field?.name}
                                required={field?.required}
                                placeholder={field?.placeholder}
                            ></textarea>
                        </div>
                    );
                    break;

                case "select":
                    fieldHTML = (
                        <div className='' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label htmlFor={field?.name}>{field?.label}</label>
                            <select
                                className=''
                                name={field?.name}
                                required={field?.required}
                                style={{ padding: '5px' }}
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
                            <label style={{ marginBottom: '5px' }}>{field?.label}</label>
                            {field?.values && field?.values?.map((checkbox, index) => (
                                <div className='' ke={index}>
                                    <input
                                        className=''
                                        type="radio"
                                        name={checkbox?.label}
                                        value={checkbox?.value}
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
                                className=''
                                name={field?.name}
                                required={field?.required}
                                placeholder={field?.placeholder}
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
                                className=''
                                name={field?.name}
                                required={field?.required}
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
                                className=''
                                name={field?.name}
                                required={field?.required}
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
                                        value={checkbox?.value}
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
                            <button type="button" className='' name={field.name} style={{
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
                                className=''
                                name={field?.name}
                                required={field?.required}
                                placeholder={field?.placeholder}
                            />
                        </div>
                    );
                    break;

                case "paragraph":
                    fieldHTML = (
                        <p style={{ fontSize: '10px', opacity: '0.8' }}>{field?.label}</p>
                    );
                    break;

                case "header":
                    fieldHTML = (
                        <h1 style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>{field?.label}</h1>
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
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {generateForm(formData)}
                </form>
            </div>
        </div>
    );
};

export default DynamicForm;
