// @ts-ignore
import React from 'react'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DownloadOutlined, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import EmailIcon from '@mui/icons-material/Email'
import Pie from './Pie';
import { dashData } from '../pieCahrt/data';
import Header from '../../Header';
// @ts-ignore
const Dashboard = () => {
    const theme = useTheme()
    return (



        <>












            <Box>
                <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                <Header isDash={true} title="DASHBOARD" suptitle="Welcome to your dashboard" />
                    <Button
                        variant='contained' color='primary'
                        size='small' sx={{ textTransform: "capitalize" }}>
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Box>
                {/* row 1 card */}
                <Stack
                    sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'space-between',
                        margin: '20px 0'
                    }}
                >
                    <Row1 icon={<EmailIcon sx={{
                        fontSize: '25px', color: theme.
                            // @ts-ignore
                            palette.secondary.main
                    }} />} type="email" count="1,325,134" percent="+14%" chart={<Pie data={dashData[1]} scheme='nivo' />} />
                    <Row1 icon={<Traffic sx={{
                        fontSize: '25px', color: theme.
                            // @ts-ignore
                            palette.secondary.main
                    }} />} type="Traffic Received" count="120" percent="+43%" chart={<Pie data={dashData[0]} scheme='dark2' />} />
                    <Row1 icon={<PersonAdd sx={{
                        fontSize: '25px', color: theme.
                            // @ts-ignore
                            palette.secondary.main
                    }} />} type="New Clients" count="32,441" percent="-5%" chart={<Pie data={dashData[0]} scheme='accent' />} />
                    <Row1 icon={<PointOfSale sx={{
                        fontSize: '25px', color: theme.
                            // @ts-ignore
                            palette.secondary.main
                    }} />} type="Sales obtained" count="431,225" percent="+21%" chart={<Pie data={dashData[1]} scheme='paired' />} />
                </Stack>

                {/* row 2 line chart and other */}
                <Row2 />



                {/* row 3 Pie and Bar char */}
                <Row3 />
            </Box>
        </>










    )
}
export default Dashboard;