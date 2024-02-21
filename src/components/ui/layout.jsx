import { AppBar, Typography, Toolbar } from '@mui/material';
import { useContext } from 'react'
import { Context } from '../../utils/AppBarContext'
import GitHubIcon from '@mui/icons-material/GitHub';
function Layout() {
    const [context] = useContext(Context)
    return (
        <AppBar  color='secondary'>
            <Toolbar>
                <GitHubIcon fontSize='large' />
                <Typography variant="h6" sx={{ pl: 2 }} component="div">
                    {context.toUpperCase()}
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default Layout; 