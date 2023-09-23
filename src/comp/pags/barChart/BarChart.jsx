// @ts-ignore
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import { data } from './data'
import Bar from './Bar'
import Header from '../../Header';



export default function BarChart() {
  return (
    <>
      <Header suptitle={"The minimum wage in Germany, France and Spain (EUR/month)"} title={"Bar Chart"} />
      <Bar isDash={false} />
    </>

  )
}
