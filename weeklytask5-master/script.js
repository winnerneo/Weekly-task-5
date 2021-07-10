const meters = document.getElementById('meters');

meters.addEventListener('input', metersConverter);

function metersConverter(m){
    let metersC= m.target.value;
    document.getElementById('inches').value = metersC * 39.37;
    document.getElementById('feet').value = metersC * 3.28084;
    document.getElementById('yard').value = metersC * 1.094;
}