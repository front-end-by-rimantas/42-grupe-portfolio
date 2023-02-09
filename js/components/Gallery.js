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
        return typeof str === 'string' && str.trim() !== '';
    }

    isPositiveInteger(num) {
        return Number.isInteger(num) && num > 0;
    }

    isNonEmptyArray(arr, minSize = 1) {
        return Array.isArray(arr) && arr.length >= minSize;
    }

    isValidData() {
        const { imgFolder, contentOrder, size, data } = this.data ?? {};
        const { min, max } = size ?? {};

        if (this.isNonEmptyString(imgFolder)) {
            this.imgFolder = imgFolder.trim();
        }

        if (this.isNonEmptyString(contentOrder)) {
            this.contentOrder = contentOrder.trim();
        }

        if (size && this.isPositiveInteger(min)) {
            this.size.min = min;
        }

        if (size && this.isPositiveInteger(max)) {
            this.size.max = max;
        }

        if (!this.isNonEmptyArray(data, this.size.min)) {
            return false;
        }

        const correctData = [];

        for (const item of data) {
            if (
                typeof item !== 'object' ||
                Array.isArray(item) ||
                item === null
            ) {
                continue;
            }

            const { img, alt, title, href, tags } = item;

            if (
                !this.isNonEmptyString(img) ||
                !this.isNonEmptyString(alt) ||
                !this.isNonEmptyString(title) ||
                !this.isNonEmptyString(href) ||
                !this.isNonEmptyArray(tags)
            ) {
                continue;
            }

            item.img = item.img.trim();
            item.alt = item.alt.trim();
            item.title = item.title.trim();
            item.href = item.href.trim();

            const validTags = [];
            for (const tag of tags) {
                if (this.isNonEmptyString(tag)) {
                    validTags.push(tag.trim());
                }
            }

            if (validTags.length === 0) {
                continue;
            }

            item.tags = validTags;

            correctData.push(item);
        }

        this.data.data = correctData;

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

        let count = 0;
        for (const item of this.data.data) {
            if (count >= this.size.max) {
                break;
            }
            count++;
            const path = this.imgFolder + item.img;

            HTML += `<div class="card">
                        <img class="image" src="${path}" alt="${item.alt}">
                        <a class="title" href="${item.href}">${item.title}</a>
                        <p class="tag">${item.tags[0]}</p>
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
