import { Alert, Stack } from "@mui/material";

function MessageSow(props) {
    return (            
    <Stack spacing={2}>
        <Alert severity="success">{props.message}</Alert>
    </Stack>
    );
}

export default MessageSow;