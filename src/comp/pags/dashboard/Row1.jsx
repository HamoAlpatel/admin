import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Pie from '../pieCahrt/Pie'


export default function (props) {
    return (

        <Paper className='scale'
            sx={{
                minWidth: "333px",
                p: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                cursor: 'pointer',
                transition: '0.2s'
            }}>
            <Stack gap={1}>
                {props.icon}
                <Typography variant='body2' sx={{ fontSize: '13px' }}>{props.count}</Typography>
                <Typography variant='body2' sx={{ fontSize: '13px' }}>{props.type}</Typography>
            </Stack>

            <Stack alignItems={"center"}>
                <Box height={'75px'} width={'75px'}>
             {props.chart} 
                </Box>
                <Typography variant='body2' sx={{ fontSize: '13px' }}>{props.percent}</Typography>
            </Stack>
        </Paper>
    )
}
