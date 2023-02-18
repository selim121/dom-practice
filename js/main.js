// ::::: initial serial count ::::: 
let serial = 0;

// ::::: blog button :::::
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'pages/blog.html';
})

// ::::: triangle section ::::: 
document.getElementById('btn-triangle').addEventListener('click', function () {
    const areaOFTriangle = calculateThreeValue('triangle-fraction', 'triangle-base', 'triangle-height');
    if(areaOFTriangle > 0){
        serial +=1;
        displayData(getDataById('triangle').geometryName, areaOFTriangle);
    }else{
        alert ('Pleaser enter valid value.');
        return;
    }
    
})

// ::::: rectangle section ::::: 
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const areaOfRectangle = calculateTwoValue('rectangle-width', 'rectangle-length');
    if (areaOfRectangle > 0) {
        serial +=1;
        displayData(getDataById('rectangle').geometryName, areaOfRectangle);
    }else{
        alert ('Please enter valid value.');
        return;
    }
})

// ::::: parallelogram section ::::: 
document.getElementById('parallelogram-edit').addEventListener('click', function () {
    getInputFieldDisplay('parallelogram-input-field', 'block');
})

document.getElementById('parallelogram-checkbox').addEventListener('click', function () {
    displayInputValue('parallelogram-base', 'parallelogram-height', 'parallelogram-text-base', 'parallelogram-text-height');
    getUncheckedById('parallelogram-checkbox');
})

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    if (calculateTwoTextValue('parallelogram-text-base', 'parallelogram-text-height') > 0) {
        serial +=1;
        displayData(getDataById('parallelogram').geometryName, calculateTwoTextValue('parallelogram-text-base', 'parallelogram-text-height'));
        getInputFieldDisplay('parallelogram-input-field', 'none');
    }else{
        alert ('Please enter valid value.');
        return;
    }
})

// ::::: Rhombus section ::::: 
document.getElementById('rhombus-edit').addEventListener('click', function () {
    getInputFieldDisplay('rhombus-input-field', 'block');
})

document.getElementById('rhombus-checkbox').addEventListener('click', function () {
    displayInputValue('rhombus-base', 'rhombus-height', 'rhombus-text-base', 'rhombus-text-height')
    getUncheckedById('rhombus-checkbox');
})

document.getElementById('btn-rhombus').addEventListener('click', function () {
    if (calculateThreeTextValue('rhombus-fraction', 'rhombus-text-base', 'rhombus-text-height') > 0) {
        serial +=1;
        displayData(getDataById('rhombus').geometryName, calculateThreeTextValue('rhombus-fraction', 'rhombus-text-base', 'rhombus-text-height'));
        getInputFieldDisplay('rhombus-input-field', 'none');
    }else{
        alert ('Please enter valid value.');
        return;
    }

})

// ::::: pentagon section ::::: 
document.getElementById('pentagon-edit').addEventListener('click', function () {
    getInputFieldDisplay('pentagon-input-field', 'block');
})

document.getElementById('pentagon-checkbox').addEventListener('click', function () {
    displayInputValue('pentagon-base', 'pentagon-height', 'pentagon-text-base', 'pentagon-text-height');
    getUncheckedById('pentagon-checkbox');
})

document.getElementById('btn-pentagon').addEventListener('click', function () {
    if(calculateThreeTextValue('pentagon-fraction', 'pentagon-text-base', 'pentagon-text-height') > 0){
        serial +=1;
        displayData(getDataById('pentagon').geometryName,calculateThreeTextValue('pentagon-fraction', 'pentagon-text-base', 'pentagon-text-height'));
        getInputFieldDisplay('pentagon-input-field', 'none');
    }else{
        alert ('Please enter valid value.');
        return;
    }
})

// ::::: ellipse section ::::: 
document.getElementById('ellipse-edit').addEventListener('click', function () {
    getInputFieldDisplay('ellipse-input-field', 'block');
})

document.getElementById('ellipse-checkbox').addEventListener('click', function () {
    displayInputValue('ellipse-base', 'ellipse-height', 'ellipse-text-base', 'ellipse-text-height')
    getUncheckedById('ellipse-checkbox');
})

document.getElementById('btn-ellipse').addEventListener('click', function () {
    if(calculateThreeTextValue('ellipse-fraction', 'ellipse-text-base', 'ellipse-text-height') > 0){
        serial +=1;
        displayData(getDataById('ellipse').geometryName, calculateThreeTextValue('ellipse-fraction', 'ellipse-text-base', 'ellipse-text-height'));
        getInputFieldDisplay('ellipse-input-field', 'none');
    }else{
        alert ('Please enter valid value.');
        return;
    }
})