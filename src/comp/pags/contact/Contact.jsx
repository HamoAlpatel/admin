import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from './dataContact'
import Header from '../../Header';
export default function Contact() {
  return (
    <Box >
    <Header title="Contact" suptitle="List of Contacts for Future Reference"/>
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
      <DataGrid 
       slots={{
        toolbar: GridToolbar,
      }}
      rows={rows}
        // @ts-ignore
        columns={columns} />
    </Box>
    </Box>
  )
}
