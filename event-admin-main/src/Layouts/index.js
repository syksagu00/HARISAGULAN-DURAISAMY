import { Link, useLocation } from "react-router-dom";
import { convertPath } from "../utils/helper"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;

export default function Layout({ children }) {

    const location = useLocation();

    const title = convertPath(location.pathname)

    const pages = [
        {
            name: "Home",
            path: "/",
            icon: "home"
        },
        {
            name: "Dashboard",
            path: "dashboard",
            icon: "bar_chart_4_bars"
        },
        {
            name: "Create Event",
            path: "create-event",
            icon: "add"

        },
        {
            name: "Total Events",
            path: "total-events",
            icon: "event_note"

        },
        {
            name: "Registeration List",
            path: "registration-list",
            icon: "groups"

        },
    ]


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {pages.map((page, index) => (
                        <Link to={`${page.path}`} key={index}>
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon> <span className="material-symbols-outlined">{page.icon}</span></ListItemIcon>
                                    <ListItemText primary={page.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
