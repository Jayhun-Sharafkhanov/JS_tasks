ureyimdekiEded = 38;

let userinDaxilEtdiyiEded = Number (prompt('Ureyimde tutudugum ededi texmin et:'))

let count =1;

while(userinDaxilEtdiyiEded !== ureyimdekiEded){
    count++
    userinDaxilEtdiyiEded = Number (prompt('Ureyimde tutudugum ededi texmin et:'))

}
if(count===1){
    console.log('Tebrikler siz Kapital Bankdan 1000 azn qazandiniz.')
}else if(count >= 2 && count <= 5){
    console.log('Tebrikler siz Kapital Bankdan 750 azn qazandiniz.')
}else if(count >= 6 && count <= 9){
    console.log('Tebrikler siz Kapital Bankdan 250 azn qazandiniz.')
}else if(count >= 10){
    console.log('Tessuf siz 250 azn cerimelendiniz.')
}
console.log('Hee bideki; ' + count + ' defeye tapdin')
