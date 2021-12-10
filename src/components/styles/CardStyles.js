import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    CardMedia: {
        objectFit: 'contain',
        padding: '1.3em .5em',
        width: '200px',
        height: '200px'
    },
    CardContent: {
        display: 'flex' ,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1em 1em .5em'
    },
    CardButton: {
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        padding: '0.4em 0',
        border: '1px none',
        borderRadius: '0.5em',
        fontFamily: 'poppins',
        fontWeight: '500',
        fontSize: '13.5px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'goldenrod'
        }
    },
    Typography: {
        fontFamily: 'poppins'
    },
    title: {
        fontWeight: '600',
        fontSize: '18.5px',
        color: 'black'
    },
    price: {
        color: 'goldenrod',
        backgroundColor: 'rgba(254,164,63,0.14)',
        borderRadius: '2em',
        padding: '0.5em .8em',
        fontWeight: '500',
        fontSize: '13.5px',
    },

});
