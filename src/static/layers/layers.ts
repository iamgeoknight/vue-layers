import tricity from '../geojsons/tricity.json';


const layers: Array<object> = [    
    {
        "name": "Boundary",
        "layerType": "geojson",
        "layer": tricity,
        "style": {
            "rules": [
                {
                "name": "Boundary",
                "symbolizers": [
                    {
                        "kind": "Fill",
                        "color": "#ffffff00",
                        "outlineColor": "ffffffff",
                        "outlineWidth": 4
                    }
                ]
                }
            ]
        },
    },

    {        
        "name": 'Buildings',
        "visible": true,
        "minZoom": 15,
        "maxZoom": 20,
        "style": {
            "rules": [
                {
                    "name": "Kharar",
                    "filter": [
                        "==",
                        "name_3",
                        "Kharar"
                    ],
                    "symbolizers": [{
                        "kind": "Fill",
                        "color": "#eb7dc7ff",
                        "outlineColor": "#525252ff",
                        "outlineWidth": 1
                    }]
                },
                {
                    "name": "Rajpura",
                    "filter": [
                        "==",
                        "name_3",
                        "Rajpura"
                    ],
                    "symbolizers": [{
                        "kind": "Fill",
                        "color": "#ff3700ff",
                        "outlineColor": "#525252ff",
                        "outlineWidth": 1
                    }]
                },
                {
                    "name": "Chandigarh",
                    "filter": [
                        "==",
                        "name_3",
                        "Chandigarh"
                    ],
                    "symbolizers": [{
                        "kind": "Fill",
                        "color": "#3578dfff",
                        "outlineColor": "#525252ff",
                        "outlineWidth": 1
                    }]
                },
                {
                    "name": "Kalka",
                    "filter": [
                        "==",
                        "name_3",
                        "Kalka"
                    ],
                    "symbolizers": [{
                        "kind": "Fill",
                        "color": "#3b9b37ff",
                        "outlineColor": "#525252ff",
                        "outlineWidth": 1
                    }]
                }
            ]
        },
        "layerType": 'vectortile',
        "url": "https://iamgeoknight.github.io/vector_tiles_sample_data/tiles/buildings/{z}/{x}/{y}.mvt"
    },
    {        
        "name": 'Lines',
        "visible": true,
        "minZoom": 15,
        "maxZoom": 20,
        "style": {
            "rules": [
            {
                "name": "Regular",
                    "filter": [
                        "==",
                        "highway",
                        "unclassified"
                    ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#1080c8ff",
                    "width": 2
                }]
            },
            {
                "name": "Trunk",
                "filter": [
                    "==",
                    "highway",
                    "trunk"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#f581faff",
                    "width": 2
                }]
            },
            {
                "name": "Primary",
                "filter": [
                    "==",
                    "highway",
                    "primary"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#82c005ff",
                    "width": 2
                }]
            },
            {
                "name": "Secondary",
                "filter": [
                    "==",
                    "highway",
                    "secondary"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#77302dff",
                    "width": 2
                }]
            },
            {
                "name": "Residential",
                "filter": [
                    "==",
                    "highway",
                    "residential"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#a30dc4ff",
                    "width": 2
                }]
            },
            {
                "name": "Track",
                "filter": [
                    "==",
                    "highway",
                    "track"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#40b3ffff",
                    "width": 2
                }]
            },
            {
                "name": "Service",
                "filter": [
                    "==",
                    "highway",
                    "service"
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#d5a72cff",
                    "width": 2
                }]
            },
            {
                "name": "Others",
                "filter": [
                    "&&",
                    [
                        "!=",
                        "highway",
                        "unclassified"
                    ],
                    [
                        "!=",
                        "highway",
                        "trunk"
                    ],
                    [
                        "!=",
                        "highway",
                        "primary"
                    ],
                    [
                        "!=",
                        "highway",
                        "secondary"
                    ],
                    [
                        "!=",
                        "highway",
                        "residential"
                    ],
                    [
                        "!=",
                        "highway",
                        "track"
                    ],
                    [
                        "!=",
                        "highway",
                        "service"
                    ]
                ],
                "symbolizers": [
                {
                    "kind": "Line",
                    "color": "#df6109ff",
                    "width": 2
                }]
            } 
            ]
        },
        "layerType": 'vectortile',
        "url": "https://iamgeoknight.github.io/vector_tiles_sample_data/tiles/lines/{z}/{x}/{y}.mvt"
    },
    {        
        "name": 'POIS',
        "visible": true,
        "minZoom": 15,
        "maxZoom": 20,
        "style": {
            "rules": [
                {
                    "name": "Village",
                    "filter": [
                        "==",
                        "place",
                        "village"
                    ],
                    "symbolizers": [
                    {
                        "kind": "Mark",
                        "wellKnownName": "circle",
                        "color": "#7f9ea9ff",
                        "strokeWidth": 2,
                        "radius": 10,
                        "strokeColor": "#ffffffff",
                    }]
                },
                {
                    "name": "Suburb",
                    "filter": [
                        "==",
                        "place",
                        "suburb"
                    ],
                    "symbolizers": [
                    {
                        "kind": "Mark",
                        "wellKnownName": "circle",
                        "color": "#34041fff",
                        "strokeWidth": 2,
                        "radius": 10,
                        "strokeColor": "#ffffffff",
                    }]
                },
                {
                    "name": "Others",
                    "filter": [
                        "&&",
                        [
                            "!=",
                            "place",
                            "village"
                        ],
                        [
                            "!=",
                            "place",
                            "suburb"
                        ]
                    ],
                    "symbolizers": [
                    {
                        "kind": "Mark",
                        "wellKnownName": "circle",
                        "color": "#8d753cff",
                        "strokeWidth": 2,
                        "radius": 10,
                        "strokeColor": "#ffffffff",
                    }]
                }
            ]
        },
        "layerType": 'vectortile',
        "url": "https://iamgeoknight.github.io/vector_tiles_sample_data/tiles/pois/{z}/{x}/{y}.mvt"
    },
];

export default layers;