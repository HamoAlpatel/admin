import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Geography from '../geography/Geography'
import Bar from '../barChart/Bar'
import { useTheme } from '@emotion/react'

import Pie from '../pieCahrt/Pie'


export default function Row3() {
  const theme = useTheme()
  return (
    <Stack direction={'row'} flexWrap={'wrap'} gap={2} mt={2}>
      {/* Pie chart */}
      <Paper sx={{ minWidth: '400px', width: '28%', flexGrow: 1 }}>
        <Typography p={1} variant='h6' color={theme.palette.secondary.main} fontWeight={600}>
          Campaign
        </Typography>
        <Pie isDash={true} />
        <Typography variant='h6' align='center' mt={2}  >
          $48,352 revenue generated
        </Typography>
        <Typography variant='body2' align='center' mb={3}  >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      {/* Bar chart */}
      <Paper sx={{ minWidth: '400px', width: '33%', flexGrow: 1 }}>
        <Typography variant='h6' color={theme.palette.secondary.main} p={1} fontWeight={600}>
          Sales Quantity
        </Typography>
        <Bar isDash={true} />

      </Paper>




      {/* geo chart */}
      <Paper sx={{ minWidth: '400px', width: '33%', flexGrow: 1 }}>
        <Geography isDash={true} />
      </Paper>
    </Stack>
  )
}
