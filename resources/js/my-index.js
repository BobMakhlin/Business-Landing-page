import { mapboxKey } from './data/keys.js';
import plans from './data/plans.js';

import createPlan from './components/plan/renderer.js';
import initPlan from './components/plan/initializer.js';


const map = L.map('map').setView([51.505, -0.09], 13);
const nPricingsRow = document.querySelector('#pricings-row');


init();


function init() {

    for (let item of plans) {

        let nPlan = createPlan(item);
        initPlan(nPlan);

        let nColumn = document.createElement('div');
        nColumn.className = 'col-sm-12 col-md-6 col-lg-4 mb-4';
        nColumn.append(nPlan);


        nPricingsRow.append(nColumn);

        initMap();

    }

}

function initMap() {

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapboxKey
    }).addTo(map);

}
