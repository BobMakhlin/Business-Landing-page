
export default function createPlan(model) {
    let container = document.createElement('div');
    container.className = 'plan d-flex flex-column';

    container.innerHTML = `
        <p class="plan__name">${model.name}</p>

        <div class="plan__description">${model.description}</div>

        <div class="price-block-wrapper d-flex justify-content-center">
            <div class="price-block d-flex align-items-center">
                <p class="price-block__number">${model.price}</p>

                <div class="ml-2 text-left">
                    <p class="price-block__dollar">$</p>
                    <p class="price-block__period">Per ${model.period}</p>
                </div>
            </div>
        </div>

        <div class="plan__features mb-4 mt-2">
            ${getPlanFeatures(model, 5)}
        </div>

        <button class="btn btn-primary round-control w-100 mt-auto plan__order-btn">Order Now</button>
    `;

    return container;
}

function getPlanFeatures(model, maxFeaturesCount) {
    let html = '';

    for (let i = 0; i < model.features.length && i < maxFeaturesCount; i++) {
        html += `<p class="plan__feature">${model.features[i]}</p>`
    }

    if (model.features.length > maxFeaturesCount) {
        html += '...';
    }

    return html;
}
