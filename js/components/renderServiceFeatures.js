function renderServiceFeatures(selector, list) {
    const featuresDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="item">
                    <i class="icon" style="background-color: #${item.color}44;">${item.icon}</i>
                    <h3 class="title">${item.title}</h3>
                    <p class="description">${item.description}</p>
                </div>`;
    }

    featuresDOM.innerHTML = HTML;
}

export { renderServiceFeatures };
