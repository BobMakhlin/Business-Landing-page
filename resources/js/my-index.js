import plans from './data/plans.js';

import createPlan from './components/plan/renderer.js';
import initPlan from './components/plan/initializer.js';


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

    }

}
