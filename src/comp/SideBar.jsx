import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Tooltip, Typography, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeMaxOutlined, HomeOutlined, MapOutlined, PeopleAlt, PeopleAltOutlined, PeopleOutlined, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
// @ts-ignore
import avatar from '../image/me1.jpeg'
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

//   'Dashboard', 'Manage Team', 'Contacts Information', 'Invoices Balances'
const Array1 = [
    { "text": "Dashboard", "icon": <HomeOutlined />, 'path': '/', "tip": 'Dashboard' },
    { "text": "Manage Team", "icon": <PeopleOutlined />, 'path': '/team', "tip": 'Manage Team' },
    { "text": "Contacts Information", "icon": <ContactsOutlined />, 'path': '/contacts', "tip": 'Contacts' },
    { "text": "Invoices Balances", "icon": <ReceiptOutlined />, 'path': '/invoices', "tip": 'Invoices' }
];
const Array2 = [
    { "text": "Profile Form", "icon": <PersonOutline />, 'path': '/form', "tip": 'Form' },
    { "text": "Calendar", "icon": <CalendarTodayOutlined />, 'path': '/caledar', "tip": 'Calendar' },
    { "text": "FAQ Page", "icon": <HelpOutlineOutlined />, 'path': '/faq', "tip": 'FAQ' }
];
const Array3 = [
    { "text": "Bar Chart", "icon": <BarChartOutlined />, 'path': '/bar', "tip": 'Bar' },
    { "text": "Pie Chart", "icon": <PieChartOutline />, 'path': '/pie', "tip": 'Pie' },
    { "text": "Line Chart", "icon": <TimelineOutlined />, 'path': '/line', "tip": 'Line' },
    { "text": "Geography Chart", "icon": <MapOutlined />, 'path': '/geography', "tip": 'Geography' }
];



export const SideBar = ({ open, handleDrawerClose }) => {
    const navigate = useNavigate()
    let location = useLocation()
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Avatar sx={{
                mx: "auto",
                width: open ? 95 : 44,
                height: open ? 95 : 44,
                my: 1,
                transition: '0.2s',
                border: "2px solid grey"
            }} alt="Remy Sharp" src={avatar} />
            <Typography align="center" sx={{ fontSize: open ? 17 : 0, transition: '0.2s' }} >Mohamed Rashad</Typography>
            <Typography align="center" sx={{ fontSize: open ? 15 : 0, transition: '0.2s' }} color={theme.palette.info.main}>Admin</Typography>


            <Divider />


            <List>
                {Array1.map((item) => (

                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

                        <Tooltip title={open ? null : item.tip} placement="right" arrow>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: item.path === location.pathname ?
                                        theme.palette.mode == 'dark' ? grey[800] : grey[300]
                                        : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>




                    </ListItem>
                ))}
            </List>


            <Divider />


            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                         <Tooltip title={open ? null : item.tip} placement="right" arrow>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: item.path === location.pathname ?
                                        theme.palette.mode == 'dark' ? grey[800] : grey[300]
                                        : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>


            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                         <Tooltip title={open ? null : item.tip} placement="right" arrow>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: item.path === location.pathname ?
                                        theme.palette.mode == 'dark' ? grey[800] : grey[300]
                                        : null
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>


        </Drawer>
    )
}
export default SideBar;