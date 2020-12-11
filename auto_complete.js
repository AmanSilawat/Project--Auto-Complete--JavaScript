class Auto_complete {
    constructor({dom, data, limit}) {
        this.input = dom;
        this.dropdown_arr = data;
        this.limit = limit;
        this.el = {
            dropdown: document.createElement('ul')
        }
        this.style();
        this.event_listener();
        this.input.insertAdjacentElement('afterend', this.el.dropdown);
    }

    event_listener() {
        this.input.addEventListener('keyup', (event) => this.event_handler(event, 'input'));
        this.el.dropdown.addEventListener('click', (event) => this.event_handler(event, 'li'));
    }

    event_handler(event, type) {
        switch (type) {
            case 'input':
                const value = this.input.value.toLowerCase().trim();
                this.el.dropdown.innerHTML = '';

                if (value != '') {
                    this.el.dropdown.classList.remove('hide_ul');
                    for (let i = 0, j = 0; i < this.dropdown_arr.length, j <= this.limit; i++) {
                        const item = this.dropdown_arr[i];
                        console.log('for');
                        if (item.toLowerCase().trim().indexOf(value) == 0) {
                            const li = document.createElement('li');
                            li.textContent = item;
                            this.el.dropdown.appendChild(li);
                            j++;
                            console.log('if');
                        }
                    }
                }
                break;
            
            case 'li':
                if (event.target.tagName.toLowerCase() == 'li') {
                    this.input.value = event.target.textContent;
                    this.el.dropdown.classList.add('hide_ul');
                }
                break;

            default:
                break;
        }
    }

    style() {
        this.el.dropdown.style.width = `${this.input.offsetWidth}px`;
        this.el.dropdown.style.top = `${this.input.offsetTop + this.input.offsetHeight}px`;
        this.el.dropdown.style.left = `${this.input.offsetLeft}px`;
        this.el.dropdown.classList.add('dropdown');
    }
}