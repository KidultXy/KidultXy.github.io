window.onload = function(){
    terrorism_map();
    fatality_line();
}
function terrorism_map (){

    const data =[{name: 'Iraq', value: 24494}, {name: 'Pakistan', value: 12627}, {name: 'Afghanistan', value: 12617}, {name: 'India', value: 9091}, {name: 'Philippines', value: 4969}, {name: 'Somalia', value: 3978}, {name: 'Nigeria', value: 3846}, {name: 'Thailand', value: 3631}, {name: 'Yemen', value: 3264}, {name: 'Colombia', value: 2313}, {name: 'Libya', value: 2235}, {name: 'Syria', value: 2055}, {name: 'Egypt', value: 2008}, {name: 'Russia', value: 1946}, {name: 'Turkey', value: 1935}, {name: 'Ukraine', value: 1689}, {name: 'Algeria', value: 1607}, {name: 'West Bank and Gaza Strip', value: 1310}, {name: 'United Kingdom', value: 1200}, {name: 'Israel', value: 1195}, {name: 'Nepal', value: 1180}, {name: 'Bangladesh', value: 1092}, {name: 'Sri Lanka', value: 939}, {name: 'Sudan', value: 896}, {name: 'Democratic Republic of the Congo', value: 774}, {name: 'Lebanon', value: 674}, {name: 'Indonesia', value: 612}, {name: 'Greece', value: 611}, {name: 'Kenya', value: 607}, {name: 'United States', value: 559}, {name: 'Mali', value: 533}, {name: 'France', value: 502}, {name: 'Spain', value: 485}, {name: 'Burundi', value: 391}, {name: 'Myanmar', value: 358}, {name: 'Saudi Arabia', value: 352}, {name: 'Cameroon', value: 314}, {name: 'Central African Republic', value: 274}, {name: 'South Sudan', value: 225}, {name: 'Germany', value: 223}, {name: 'Uganda', value: 220}, {name: 'Kosovo', value: 196}, {name: 'Ireland', value: 173}, {name: 'Bahrain', value: 168}, {name: 'Iran', value: 167}, {name: 'South Africa', value: 153}, {name: 'Mozambique', value: 144}, {name: 'China', value: 141}, {name: 'Italy', value: 136}, {name: 'Angola', value: 133}, {name: 'Georgia', value: 131}, {name: 'Mexico', value: 123}, {name: 'Niger', value: 116}, {name: 'Macedonia', value: 114}, {name: 'Yugoslavia', value: 106}, {name: 'Ethiopia', value: 102}, {name: 'Chile', value: 99}, {name: 'Tunisia', value: 97}, {name: 'Sweden', value: 86}, {name: 'Peru', value: 83}, {name: 'Paraguay', value: 82}, {name: 'Chad', value: 75}, {name: 'Malaysia', value: 62}, {name: 'Venezuela', value: 62}, {name: 'Ivory Coast', value: 59}, {name: 'Canada', value: 59}, {name: 'Tanzania', value: 53}, {name: 'Australia', value: 52}, {name: 'Burkina Faso', value: 49}, {name: 'Senegal', value: 48}, {name: 'Bosnia-Herzegovina', value: 47}, {name: 'Tajikistan', value: 44}, {name: 'Sierra Leone', value: 44}, {name: 'Japan', value: 44}, {name: 'Jordan', value: 43}, {name: 'Rwanda', value: 40}, {name: 'Ecuador', value: 35}, {name: 'Cambodia', value: 34}, {name: 'Haiti', value: 34}, {name: 'Kyrgyzstan', value: 30}, {name: 'Belgium', value: 30}, {name: 'Zimbabwe', value: 29}, {name: 'Brazil', value: 29}, {name: 'Namibia', value: 28}, {name: 'Cyprus', value: 27}, {name: 'Albania', value: 25}, {name: 'Netherlands', value: 25}, {name: 'Argentina', value: 25}, {name: 'Republic of the Congo', value: 24}, {name: 'Maldives', value: 21}, {name: 'Czech Republic', value: 21}, {name: 'Guatemala', value: 20}, {name: 'Bulgaria', value: 20}, {name: 'Laos', value: 19}, {name: 'Kazakhstan', value: 19}, {name: 'Austria', value: 19}, {name: 'Uzbekistan', value: 18}, {name: 'Guinea', value: 18}, {name: 'Zambia', value: 18}, {name: 'Switzerland', value: 18}, {name: 'Azerbaijan', value: 18}, {name: 'Finland', value: 16}, {name: 'Honduras', value: 16}, {name: 'Liberia', value: 15}, {name: 'Armenia', value: 15}, {name: 'Mauritania', value: 13}, {name: 'Morocco', value: 13}, {name: 'Madagascar', value: 13}, {name: 'Serbia', value: 12}, {name: 'Kuwait', value: 12}, {name: 'New Zealand', value: 11}, {name: 'Serbia-Montenegro', value: 11}, {name: 'Croatia', value: 11}, {name: 'Guyana', value: 11}, {name: 'Taiwan', value: 10}, {name: 'Papua New Guinea', value: 10}, {name: 'East Timor', value: 10}, {name: 'Belarus', value: 10}, {name: 'Latvia', value: 10}, {name: 'Denmark', value: 9}, {name: 'Guinea-Bissau', value: 9}, {name: 'Hungary', value: 9}, {name: 'Bolivia', value: 9}, {name: 'Norway', value: 8}, {name: 'Fiji', value: 8}, {name: 'Trinidad and Tobago', value: 7}, {name: 'Eritrea', value: 7}, {name: 'Swaziland', value: 7}, {name: 'Poland', value: 7}, {name: 'Macau', value: 6}, {name: 'Vietnam', value: 6}, {name: 'Bhutan', value: 6}, {name: 'Montenegro', value: 5}, {name: 'Malta', value: 5}, {name: 'Slovak Republic', value: 5}, {name: 'United Arab Emirates', value: 5}, {name: 'South Korea', value: 5}, {name: 'Hong Kong', value: 5}, {name: 'Moldova', value: 5}, {name: 'Estonia', value: 5}, {name: 'Panama', value: 4}, {name: 'Nicaragua', value: 4}, {name: 'Solomon Islands', value: 4}, {name: 'Jamaica', value: 4}, {name: 'Qatar', value: 4}, {name: 'Gabon', value: 4}, {name: 'Djibouti', value: 4}, {name: 'Lesotho', value: 3}, {name: 'Dominican Republic', value: 3}, {name: 'Belize', value: 2}, {name: 'Malawi', value: 2}, {name: 'Ghana', value: 2}, {name: 'Iceland', value: 2}, {name: 'Turkmenistan', value: 2}, {name: 'Portugal', value: 2}, {name: 'Uruguay', value: 2}, {name: 'Bahamas', value: 1}, {name: 'International', value: 1}, {name: 'Equatorial Guinea', value: 1}, {name: 'Romania', value: 1}, {name: 'St. Lucia', value: 1}, {name: 'Gambia', value: 1}, {name: 'Slovenia', value: 1}, {name: 'Western Sahara', value: 1}, {name: 'Cuba', value: 1}, {name: 'Togo', value: 1}, {name: 'Costa Rica', value: 1}, {name: 'Benin', value: 1}];

const getGraticule = () => {
    const data = [];

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
        data.push({
            geometry: {
                type: 'LineString',
                coordinates: x % 90 === 0 ? [
                    [x, -90],
                    [x, 0],
                    [x, 90]
                ] : [
                    [x, -80],
                    [x, 80]
                ]
            }
        });
    }

    // Latitudes
    for (let y = -90; y <= 90; y += 10) {
        const coordinates = [];
        for (let x = -180; x <= 180; x += 5) {
            coordinates.push([x, y]);
        }
        data.push({
            geometry: {
                type: 'LineString',
                coordinates
            },
            lineWidth: y === 0 ? 2 : undefined
        });
    }

    return data;
};

