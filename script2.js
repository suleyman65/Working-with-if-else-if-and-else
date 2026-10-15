const temperature = 32 ;
if(temperature>=30){
    console.log("hava çok sıocak");
    
}
else{
    console.log("hava normal")
}
    


const number =17;
if(number%2===0){
    console.log("bu bir çift sayıdır" )
}

else{
    console.log("bu bir tek sayıdır")
}

const age1 =19;

if(age1>=18){
    console.log("giriş yapabilirsin")

}
else{
    console.log("giriş yapamazsınız")
}


const balance = 250;

const price = 300 ;

if(price<=250){
    console.log("satın alma başarılı")
}

else{
    console.log("yetersiz bakiye")
}

const password = "javascript123" ;


if(password === "javascript123" ){
    console.log("giriş başarılı")
}
else{
    console.log("şifre yanlış")
}

const score = 72 ;
 if(score>=85){
    console.log("pek iyi")
 }
else if (score >= 70 && score <= 84) {
    console.log("iyi");
}

else if (score >= 50 && score <= 69) {

    console.log("geçer");
}
else{
    console.log("kaldı")
}

const cartTotal = 1200 ;


if(cartTotal>=1000){
    console.log(cartTotal-(cartTotal*20/100))
}
else{
    console.log(cartTotal-(cartTotal*10/100))
}

const username = "süleyman";
const password2 = 123456 ;

if(username==="süleyman" && password2===123456 ){
    console.log("hoş geldin")
}
else{
    console.log("bilgiler hatalı")    
}

const a = 24;
const b = 37;
if(a>b){
    console.log("a")
}
else if(b>a){
console.log("b")
}
else{
    console.log("sayılar eşit")
}

const age=22;

const asLicense = false ;

if(age<18){
    console.log("yaşın yetmiyor")
}

else if(age>=18 && asLicense===false){
    console.log("ehliyetin yok")
}
else{
console.log("araç kullanabilirsin")
}

const balance1 = 1500;
const withdrawAmount = 800 ;

if(withdrawAmount<=balance1){
    console.log(balance1-withdrawAmount)
}
else{
    console.log("yetersiz bakiye")
}


const orderTotal = 450;
if(orderTotal>=500){
    console.log("kargo ücretsiz" )
 }
 else{
console.log(orderTotal+50)
 }

 const number1=42;
 if(number1>=1 && number1<=100){
    console.log("1-100 değer arqlığındadır")
 }
 else{
    console.log("değer aralığında değil" )
 }

 const isLoggedIn = true;
 const isAdmin =false;

 if(isLoggedIn===false){
     console.log("lütfen giriş yap")
    }
    else if(isLoggedIn===true && !isAdmin === false){
        console.log("yönetici paneline hoşgeldiniz ")
    }


 if(isAdmin===false && isLoggedIn===true){
 console.log("erişim iznin yok")   
 }

 const c =10;
 const d =5;
 const operator="-";


if(operator==="*"){
    console.log(c*d)
}
else if (operator === "-") {
    console.log(c - d);
}
else if (operator==="+"){
    console.log(c+d)
}
else if (operator==="/"){
    console.log(c/d)
}
else{
    console.log("geçersiz işlem")
}



const age5 = 20;
const isEmailVerified = true;
const isBanned = false;


if(age5>=18 && isEmailVerified===true && !isBanned){
    console.log("erişim verildi")

}
else{
    console.log("Erişim reddedildi")
}


const k=5;
const l=5;
const m=5;

if(k === l && l=== m){
    console.log("eşkenar üçgen")
}
else{
    console.log("ikizkenar üçgen")
}
 

const purchasePrice = 800 ;
const sellingPrice = 950;

if(sellingPrice>purchasePrice){
    console.log((sellingPrice-purchasePrice),"kar")
}

else if(sellingPrice===purchasePrice){
    console.log("ne kar ne zarar")
}
else{
    console.log("zarar")
}


const temperature1 = 12;
const sRaining = true ;

if(temperature1<10){
    console.log("kalın giyin")
}
else if(temperature1>=10 && temperature1<=20){
    console.log("ceket giy")
}
else if(temperature1>=20){
    console.log("hafif giyin")
}
 if(sRaining===true){
    console.log("şemsiye al")
}   

const Normal_ticket = 200 ;
const age3 = 20;
const isStudent = true;

if(age3<12 ){
    console.log(Normal_ticket-(Normal_ticket*50/100))
}
else if(age3>=65){
    console.log(Normal_ticket-(Normal_ticket*30/100))
}

else if(isStudent===true){
    console.log(Normal_ticket-(Normal_ticket*20/100))
}
// else if(age3<12 && isStudent===true){
//     console.log(Normal_ticket-(Normal_ticket*50/100))
// }
else {
    console.log(Normal_ticket);
}