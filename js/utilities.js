function getFieldValueById(id) {
    const fieldValue = document.getElementById(id).value;
    const value = Number(fieldValue);
    console.log(typeof value,value);
}