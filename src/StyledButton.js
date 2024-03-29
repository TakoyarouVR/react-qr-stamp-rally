import { makeStyles } from '@material-ui/core/styles/';
import  {Button} from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    collectionButton: {
        zIndex: 1,
        marginBottom: "10px",
        backgroundColor: "#F43D16",
        fontSize: 30,
        color: "white",
        padding: "0.9rem",
        borderRadius: "0.7rem",
        cursor: "pointer",
        "&:hover": {
            background: "#F41A00",
        }
    },
});
const StyledButton = ({data}) => {
    const classes = useStyles();
    return (
        <Button className={classes.collectionButton} href={data.refer}>
            {data.txt}
        </Button>
    );
}

export default StyledButton;