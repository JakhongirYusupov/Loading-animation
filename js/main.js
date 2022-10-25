const cont = document.querySelector('.container');
const loading = document.querySelector('.loading');


; (function getData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(data => data.json())
        .then(data => {
            loading.classList.add("d-none")
            addElement(data)
        });

}());

function addElement(data) {
    data.forEach(element => {
        const [img] = createElement('img')
        img.src = element.thumbnailUrl
        cont.appendChild(img)
    });
}

const createElement = (...arr) => arr.map(element => document.createElement(element));
