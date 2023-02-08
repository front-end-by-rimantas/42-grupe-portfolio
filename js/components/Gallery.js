class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.init();
    }

    init() {
        if (!this.isValidSelector() || !this.isValidData()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    filterHTML() {
        return `<div class="option active">All</div>
                <div class="option">Branding</div>
                <div class="option">Designing</div>
                <div class="option">Photography</div>
                <div class="option">Development</div>`;
    }

    contentHTML() {
        let HTML = '';

        for (const item of this.data.data) {
            HTML += `<div class="card">
                            <img class="image" src="./img/portfolio/1.jpg" alt="Portfolio image 1">
                            <a class="title" href="#">Working Keyboard</a>
                            <p class="tag">Branding</p>
                        </div>`;
        }

        return HTML;
    }

    render() {
        const HTML = `<div class="filter">
                        ${this.filterHTML()}
                    </div>
                    <div class="gallery-content">
                        ${this.contentHTML()}
                    </div>`;

        const DOM = document.querySelector(this.selector);

        DOM.classList.add('gallery');
        DOM.innerHTML = HTML;
    }
}

export { Gallery };
