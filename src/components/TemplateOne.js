import React from 'react'
import { Formik, useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';

const TemplateOne = ({ formData }) => {
    const navigate = useNavigate()
    // const formData = [
    //     {
    //         "type": "text",
    //         "required": false,
    //         "label": "Text Field",
    //         "className": "form-control",
    //         "name": "text-1743587001271-0",
    //         "subtype": "text"
    //     },
    //     {
    //         "type": "textarea",
    //         "required": false,
    //         "label": "Text Area",
    //         "className": "form-control",
    //         "name": "textarea-1743587003142-0",
    //         "subtype": "textarea"
    //     },
    //     {
    //         "type": "select",
    //         "required": false,
    //         "label": "Select",
    //         "className": "form-control",
    //         "name": "select-1743587004534-0",
    //         "values": [
    //             {
    //                 "label": "Option 1",
    //                 "value": "option-1",
    //                 "selected": true
    //             },
    //             {
    //                 "label": "Option 2",
    //                 "value": "option-2",
    //                 "selected": false
    //             },
    //             {
    //                 "label": "Option 3",
    //                 "value": "option-3",
    //                 "selected": false
    //             }
    //         ]
    //     },
    //     {
    //         "type": "radio-group",
    //         "required": false,
    //         "label": "Radio Group",
    //         "name": "radio-group-1743587005730-0",
    //         "values": [
    //             {
    //                 "label": "Option 1",
    //                 "value": "option-1",
    //                 "selected": false
    //             },
    //             {
    //                 "label": "Option 2",
    //                 "value": "option-2",
    //                 "selected": false
    //             },
    //             {
    //                 "label": "Option 3",
    //                 "value": "option-3",
    //                 "selected": false
    //             }
    //         ]
    //     },
    //     {
    //         "type": "paragraph",
    //         "subtype": "p",
    //         "label": "Paragraph"
    //     },
    //     {
    //         "type": "number",
    //         "required": false,
    //         "label": "Number",
    //         "className": "form-control",
    //         "name": "number-1743587008363-0",
    //         "subtype": "number"
    //     },
    //     {
    //         "type": "file",
    //         "required": false,
    //         "label": "File Upload",
    //         "className": "form-control",
    //         "name": "file-1743587015565-0"
    //     },
    //     {
    //         "type": "date",
    //         "required": false,
    //         "label": "Date Field",
    //         "className": "form-control",
    //         "name": "date-1743587017375-0",
    //         "subtype": "date"
    //     },
    //     {
    //         "type": "checkbox-group",
    //         "required": false,
    //         "label": "Checkbox Group",
    //         "name": "checkbox-group-1743587018808-0",
    //         "values": [
    //             {
    //                 "label": "Option 1",
    //                 "value": "option-1",
    //                 "selected": true
    //             }
    //         ]
    //     }
    // ]

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
                        <Box sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: '50%' }}>
                                <FormLabel>{field?.label}</FormLabel>
                                <TextField
                                    variant='outlined'
                                    multiline
                                    rows={3}
                                    name={field?.label}
                                    placeholder={field?.placeholder}
                                    value={formik?.values?.textArea}
                                    onChange={formik?.handleChange} />
                            </FormControl>
                        </Box>
                    );
                    break;

                case "select":
                    fieldHTML = (
                        <Box sx={{ bgcolor: '#fff', padding: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: 250 }}>
                                <FormLabel htmlFor={field?.name}>{field?.label}</FormLabel>
                                <Select
                                    name={field?.label}
                                    onChange={formik?.handleChange}
                                    size='small'
                                >
                                    <MenuItem value=''><em> Please Select </em></MenuItem>
                                    {field?.values && field?.values?.map((option, index) => (
                                        <MenuItem value={option?.value}>{option?.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    );
                    break;

                case "radio-group":
                    fieldHTML = (
                        <Box sx={{ bgcolor: '#fff', padding: '20px', borderRadius: '10px' }}>
                            <FormControl>
                                <FormLabel>{field?.label}</FormLabel>
                                <RadioGroup
                                    row
                                    onChange={formik?.handleChange}
                                >{field?.values && field?.values?.map((checkbox, index) => (
                                    <FormControlLabel key={index} control={<Radio />} label={checkbox?.label} value={checkbox?.label} />
                                ))}
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    );
                    break;

                case "number":
                    fieldHTML = (
                        <Box sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: '50%' }}>
                                <FormLabel>{field?.label}</FormLabel>
                                <TextField
                                    variant='standard'
                                    type='number'
                                    name={field?.label}
                                    placeholder={field?.placeholder}
                                    value={formik?.values?.number}
                                    onChange={formik?.handleChange} />
                            </FormControl>
                        </Box>
                    );
                    break;

                case "file":
                    fieldHTML = (
                        <Box sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: '50%' }}>
                                <FormLabel>{field?.label}</FormLabel>
                                <TextField
                                    variant='standard'
                                    type='file'
                                    name={field?.label}
                                    placeholder={field?.placeholder}
                                    value={formik?.values?.number}
                                    onChange={formik?.handleChange} />
                            </FormControl>
                        </Box>
                    );
                    break;

                case "date":
                    fieldHTML = (
                        <Box sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: '50%' }}>
                                <FormLabel>{field?.label}</FormLabel>
                                <TextField
                                    variant='standard'
                                    type='date'
                                    name={field?.label}
                                    placeholder={field?.placeholder}
                                    value={formik?.values?.number}
                                    onChange={formik?.handleChange} />
                            </FormControl>
                        </Box>
                    );
                    break;

                case "checkbox-group":
                    fieldHTML = (
                        <FormControl fullWidth sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormLabel>{field?.label}</FormLabel>
                            <FormGroup>
                                {field?.values && field?.values?.map((checkbox, index) => (
                                    <FormControlLabel control={<Checkbox />} label={checkbox?.label} />))}
                            </FormGroup>
                        </FormControl>
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
                        <Box sx={{ bgcolor: '#fff', p: '20px', borderRadius: '10px' }}>
                            <FormControl sx={{ minWidth: '50%' }}>
                                <FormLabel>{field?.label}</FormLabel>
                                <TextField
                                    variant='standard'
                                    name={field?.label}
                                    placeholder={field?.placeholder}
                                    value={formik?.values?.textArea}
                                    onChange={formik?.handleChange} />
                            </FormControl>
                        </Box>
                    );
                    break;

                case "paragraph":
                    fieldHTML = (
                        <Typography className={field?.className} style={{ fontSize: '10px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>{field?.label}</Typography>
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
        <div style={{ backgroundColor: '#f0ebf8' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                margin: 'auto',
                padding: '50px',
                gap: '20px'
            }}>
                {generateForm(formData)}
            </div>
        </div>
    )
}

export default TemplateOne