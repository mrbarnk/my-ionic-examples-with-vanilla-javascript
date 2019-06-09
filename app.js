author = 'mrbarnk';
const bars = [
    {
        title: "Calculator",
        logo: "calculator",
        color: "warning",
        contentToDisplayUrl: '<embed height="400" src="calc.html" type="">'
    },
    {
        title: "Calendar",
        logo: "calendar",
        color: "primary",
        contentToDisplayUrl: '<embed height="400" src="cal.html" type="">'
    }
]
customElements.define('nav-home', class Home extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-list>
                ${bars.map((bar, index) => `
                            <ion-item button onclick="showDetail(${index})">
                                <ion-icon slot="start" color="${bar.color}" name="${bar.logo}"></ion-icon>
                                ${bar.title}
                            </ion-item>
                `).join('\n')}
            </ion-list>
            `;
    }
});

const theNav = document.querySelector('ion-nav');

function showDetail(id) {
    const bar = bars[id];
    theNav.push('nav-detail', { bar });
}
customElements.define('nav-detail', class NavDetail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `            
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-back-button defautlHref="/"></ion-back-button>
                        </ion-buttons>
                        <ion-title>      
                                <ion-icon name="${this.bar.logo}" slot="start"></ion-icon>${this.bar.title}
                        </ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content padding id="">
                    ${this.bar.contentToDisplayUrl}
                </ion-content>       
            `;
    }
});