import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const MuiCard = (props) => {
    return (
        <Box width="250px">
            <Card sx={{ width: "100%", mx: 3, px: 2, border: 1, borderColor: "text.primary", minWidth: "225px" }}>
                {/*<CardMedia component="img" height="140" image="src/assets/img1.jpeg" alt="green iguana" />*/}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MuiCard;
