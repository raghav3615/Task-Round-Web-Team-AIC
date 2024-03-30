import React from "react";
import MuiCard from "./MuiCard";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    gridContainer: {
        marginLeft: "10px",
        marginRight: "10px",
        justifyContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
});

const Projects = () => {
    const classes = useStyles();
    return (
        <div id="projects" className=" bg-black pb-20">
            <div className="w-full py-16 text-white">
                <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold flex flex-col items-center justify-center">Projects</h1>
            </div>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard title="SpeechRecognition" content="The main aim of our project is to build a SpeechRecognition MODEL" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard title="Scratch-AI" content="The Scratch-AI is a repository with different algorithms of Machine Learning & Deep Learning implemented from scratch." />
                </Grid>

                
            </Grid>
        </div>
    );
};

export default Projects;
