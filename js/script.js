const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange)

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    color(value) {
        this.element.style.color = value
    },
    width(value) {
        this.element.style.width = value + 'px'
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px'
    },
    texto(value) {
        this.element.innerText = value
    },
    border(value) {
        this.element.style.border = value
    },
    fontFamily(value) {
        this.element.style.fontFamily = value
    }
}

function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    handleStyle[name](value);
    showCSS();
    saveValues(name, value)
}


function saveValues(name, value) {
    localStorage[name] = value
}

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach((prop) => {
        handleStyle[prop](localStorage[prop]);
        controles.element[prop].value = localStorage[prop]
    })
}


function showCSS() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}