import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import { data } from './data'
export default function Bar({ isDash }) {
    const theme = useTheme()
    return (
        <Box height={isDash ? '300px' : '75vh'}>
            <ResponsiveBar
                data={data}
                keys={[
                    'Spain',
                    'France',
                    'Egypt'
                ]}
                indexBy="year"
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
                                "fill": "theme.palette.text.primary",
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
                margin={isDash ? { top: 0, right: 10, bottom: 50, left: 50 }:{ top: 50, right: 100, bottom: 50, left: 50 }}
                padding={0.2}
                maxValue={4200}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 0,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 0,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDash?'':'Year',
                    legendPosition: 'middle',
                    legendOffset: 40
                }}
                axisLeft={{
                    tickSize: 1,
                    tickPadding: 3,
                    tickRotation: 0,
                    legend:isDash?'': 'salary/month',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2.6
                        ]
                    ]
                }}
                legends={
                    isDash ? [] :
                        [
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1,
                                        }
                                    }
                                ]
                            }
                        ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            />
        </Box>

    )
}
