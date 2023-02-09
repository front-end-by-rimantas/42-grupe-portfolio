class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.imgFolder = '';
        this.contentOrder = 'default';
        this.size = {
            min: 1,
            max: 12,
        };
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() || !this.isValidData()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        try {
            this.DOM = document.querySelector(this.selector);
            return !!this.DOM;
        } catch (error) {
            return false;
        }
    }

    // isValidSelectorOldschool() {
    //     if (typeof this.selector !== 'string' || this.selector === '') {
    //         return false;
    //     }

    //     this.DOM = document.querySelector(this.selector);
    //     return !!this.DOM;
    // }

    isNonEmptyString(str) {
        return typeof str === 'string' && str !== '';
    }

    isPositiveInteger(num) {
        return Number.isInteger(num) && num > 0;
    }

    isValidData() {
        const { imgFolder, contentOrder, size, data } = this.data;
        const { min, max } = size;

        if (this.isNonEmptyString(imgFolder)) {
            this.imgFolder = imgFolder;
        }

        if (this.isNonEmptyString(contentOrder)) {
            this.contentOrder = contentOrder;
        }

        if (size && this.isPositiveInteger(min)) {
            this.size.min = min;
        }

        if (size && this.isPositiveInteger(max)) {
            this.size.max = max;
        }

        if (!data || !Array.isArray(data) || data.length < this.size.min) {
            return false;
        }

        for (const item of data) {
            // validuojam individualius objektus
        }

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

        this.DOM.classList.add('gallery');
        this.DOM.innerHTML = HTML;
    }
}

export { Gallery };
