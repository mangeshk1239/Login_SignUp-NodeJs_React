import * as MUI from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomeElement(): JSX.Element {
    const navigate = useNavigate();

    return (
        <MUI.Box sx={{ flexGrow: 1 }}>
            <MUI.AppBar position="static">
                <MUI.Toolbar>
                    <MUI.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome
                    </MUI.Typography>
                    <MUI.Button variant="contained" onClick={handleLogout} color="warning">Logout</MUI.Button>
                </MUI.Toolbar>
            </MUI.AppBar>
        </MUI.Box>
    );

    function handleLogout() {
        document.cookie = "token" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        navigate("/login");
    }
}