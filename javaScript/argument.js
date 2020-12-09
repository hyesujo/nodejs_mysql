function sum() {
    _sum = 0;
    for(let i =0; i< arguments.length; i++) {
        document.write(i+' : '+arguments[i] +'<br/>');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result:' +sum(1,2,3,4));