// Add flight route after initial animation
const afterAnimate = e => {
    const chart = e.target.chart;

    if (!chart.get('flight-route')) {

        chart.redraw(false);
    }
};


Highcharts.getJSON(
    'https://code.highcharts.com/mapdata/custom/world.topo.json',
    topology => {

        const chart = Highcharts.mapChart('map-container', {
            chart: {
                map: topology
            },

            title: {
                text: 'Number of terrorist attacks\n' +
                    ' by region',
                floating: true,
                align: 'left',
                style: {
                    textOutline: '2px white'
                }
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            mapView: {
                maxZoom: 30,
                projection: {
                    name: 'Orthographic',
                    rotation: [60, -30]
                }
            },

            colorAxis: {
                tickPixelInterval: 100,
                minColor: '#BFCFAD',
                maxColor: '#31784B',
                max: 1000
            },

            tooltip: {
                pointFormat: '{point.name}: {point.value}'
            },

            plotOptions: {
                series: {
                    animation: {
                        duration: 750
                    },
                    clip: false
                }
            },

            series: [{
                name: 'Graticule',
                id: 'graticule',
                type: 'mapline',
                data: getGraticule(),
                nullColor: 'rgba(0, 0, 0, 0.05)',
                accessibility: {
                    enabled: false
                },
                enableMouseTracking: false
            }, {
                data,
                joinBy: 'name',
                name: 'Airports per million km²',
                states: {
                    hover: {
                        color: '#a4edba',
                        borderColor: '#333333'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                },
                events: {
                    afterAnimate
                },
                accessibility: {
                    exposeAsGroupOnly: true
                }
            }]
        });

        // Render a circle filled with a radial gradient behind the globe to
        // make it appear as the sea around the continents
        const renderSea = () => {
            let verb = 'animate';
            if (!chart.sea) {
                chart.sea = chart.renderer
                    .circle()
                    .attr({
                        fill: {
                            radialGradient: {
                                cx: 0.4,
                                cy: 0.4,
                                r: 1
                            },
                            stops: [
                                [0, 'white'],
                                [1, 'lightblue']
                            ]
                        },
                        zIndex: -1
                    })
                    .add(chart.get('graticule').group);
                verb = 'attr';
            }

            const bounds = chart.get('graticule').bounds,
                p1 = chart.mapView.projectedUnitsToPixels({
                    x: bounds.x1,
                    y: bounds.y1
                }),
                p2 = chart.mapView.projectedUnitsToPixels({
                    x: bounds.x2,
                    y: bounds.y2
                });
            chart.sea[verb]({
                cx: (p1.x + p2.x) / 2,
                cy: (p1.y + p2.y) / 2,
                r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
            });
        };
        renderSea();
        Highcharts.addEvent(chart, 'redraw', renderSea);
    }
);
}
function fatality_line(){
     var chart = Highcharts.chart('fatality_container', {
            title: {
                    text: 'Incidence, fatality and injury from terrorist attacks, World,\n' +
                        '1970 to 2020'
            },
            subtitle: {
                    text: 'The total number of recorded terrorist incidents, fatalities and non-fatal injuries by country or region. This\n' +
                        'includes fatalities or non-fatal injuries of both victims and perpetrators.'
            },
            yAxis: {
                    title: {
                            text: 'num'
                    }
            },
            legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
            },
            plotOptions: {
                    series: {
                            label: {
                                    connectorAllowed: false
                            },
                            pointStart: 1970,
                    }
            },
            series: [{
                    name: 'terrorism_fatalities',
                    data: [522, 519, 1455, 1110, 1617, 1851, 2022, 1371, 4377, 6300, 13173, 14553, 15405, 28332, 31350, 21282, 14928, 19446, 21618, 24456, 21108, 25362, 29235, 23070, 18309, 20898, 32718, 14064, 10182, 13182, 23187, 14391, 9951, 17148, 19029, 27948, 38475, 27732, 27831, 23487, 24738, 46494, 66837, 133944, 116979, 105717, 80691, 69873, 61236, 68541]
            }, {
                    name: 'terrorist_incidents',
                    data:[1953, 1413, 1701, 1419, 1743, 2220, 2769, 3957, 4578, 7986, 7983, 7758, 7629, 8610, 10485, 8742, 8580, 9549, 11160, 12972, 11658, 14055, 15213, 10368, 9243, 9174, 9594, 2802, 4188, 5469, 5736, 3990, 3840, 3492, 6051, 8271, 9750, 14403, 14169, 14481, 15225, 25575, 36141, 50880, 45414, 42153, 34092, 29559, 25611, 25314]
            }, {
                    name: 'terrorism_injuries',
                    data: [636, 246, 1227, 1485, 2595, 1851, 2268, 1563, 4800, 7518, 10911, 10011, 10026, 12141, 15873, 15336, 17442, 17325, 20880, 16617, 18159, 22860, 30018, 22707, 42885, 32280, 26904, 24549, 16215, 17391, 84561, 21243, 22152, 35928, 38883, 46410, 67593, 57504, 57441, 47859, 43986, 76353, 113082, 123429, 132612, 121728, 76782, 61827, 56328, 46398]
            }],
            responsive: {
                    rules: [{
                            condition: {
                                    maxWidth: 500
                            },
                            chartOptions: {
                                    legend: {
                                            layout: 'horizontal',
                                            align: 'center',
                                            verticalAlign: 'bottom'
                                    }
                            }
                    }]
            },
                    rangeSelector: {
			selected: 1
		},
            scrollbar: {
						barBackgroundColor: 'gray',
						barBorderRadius: 7,
						barBorderWidth: 0,
						buttonBackgroundColor: 'gray',
						buttonBorderWidth: 0,
						buttonBorderRadius: 7,
						trackBackgroundColor: 'none',
						trackBorderWidth: 1,
						trackBorderRadius: 8,
						trackBorderColor: '#CCC'
				},
    });
}