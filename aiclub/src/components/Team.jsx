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
            {/*<div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black bg-white">
                <MuiCard role="Convenor" title="Dr. Sathiamurthy" content="Jack Silberman has over 20 years of experience in automation and robotics. He started working in robotics while pursuing his B.S. in electrical engineering. Dr. Silberman did robotics post graduate work in England and holds a master's degree from PUC-Rio in mechanical engineering and a Ph.D. from Carnegie Mellon University where his research was on mobile field robotics reliability. Dr. Silberman has worked in educational robotics, NASA sponsored mobile field robotics, semiconductor automation, biotech and medical devices. Currently, Dr. Silberman is the commercial QA area manager for Canada and Latin America with Abbott Diabetes Care (ADC), and a lecturer at UC San Diego in mechanical and aerospace engineering." />
                <MuiCard role="Chief Executive" title="Yokeswary Anebarassane" content="Jack Silberman has over 20 years of experience in automation and robotics. He started working in robotics while pursuing his B.S. in electrical engineering. Dr. Silberman did robotics post graduate work in England and holds a master's degree from PUC-Rio in mechanical engineering and a Ph.D. from Carnegie Mellon University where his research was on mobile field robotics reliability. Dr. Silberman has worked in educational robotics, NASA sponsored mobile field robotics, semiconductor automation, biotech and medical devices. Currently, Dr. Silberman is the commercial QA area manager for Canada and Latin America with Abbott Diabetes Care (ADC), and a lecturer at UC San Diego in mechanical and aerospace engineering." />
                <MuiCard role="President" title="Sathya Krishnan TS" content="Jack Silberman has over 20 years of experience in automation and robotics. He started working in robotics while pursuing his B.S. in electrical engineering. Dr. Silberman did robotics post graduate work in England and holds a master's degree from PUC-Rio in mechanical engineering and a Ph.D. from Carnegie Mellon University where his research was on mobile field robotics reliability. Dr. Silberman has worked in educational robotics, NASA sponsored mobile field robotics, semiconductor automation, biotech and medical devices. Currently, Dr. Silberman is the commercial QA area manager for Canada and Latin America with Abbott Diabetes Care (ADC), and a lecturer at UC San Diego in mechanical and aerospace engineering." />
                <MuiCard role="Secretary" title="Bibushan Sai Chennupati" content="Jack Silberman has over 20 years of experience in automation and robotics. He started working in robotics while pursuing his B.S. in electrical engineering. Dr. Silberman did robotics post graduate work in England and holds a master's degree from PUC-Rio in mechanical engineering and a Ph.D. from Carnegie Mellon University where his research was on mobile field robotics reliability. Dr. Silberman has worked in educational robotics, NASA sponsored mobile field robotics, semiconductor automation, biotech and medical devices. Currently, Dr. Silberman is the commercial QA area manager for Canada and Latin America with Abbott Diabetes Care (ADC), and a lecturer at UC San Diego in mechanical and aerospace engineering." />
                <MuiCard role="Executive Secretary" title="Shakthi S" content="Jack Silberman has over 20 years of experience in automation and robotics. He started working in robotics while pursuing his B.S. in electrical engineering. Dr. Silberman did robotics post graduate work in England and holds a master's degree from PUC-Rio in mechanical engineering and a Ph.D. from Carnegie Mellon University where his research was on mobile field robotics reliability. Dr. Silberman has worked in educational robotics, NASA sponsored mobile field robotics, semiconductor automation, biotech and medical devices. Currently, Dr. Silberman is the commercial QA area manager for Canada and Latin America with Abbott Diabetes Care (ADC), and a lecturer at UC San Diego in mechanical and aerospace engineering." />
            </div>*/}
        </div>
    );
};

export default Team;
