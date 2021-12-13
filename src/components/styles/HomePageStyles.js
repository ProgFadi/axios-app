import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    ListItemStyle: {
        margin: '0 .5em',
        width: '93%',
        ":hover": {
            backgroundColor: "#f1f1ff",
            border: '1px none',
            borderRadius: '.3em'
        }
    },
    ContentBoxStyle: {
        display: 'flex',
        backgroundColor: "#F3F4F9",
        paddingTop: '4em',
    },
    ChildBoxStyle: {
        flexGrow: 1,
        fontFamily: '\'Poppins\', sans-serif',
        p: 3,
        backgroundColor: 'transparent',
        margin: '1em',
        padding: '1em'
    },
    ToolBarStyle: {
        backgroundColor: 'transparent',
        padding: '2em 1em 1em',
        display: 'flex',
        justifyContent: 'space-between',
    },
    TypographyStyle: {
        color: '#292c2f',
        fontFamily: '\'Poppins\', sans-serif',
        textTransform: "capitalize"
    }
})

export function Appbar(drawerWidth) {
    return {
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: "unset",
    }
}