import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Header( {title,suptitle, isDash =false  }) {
    const theme = useTheme()
    return (
        <Box mb={isDash ? 0 : 3}>
            <Typography variant='h4' color={theme.palette.info.light} fontWeight={"bold"}>
             
              {title}
            </Typography>
            <Typography variant='body1' >
                {suptitle}
            </Typography>
        </Box>
    )
}
