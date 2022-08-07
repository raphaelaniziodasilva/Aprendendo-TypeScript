"use strict";
class Data {
    constructor(dia, mes, ano = 1994) {
        this.dia = dia;
        this.mes = dia;
        this.ano = ano;
    }
}

let data = new Data(1, 3, 2012);
console.log(data);

let data2 = new Data(10, 08);

class Data1 {
    constructor(dia, mes, ano = 2017) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
let data3 = new Data1(10, 10, 2007);
console.log(data3.dia);

let data4 = new Data1(08, 11);
