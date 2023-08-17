const tips={
    kigali_muhanga:1000,
    kigali_huye:2600,
    kigali_karongi:2500,
    kigali_nyagatare:3400,
    kigali_rusizi:7000,
    kigali_rubavu: 3400,
    kigali_musanze:2700,
    ngororero_kigali:1980
}
var tip=Object.keys(tips);
var container=document.querySelector('.container');
var price=document.getElementById('price');

for(let x=0; x<tip.length; x++){
    var list=document.createElement('li');
    list.innerHTML=tip[x];
    container.append(list)

list.onclick=()=>{
        let pri=Object.values(tips);
        price.innerHTML=tip[x]+":"+ pri[x];
}

}
// list.addEventListener("click",getPrice());
//     //getPrice();

// function getPrice(){
//     var price=Object.values(tips);
//     for(let x=0; x<price.length; x++){
//         alert(price)
    
//     }

// }