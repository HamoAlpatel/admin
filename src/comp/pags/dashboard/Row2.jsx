import { useTheme } from '@emotion/react'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import Line from '../LineChart/Line'
import { DownloadOutlined } from '@mui/icons-material'
import { trans } from './data'

export default function () {
  const theme = useTheme()
  return (
    <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
      {/* box dash line */}
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        {/* header dash line */}
        <Stack p={1.2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Box  >
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}

              variant='h6'
            >Revenue Generated</Typography>
            <Typography variant='body2'>
              $59,342.32
            </Typography>
          </Box>
          {/* icon download */}
          <IconButton>
            <DownloadOutlined />
          </IconButton>
        </Stack>
        {/* dash line */}
        <Line isDash={true} />
      </Paper>



      {/* transactions */}
      <Box sx={{ minWidth: 300, height: '350px', flex: 1,overflowY:'scroll' }}>
        {/* header */}
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant='h6'
          >Recent Transactions</Typography>
        </Paper>






        {trans.map((tran) => {
          return (
            <Paper 
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
              p: 1.2
            }}>
              <Box >
                <Typography variant='body1' fontWeight='600'>{tran.txId}</Typography>
                <Typography variant='body2' >{tran.user}</Typography>
              </Box>
              <Typography variant='body1' >{tran.data}</Typography>
              <Typography variant='body2'
                p={1}
                bgcolor={theme.palette.error.main}
                color={'#fff'}
                borderRadius={1.4}
              >${tran.cost}</Typography>


            </Paper>
          )
        })}
















      </Box>



    </Stack>
  )
}
