import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    ProductsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '1.5em'
    },
    SearchBarStyle: {
        fontFamily: '\'Poppins\', sans-serif',
        ml: 2,
    },
})

