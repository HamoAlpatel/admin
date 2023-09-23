import { Box } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './data'
import { world } from './world'
import { useTheme } from '@emotion/react'

export default function Geography({ isDash }) {
  const theme = useTheme()
  return (
    <Box height={isDash ? '400px' : "90vh"}>
      <ResponsiveChoropleth
        data={data}
        // very importanat
        features={world.features}
        theme={{
          // "background": "#ffffff",
          // @ts-ignore
          "text": {
            "fontSize": 11,
            "fill": "theme.palette.text.primary",
            "outlineWidth": 0,
            "outlineColor": "transparent"
          },
          "axis": {
            "domain": {
              "line": {
                // @ts-ignore
                "stroke": theme.palette.divider,
                "strokeWidth": 1
              }
            },
            "legend": {
              "text": {
                "fontSize": 12,
                // @ts-ignore
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "ticks": {
              "line": {
                "stroke": "theme.palette.divider",
                "strokeWidth": 1
              },
              "text": {
                "fontSize": 11,
                // @ts-ignore
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "grid": {
            "line": {
              // @ts-ignore
              "stroke": theme.palette.divider,
              "strokeWidth": 1
            }
          },
          "legends": {
            "title": {
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "text": {
              "fontSize": 11,
              // @ts-ignore
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "ticks": {
              "line": {},
              "text": {
                "fontSize": 10,
                "fill": "theme.palette.text.primary",
                "outlineWidth": 0,
                "outlineColor": "1",
              }
            }
          },
          "annotations": {
            "text": {
              "fontSize": 13,
              "fill": "theme.palette.text.primary",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "symbol": {
              "fill": "#000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            }
          },
          "tooltip": {
            "container": {
              // @ts-ignore
              background: theme.palette.background.default,
              "fontSize": 12,
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
          }
        }}
        margin={isDash?{ top: -23, right: 0, bottom: 0, left: 0 }:{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="equalEarth"
        projectionScale={isDash?150:200}
        projectionTranslation={[0.5, 0.555]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={1}
        // @ts-ignore
        borderColor={theme.palette.text.primary}
        // borderColor="#152538"
        // @ts-ignore
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          },
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              {
                offset: 0,
                color: '#000'
              },
              {
                offset: 100,
                color: 'inherit'
              }
            ]
          }
        ]}
        fill={[
          {
            match: {
              id: 'CAN'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'CHN'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'ATA'
            },
            id: 'gradient'
          }
        ]}
        legends={isDash ? [] : 
          [
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#999',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  // @ts-ignore
                  itemTextColor: theme.palette.text.primary,
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </Box>
  )
}
