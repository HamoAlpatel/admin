import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
    const theme =  useTheme()
  return (
    <Box textAlign={"center"}>
        <Typography color={theme.palette.error.main}>
            <span style={{fontSize:'23px',fontWeight:'bold'}}>404</span> There is not design yet
            <br/>
            <br/>
            Please try again leter...♥
        </Typography>
    </Box>
  )
}
