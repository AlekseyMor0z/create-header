function createHeader() {
    
    let items = headerItems.value;
    let tColor = textColor.value;
    let bgColor = backgroundColor.value;
    let hColor = hoverColor.value;

    let arrItems = items.split(", ")
    let headerNav = "";

    for (let i = 0; i < arrItems.length; i++) {
        headerNav +=`<li>${arrItems[i]}</li>`
    }
    
    header.innerHTML = `<ul>${headerNav}</ul>`

    headerStyles.innerHTML = `
        li {
            color: ${tColor};
            background-color: ${bgColor};
        }

        li:hover {
            color: ${hColor};
        }
    `;
}
