// ::::: hover random color ::::: 
let cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    });

    cards[i].addEventListener('mouseleave', function() {
        this.style.backgroundColor = "#fff";
    });
}


// ::::: get value by id ::::: 
function getValueById(elementId) {
    const getValue = document.getElementById(elementId);
    const valueString = getValue.value;
    const value = parseFloat(valueString);
    getValue.value = '';
    return value;
}

// ::::: get text value by id ::::: 
function getTextValueById(elementId) {
    const getValue = document.getElementById(elementId);
    const valueString = getValue.innerText;
    const value = parseFloat(valueString);
    return value;
}

// ::::: get text by id ::::: 
function getTextById(elementId){
    const getText = document.getElementById(elementId);
    return getText;
}

// ::::: display value from input field ::::: 
function displayInputValue (elementId1, elementId2, elementId3, elementId4){
    const value1 = getValueById(elementId1);
    const value2 = getValueById(elementId2);
    if(value1 > 0 || value2 > 0){
        return getTextById(elementId3).innerText = value1, getTextById(elementId4).innerText = value2;
    }else{
        alert ('Please enter valid value.');
        return;
    }
}

// ::::: get input field display block or none ::::: 
function getInputFieldDisplay(gInputField, display) {
    const getInputFieldById = document.getElementById(gInputField);
    return getInputFieldById.style.display = display;
}

// ::::: get unchecked with slowly ::::: 
function getUncheckedById (elementId){
    const checkbox = document.getElementById(elementId);
    checkbox.addEventListener('change', function(){
        if(this.checked){
            setTimeout(() => {
                return this.checked = false;
            }, 2000)
        }
    })
}

// ::::: get geometry name ::::: 
function getDataById(gName) {
    const geometryName = document.getElementById(gName).innerText;
    const getData = {
        geometryName: geometryName,
    };
    return getData;
}

// ::::: get fraction value ::::: 
function getFractionById(elementId) {
    const getValue = document.getElementById(elementId);
    const valueString = getValue.innerText;
    const value = parseFloat(valueString);
    return value;
}

// ::::: calculate three value from input ::::: 
function calculateThreeValue(elementId1, elementId2, elementId3) {
    const value1 = getFractionById(elementId1);
    const value2 = getValueById(elementId2);
    const value3 = getValueById(elementId3);
    let area = value1 * value2 * value3;
    if(value1 <= 0 || value2 <= 0 || value3 <= 0){
        alert ('Please enter valid value.');
        return;
    }
    if (Number.isInteger(area)) {
        area = area;
    } else {
        area = area.toFixed(2);
    }
    return area;
}
// ::::: calculate three value from text ::::: 
function calculateThreeTextValue(elementId1, elementId2, elementId3) {
    const value1 = getFractionById(elementId1);
    const value2 = getTextValueById(elementId2);
    const value3 = getTextValueById(elementId3);
    let area = value1 * value2 * value3;
    if(value1 <= 0 || value2 <= 0 || value3 <= 0){
        alert ('Please enter valid value.');
        return;
    }
    if (Number.isInteger(area)) {
        area = area;
    } else {
        area = area.toFixed(2);
    }
    return area;
}

// ::::: calculate two value from input  ::::: 
function calculateTwoValue(elementId1,elementId2) {
    const value1 = getValueById(elementId1);
    const value2 = getValueById(elementId2);
    let area = value1 * value2;
    if(value1 <= 0 || value2 <= 0){
        alert ('Please enter valid value.');
        return;
    }
    if (Number.isInteger(area)) {
        area = area;
    } else {
        area = area.toFixed(2);
    }
    return area;
}
// ::::: calculate two value from text  ::::: 
function calculateTwoTextValue(elementId1,elementId2) {
    const value1 = getTextValueById(elementId1);
    const value2 = getTextValueById(elementId2);
    let area = value1 * value2;
    if(value1 <= 0 || value2 <= 0){
        alert ('Please enter valid value.');
        return;
    }
    if (Number.isInteger(area)) {
        area = area;
    } else {
        area = area.toFixed(2);
    }
    return area;
}

// ::::: function for display data ::::: 
function displayData(gName, result, button){
    const tableArea = document.getElementById('table-area');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="gg-color-muted">${serial}.</td>
    <td class="gg-color-muted">${gName}</td>
    <td class="gg-color-muted position-relative">${result}cm<span class="position-absolute top-0 right-0 fs-7">2</span></td>
    <td><button class="gg-convert-btn border-0 fs-7 position-relative">Convert to m<span class="position-absolute top-0 right-0 fs-7">2</span></button></td>
    `
    tableArea.appendChild(tr);
}
