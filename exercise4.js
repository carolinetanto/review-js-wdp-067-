let num = prompt();
if(Number.isInteger(Number(num))) {
    if(num%2 == 0) {
        console.log('genap');
    }
    else {
        console.log('ganjil');
    }
}
else {
    console.log('Invalid Data');
}
