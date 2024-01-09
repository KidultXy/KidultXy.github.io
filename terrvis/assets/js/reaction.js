   var chart_reaction = echarts.init(
            document.getElementById('reaction'), 'white', {renderer: 'canvas'});
        var option_reaction = {
    "series": [
        {
            "type": "line",
            "name": "Travel overseas",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "2001",
                    48
                ],
                [
                    "2002",
                    45
                ],
                [
                    "2006",
                    47
                ],
                [
                    "2011",
                    38
                ],
                [
                    "2017",
                    46
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "Fly on aeroplanes",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "2001",
                    43
                ],
                [
                    "2002",
                    33
                ],
                [
                    "2006",
                    30
                ],
                [
                    "2011",
                    24
                ],
                [
                    "2017",
                    32
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "Go into skyscrapers",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "2001",
                    35
                ],
                [
                    "2002",
                    27
                ],
                [
                    "2006",
                    22
                ],
                [
                    "2011",
                    20
                ],
                [
                    "2017",
                    26
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "Attend events where there are thousands of people",
            "connectNulls": false,
            "xAxisIndex": 0,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "2001",
                    30
                ],
                [
                    "2002",
                    32
                ],
                [
                    "2006",
                    23
                ],
                [
                    "2011",
                    27
                ],
                [
                    "2017",
                    38
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": true,
                "margin": 8
            },
            "logBase": 10,
            "seriesLayoutBy": "column",
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        }
    ],
    "legend": [
        {
            "data": [
                "Travel overseas",
                "Fly on aeroplanes",
                "Go into skyscrapers",
                "Attend events where there are thousands of people"
            ],
            "selected": {},
            "show": true,
            "left": "center",
            "bottom": "bottom",
            "orient": "horizontal",
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "xAxis": [
        {
            "type": "category",
            "name": "Year",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "2001",
                "2002",
                "2004",
                "2006",
                "2008",
                "2010",
                "2011",
                "2017"
            ]
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "name": "Ratio(%)",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "show": true,
            "text": "Peoples' reactions to terrorism",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "horizontal",
        "itemSize": 15,
        "itemGap": 10,
        "left": "80%",
        "feature": {
            "saveAsImage": {
                "type": "png",
                "backgroundColor": "auto",
                "connectedBackgroundColor": "#fff",
                "show": true,
                "title": "\u4fdd\u5b58\u4e3a\u56fe\u7247",
                "pixelRatio": 1
            },
            "restore": {
                "show": true,
                "title": "\u8fd8\u539f"
            },
            "dataView": {
                "show": true,
                "title": "\u6570\u636e\u89c6\u56fe",
                "readOnly": false,
                "lang": [
                    "\u6570\u636e\u89c6\u56fe",
                    "\u5173\u95ed",
                    "\u5237\u65b0"
                ],
                "backgroundColor": "#fff",
                "textareaColor": "#fff",
                "textareaBorderColor": "#333",
                "textColor": "#000",
                "buttonColor": "#c23531",
                "buttonTextColor": "#fff"
            },
            "dataZoom": {
                "show": true,
                "title": {
                    "zoom": "\u533a\u57df\u7f29\u653e",
                    "back": "\u533a\u57df\u7f29\u653e\u8fd8\u539f"
                },
                "icon": {},
                "filterMode": "filter"
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar",
                    "stack",
                    "tiled"
                ],
                "title": {
                    "line": "\u5207\u6362\u4e3a\u6298\u7ebf\u56fe",
                    "bar": "\u5207\u6362\u4e3a\u67f1\u72b6\u56fe",
                    "stack": "\u5207\u6362\u4e3a\u5806\u53e0",
                    "tiled": "\u5207\u6362\u4e3a\u5e73\u94fa"
                },
                "icon": {}
            }
        }
    }
};
        chart_reaction.setOption(option_reaction);