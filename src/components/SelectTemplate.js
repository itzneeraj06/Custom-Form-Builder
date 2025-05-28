import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import t1 from '../asset/Screenshot (19).png';
import t2 from '../asset/Screenshot (20).png';
import t3 from '../asset/Screenshot (21).png';
import { useNavigate } from "react-router-dom";

const templates = [
    { id: 1, src: t1, alt: "Template 1" },
    { id: 2, src: t2, alt: "Template 2" },
    { id: 3, src: t3, alt: "Template 3" },
];

const SelectTemplate = () => {
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate()

    const handleTemplateClick = (id) => {
        setSelectedId(id);
    };

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "70vh",
                gap: 2,
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '50px' }}>
                Select Template
            </Typography>
            <Typography variant="h6" sx={{ color: '#a3a3a3' }}>
                Pick a design that matches your style and purpose best.
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {templates.map((template) => (
                    <Grid item xs={12} sm={4} key={template.id}>
                        <Box
                            component="img"
                            src={template.src}
                            alt={template.alt}
                            onClick={() => handleTemplateClick(template.id)}
                            sx={{
                                width: "100%",
                                height: 200,
                                border: selectedId === template.id ? "3px solid #673ab7" : "2px solid transparent",
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: selectedId === template.id ? "0 0 10px rgba(103, 58, 183, 0.5)" : "none",
                                "&:hover": {
                                    borderColor: "#673ab7",
                                    transform: "scale(1.03)",
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ width: '100%', my: 2, borderColor: '#673ab7' }} />

            <Button
                variant="contained"
                sx={{ backgroundColor: "#673ab7" }}
                onClick={() => {
                    if (selectedId !== null) {
                        navigate(`/template/${selectedId}`)
                    } else {
                        alert("select a template first")
                    }
                }}
            >
                Confirm
            </Button>
        </Container>
    );
};

export default SelectTemplate;
