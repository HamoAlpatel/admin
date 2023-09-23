import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import { columns, rows } from '../contact/dataContact'
import Header from '../../Header';

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
      <Header title={"INVOICES"} suptitle={"List of Invoice Balances"}/>
    <DataGrid 
    checkboxSelection
     slots={{
      toolbar: GridToolbar,
    }}
    rows={rows}
      // @ts-ignore
      columns={columns} />
  </Box>
  )
}
