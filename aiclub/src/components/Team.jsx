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

const Team = () => {
    const classes = useStyles();
    return (
        <div id="team" className="mb-8">
            <div className="w-full py-16 text-black">
                <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold flex flex-col items-center justify-center">The Team</h1>
            </div>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="President" title="Chinmay Inamdar" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Vice President" title="Meghavi Jadav"  />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="General Secretary" title="Aniruddhua Kumar" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Web Development" title="Piyush Kumar" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MuiCard role="Technical Lead" title="Bhargav Patki"  />
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Team;
