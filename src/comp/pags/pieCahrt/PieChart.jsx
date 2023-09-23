// @ts-ignore
import React from 'react'
import Pie from './Pie'
import { Box } from '@mui/material'
import Header from '../../Header';
export default function PieChart() {
  return (
    // <Box height={'95vh'}>
    <>
    <Header title={"Pie Chart"} suptitle={"Simple Pie Chart"}/>
    <Pie isDash={false}/>
     </>
    // </Box>
  )
}
