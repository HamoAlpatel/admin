import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import { dashData } from '../pieCahrt/data'
export default function Pie(props,{isDash}) {
    const theme = useTheme()
    return (
            <ResponsivePie
                data={props.data}
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
                            // @ts-ignore
                            "fill": theme.palette.text.primary,
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
                margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
                innerRadius={0.7}
                padAngle={0.7}
                colors={{scheme:props.scheme}}
                enableArcLabels={false}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                // @ts-ignore
               
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}               
            />
    )
}
