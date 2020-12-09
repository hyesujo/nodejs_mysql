let a =Math.pow(3,2); //3의 2승
console.log(a); 

let b = Math.round(10.6); //반올림
console.log(b);

let c =Math.ceil(10.2);
console.log(c);

let d = Math.floor(10.2); //버린다
console.log(d);

let e = Math.sqrt(9); //제곱근
console.log(e);

let f = Math.random(); //랜덤한 난수 생성
console.log(f);

let g = Math.round(100 *Math.random()); 
console.log(g);

(
    (
        () =>{
    i = 0;
    while(i < 10) {
        document.wirte(i);
        i+=1;
        }
     }
    )
)(); //익명함수 =함수를 1회성으로 호출할때