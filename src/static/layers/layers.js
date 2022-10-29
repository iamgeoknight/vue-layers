// Import geojson layers
import us_states from '../geojsons/us_states.json';
import us_counties from '../geojsons/us_counties.json';
import us_outline from '../geojsons/us_outline.json';
import earthquake from '../geojsons/earthquake.json';


// Import layers style
import us_states_style from '../styles/us_states.json';
import us_counties_style from '../styles/us_counties.json';
import us_outline_style from '../styles/us_outline.json';
import earthquake_style from '../styles/earthquake.json';



let layers = [
    {
        "layer": us_states,
        "name": 'US States',
        "visible": true,
        "minZoom": 1,
        "style": us_states_style        
    },
    {
        "layer": us_counties,
        "name": 'US Couties',
        "visible": true,
        "minZoom": 1,
        "style": us_counties_style
    },
    {   
        "layer": us_outline,
        "name": 'US Outline',
        "visible": true,
        "minZoom": 1,
        "style": us_outline_style
    },
    {
        "layer": earthquake,
        "name": 'Earthquakes',
        "visible": true,
        "minZoom": 1,
        "style": earthquake_style
    }
];

export default layers;