
export default function initPlan(component) {

    const nOrderButton = component.querySelector('.plan__order-btn');

    const onPlanHoveredFn = () => {
        nOrderButton.classList.toggle('btn-light');
        nOrderButton.classList.toggle('btn-primary');
    }


    component.onmouseover 
        = component.onmouseout 
        = onPlanHoveredFn;
}
