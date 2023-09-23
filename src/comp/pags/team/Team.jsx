import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { Box, Hidden, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import Header from '../../Header';
const Team = () => {
    const theme = useTheme()
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 33,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },

        {
            field: 'Email',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },

        {
            field: 'Phone',
            flex: 1,
            align: 'center',
            headerAlign: 'center'
        },

        {
            field: 'Age',
            align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'Access',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: ({ row: { Access } }) => {
                return (
                    <Box sx={{
                        p: '5px',
                        width: "99px",
                        borderRadius: '3px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        cursor: 'pointer',
                        // @ts-ignore                        
                        background: Access === "Admin"
                            // @ts-ignore 
                            ? theme.palette.primary.dark
                            : Access === "Manager"
                                // @ts-ignore 
                                ? theme.palette.secondary.dark
                                : "#3da58a"

                    }}>
                        {Access === "Admin" && (<AdminPanelSettingsOutlined fontSize='small' sx={{ color: '#fff' }} />)}
                        {Access === "Manager" && (<SecurityOutlined fontSize='small' sx={{ color: '#fff' }} />)}
                        {Access === "User" && (< LockOpenOutlined fontSize='small' sx={{ color: '#fff' }} />)}
                        <Typography variant="body1" fontSize='15px' color='#fff'>{Access}</Typography>
                    </Box>
                );
            }
        }
    ];

    return (


        <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
            <Header title="Team Page" suptitle="Managing the Team Members"/>

            <DataGrid rows={rows}
                // @ts-ignore
                columns={columns} />
        </Box>


    )
}
export default Team;
