export const ListItemStyle =  {
    margin: '0 .5em',
    width: '93%',
    ":hover": {
        backgroundColor: "#f1f1ff",
        border: '1px none',
        borderRadius: '.3em'
    }
}

export const ContentBoxStyle = {
    display: 'flex',
    backgroundColor: "#F3F4F9",
    paddingTop: '4em',
}
export const ChildBoxStyle = {
    flexGrow: 1,
    fontFamily: '\'Poppins\', sans-serif',
    p: 3,
    backgroundColor: 'transparent',
    margin: '1em',
    padding: '1em'
}

export const ToolBarStyle = {
    backgroundColor: 'transparent',
    padding: '2em 1em 1em',
    display: 'flex',
    justifyContent: 'space-between',
}

export const TypographyStyle = {
    color: '#292c2f',
    fontFamily: '\'Poppins\', sans-serif',
    textTransform: "capitalize"
}

export function Appbar(drawerWidth) {
    return {
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: "unset",
    }
}