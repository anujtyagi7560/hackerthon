// const canDrive = (age)=>{
//     return age >=18 ? true : false
// }
// let runAgain=true;
// while(runAgain){
//     let age=prompt("enter your age");
//     age=Number.parseInt(age);
//     if(age<0){
//         console.error("please enter a valid age ")
//         break
//     }
//     if(canDrive(age)){
//         alert("you can drive")
//     }
//     else{
//         alert("you can not drive")
//     }
//     runAgain=confirm("do u ant to tell again?")

// }
// function randomNumber(character){
//     const randomIndex=Math.floor(Math.random()*character.length);
//     return character[randomIndex]
// }
// const characterset=['S','W','G'];

// let user=0;
// let computer=0;
// let runAgain=true;
// while(runAgain){
//     const randomchar=randomNumber(characterset);
//     let a=prompt("enter 'S' OR 'W' OR 'G' ");
//     if(a==randomchar){
//         alert("draw")
//     }
//     else if(a=='W' && randomchar=='G' ){
//         user++
//         alert("You win")
//     }
//     else if(a=='S' && randomchar=='w' ){
//         user++
//         alert("You win")
//     }
//     else if(a=='G' && randomchar=='W' ){
//         user++
//         alert("You win")
//     }
//     else{
//         computer++
//         alert("You lose")
//     }
//     alert("your score: "+user+"computers score: "+computer)
//     runAgain=confirm("do you want to play again");
    
// }
// console.log(document.body.childNodes )
// console.log(document.body.firstChild);
// console.log(document.body.firstChild.nextSibling);
// let b = document.body
// console.log("first chid: ",b.firstChild);
// console.log("first child: ",b.firstElementChild);
// const changeBodycolor = () => {
//     document.body.firstElementChild.style.backgroundColor = "red";
// }
// let a=document.getElementById("id1")
// console.log(id1.matches(".box"))
// console.log(sp1.closest("#sp1"))
// document.body.firstElementChild.firstElementChild.firstElementChild.style.color="red";

// Array.from(document.getElementsByTagName("li")).forEach((element) => {
//     element.style.color="red";
// })
// let jokes=[`A pair of cows were talking in the field. One says, “Have you heard about the mad cow disease that’s going around?”

// “Yeah,” the other cow says. “Makes me glad I’m a penguin.”`,`Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace.” —Victor Borge`,`Your mother has been with us for 20 years,” said John. “Isn’t it time she got a place of her own?”

// “My mother?” replied Helen. “I thought she was your mother.”

// —Joseph Lozanoff`,`Why don’t pirates take a shower before they walk the plank?

// They just wash up on shore.`,`In Denver, the members of a Sunday­-school class were asked to set down their favorite biblical truths. One youngster laboriously printed: “Do one to others as others do one to you.” —Lee Olson, The Denver Post`,`According to unofficial sources, a new simplified income-tax form contains only four lines:

// 1. What was your income for the year?

// 2. What were your expenses?

// 3. How much have you left?

// 4. Send it in.

// —The Link`,'One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker. —Dallas News',`Two Hollywood stars ran into each other at the door of their psychiatrist’s office.

// “Hello, there,” said one. “Are you coming or going?”

// “If I knew that,” said the other, “I wouldn’t be here.”

// —The American Weekly`,`At a party, a young wife admonished her husband, “That’s the fourth time you’ve gone back for ice cream and cake. Doesn’t it embarrass you?”

// “Why should it?” answered her spouse. “I keep telling them it’s for you.”

// —Selma Glasser, Good Housekeeping`]
// let a =document.getElementById("joke")
// let randomindex=Math.floor( Math.random()*jokes.length);
// a.innerHTML = jokes[randomindex];
// let a=document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+'<h1>HELLO WORLD</h1>'
// let i;
// for(i=1;i<=10;i++){
//     let h1=document.createElement('div')
//     h1.innerHTML=`Hello world ${i}`;
//     a.appendChild(h1);

// }
// let first=document.getElementById("first")
// first.insertAdjacentHTML('beforeend','<div id="test">beforeend</div>')
// first.insertAdjacentHTML('afterbegin','<div id="test">afterbegin</div>')
// first.insertAdjacentHTML('beforebegin','<div id="test">beforebegin</div>')
// first.insertAdjacentHTML('afterend','<div id="test">afterend</div>')

// let btn=document.getElementById("btn")
// btn.addEventListener('click',function(e){
//     alert("hello1")
// })
// btn.addEventListener('click',function(e){
//     alert("hello2")
// })
// setInterval(function() {
//     document.getElementById("bulb").classList.toggle("bulbcontainer")
// },300)
// setTimeout(function(){
//     alert("hey how are you?")
// },1000)


// function addscript(src,callback){
//     let a =document.createElement("script")
//     a.src=src
//     a.onload=function(){
//         // console.log("successfully loaded "+src)
//         callback(src)

//     }
//     a.onerror=function(){
//         console.log("error loading this: "+src)
//         callback(new Error("src not found"))

//         }
//     document.body.appendChild(a)

// }
// function hello(error,src){
//     if(error){
//         console.log(error);
//     }
//     alert("hey")
// }
// addscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)

// let promise = new Promise(function(resolve,reject){
//     console.log("execution done")
//     resolve(56)
// })
// setTimeout(function(){
//     console.log("after 2 sec")
// },2000)
// console.log(promise)

// let p=new Promise(resolve => {
//     setTimeout(()=> {
//         resolve("done")
//     },1000)
// })
// p.then(document.write("done"))

// let p1 =new Promise((resolve,reject)=>{
//     console.log("i am pending")
//     setTimeout(() => {
//         resolve("done")
//     }, 5000);
// })
// let p2 =new Promise((resolve,reject)=>{
//     console.log("i am pending")
//     setTimeout(() => {
//         reject("some error occured")
//     }, 5000);
// })
// p1.then((value)=>{
//     console.log(value)
// })
// p2.catch((error)=>{
//     console.log(error)
// })

 
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2 seconds")
//         resolve(56)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise 2")
//         }, 2000);
//     })
//     return p2 
// }).then((value)=>{
//     console.log(value)
// })
// let loadscript=(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script")
//     script.src=src
//     document.body.appendChild(script)
//     script.onload=()=>{
//         resolve("script has uploaded")
//     }
//     script.onerror=()=>{
//         reject("some error occured")
//     }

// })
// }
// let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
// )
// p1.then((value)=>{
//     console.log(value)
//     return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
//     ).then((value)=>{
//         console.log("second script loaded")
//     })
// }).catch((error)=>{
//     console.log(error)
// })


// STRAT OF FIRST






// let button1=document.querySelector("#button1")
// let button2 =document.querySelector("#button2")
// let button3=document.querySelector("#button3")
// let text=document.querySelector("#text")
// let healthbar=document.querySelector("#healthbar")
// let healthvalue=document.querySelector("#healthvalue")
// let goldvalue=document.querySelector("#goldvalue")
// let xpvalue=document.querySelector("#xpvalue")
// let health=100;
// let gold=50;
// let xp=0;
// // healthbar.innerText=`health: ${health}  \t  gold:${gold}  xp:${xp}`
// text.innerText="you are on town square"
// inventory=["stick"]
// button1.onclick=gostore
// button2.onclick=gocave
// button3.onclick=fightdragon
// locations=[
//     {
//         name:'town square',
//         "button text":["gostore","gotocave","fight dragon"],
//         "button functions":[gostore,gocave,fightdragon],
//         text:"you are on home screen"
//     },
//     {
//         name:"store",
//         "button text":["buy 10 health(10 gold)","buy weapon(30 gold)","gototown"],
//         "button functions":[buyhealth,buyweapon,gohome],
//         text:"you entered store"
//     },
//     {
//         name:"cave",
//         "button text":["fight slime","fight fagged beast","gotohome"],
//         "button functions":[fightslime,fightbeast,gohome],
//         text:"you entered cave"

//     }
// ]
// function update(location){
//     button1.innerText=location["button text"][0]
//     button2.innerText=location["button text"][1]
//     button3.innerText=location["button text"][2]
//     button1.onclick=location["button functions"][0]
//     button2.onclick=location["button functions"][1]
//     button3.onclick=location["button functions"][2]
//     text.innerText=location.text
// }
// function gohome(){
//     update(locations[0])
// }
// function gostore(){
//     update(locations[1])
// }
// function gocave(){
//     update(locations[2])
// }

// function fightdragon(){

// }
// function buyhealth(){
//     if(gold>=10){
//         health+=10;
//         gold-=10;
//         goldvalue.innerText=gold;
//         healthvalue.innerText=health;
//     }
//     else{
//         text.innerText="you do not have enough gold"
//     }
// }
// function buyweapon(){
//     if(gold>=30){
//         gold-=30;
//         goldvalue.innerText=gold;
//     }
//     else{
//         text.innerText="you do not have enough gold"
//     }
// }
// function fightslime(){
//     console.log("fighting dragon")
// }
// function fightbeast(){

// }




// END OF FIRST




// START OF SECOND




// let budgetval=document.getElementById("budget")
// let dropdown=document.getElementById("dropdown")
// let entrybutton=document.getElementById("select")
// let calculateval=document.getElementById("calculate")
// let output=document.getElementById("output")
// let cleaning=document.getElementById("clear")
// function isInvalid(str){
//     const regex=/\d+e\d+/i;
//     return str.match(regex)
// }
// function cleanInputString(str){
//     const regex=/[+-\s]/g
//     return str.replace(regex,'')

// }
// function addEntry(){
//     let targetelement=document.querySelector(`#${dropdown.value} .input-container`)
//     let entryNumber=document.querySelectorAll('input[type="text"]').length+1;
//     let HTMLtext=`
//     <label for="${dropdown.value}-${entryNumber}-name">Entry-${entryNumber}-name</label>
//     <input type="text" id="${dropdown.value}-${entryNumber}-name" placeholder="Name">
//     <label for="${dropdown.value}-${entryNumber}-calory">Entry-${entryNumber}-Calories</label>
//     <input type="number" id="${dropdown.value}-${entryNumber}-calory" placeholder="Calories" min="0">
//     `
//     targetelement.insertAdjacentHTML('beforeend',HTMLtext)
// }

// entrybutton.addEventListener('click',addEntry)

// function getValue(list){
//     let calories=0
//     for(let item of list){
//         let currValue=cleanInputString(item.value)
//         let invalidInputMatch=isInvalid(item.value)
//         if(invalidInputMatch){
//             alert("invalid input")
//             return null
//         }
//         calories+=Number(currValue)
//     }
//     return calories
// }
// function calculate(e){
//     e.preventDefault()
//     const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
//     const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
//     const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
//     const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
//     const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]')
//     const budget=getValue([budgetval])
//     const breakfastcalory=getValue(breakfastNumberInputs)
//     const lunchcalory=getValue(lunchNumberInputs)
//     const dinnercalory=getValue(dinnerNumberInputs)
//     const snackscalory=getValue(snacksNumberInputs)
//     const exercisecalory=getValue(exerciseNumberInputs)
//     const consumedCalories = breakfastcalory + lunchcalory+ dinnercalory + snackscalory;
//     const remainingCalories = budget - consumedCalories + exercisecalory;
//     const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
//     output.innerHTML = `
//   <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
//   <hr>
//   <p>${budget} Calories Budgeted</p>
//   <p>${consumedCalories} Calories Consumed</p>
//   <p>${exercisecalory} Calories Burned</p>
//   `;
//   output.classList.remove('hide')
// }

// calculateval.addEventListener('click',calculate)


// function clear(){
//     const inputcontainer=document.querySelectorAll('.input-container')
//     for(let container of inputcontainer){
//         container.innerHTML=''
//     }
//     budget.value=''
//     output.innerText=''
//     output.classList.add('hide')
// }

// cleaning.addEventListener('click',clear)






// let inputvalue=document.getElementById("value")
// let output=document.getElementById("output")
// let a=document.getElementById("calculate")
// let cleanInput=document.getElementById("clear")
// function check(str){
//     const regex=/[+-\s]/g
//     return str.replace(regex,'')
// }
// function isInvalid(str){
//     const regex=/\d+e\d+/i;
//     return str.match(regex)
// }
// function getValue(){
//     let result=inputvalue.value
//     let invalidInputMatch=isInvalid(result)
//     if(invalidInputMatch){
//         alert("INVALID INPUT")
//     }
//     return Number(result)
// }
// function calculate(){
//     let int_val=getValue()
//     let factorial=1
//     for(let i=int_val;i>0;i--){
//         factorial*=i }
//         alert(`factorial is ${factorial}`)
// }
// function clean(){
//     inputvalue.innerHTML=''
// }

// a.addEventListener('click',calculate)
// cleanInput.addEventListener('click',clean)

// START OF THIRD





// let inputValue=document.getElementById("inputValue")
// let output=document.getElementById("text")
// let check=document.getElementById("check")
// function checkPalindrome(){
//     let val=inputValue.value
//     if(val==""){
//         alert("PLEASE ENTER A VALUE")
//     }
//     else{
//         let xval=val.toLowerCase()
//         let lowerval=""
//         let size=xval.length
//         for(let i=0;i<size;i++){
//             if([','," ",'.','-','_'].includes(xval[i])){
//                 continue
//             }
//             else{
//                 lowerval+=xval
//             }
//         }
//         let newval=""
//         for(let i=size-1;i>=0;i--){
//             if([','," ",'.','-','_'].includes(lowerval[i])){
//                 continue
//             }
//             else{
//                 newval+=lowerval[i]
//             }
//         }
//         if(lowerval===newval){
//             output.innerHTML=`YES ${inputValue.value} is a PALINDROME`
//         }
//         else{
//             output.innerHTML=`NO ${inputValue.value} is not a PALINDROME`
//         }
//         console.log(newval)
//         console.log(lowerval)
//     }

//     inputValue.value=""
// }
// check.addEventListener('click',checkPalindrome)





// END OF THIRD





// START OF TODO LIST



// const addTask=document.getElementById("addbutton")
// const inputForm=document.getElementById("task-form")
// const closing=document.getElementById("closing")
// const submit= document.getElementById("submit")
// // const adding=document.getElementById("adding")
// const input_title=document.getElementById("input-title")
// const input_date=document.getElementById("input-date")
// const input_description=document.getElementById("input-description")
// addTask.addEventListener('click',()=>{
//     inputForm.classList.toggle("hidden")
// })
// const cancel=document.getElementById("closing")
// const discard=document.getElementById("discard")
// const closetask=document.getElementById("close-task-form-btn")
// const adding=document.getElementById("adding")
// const l=[]
// const currentTask={}
// const object={}
// const reset =()=>{
//     input_title.value=""
//     input_date.value=""
//     input_description.value=""
//     inputForm.classList.toggle("hidden")
//     currentTask={}
// }
// closetask.addEventListener('click',()=>{
//     closing.showModal()
// })
// cancel.addEventListener('click',()=>{
//     closing.close()
// })
// discard.addEventListener('click',()=>{
//     closing.close()
//     inputForm.classList.toggle("hidden")
// })
// submit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const dataArrIndex = l.findIndex((item) => item.id === currentTask.id)
//     const dataobj={
//         id:`${input_title.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
//         title:input_title.value,
//         date:input_date.value,
//         description:input_description.value
//     }
//     if(dataArrIndex===-1){
//         l.unshift(dataobj)
//     }
//     l.forEach(
//         ({ id, title, date, description }) => {
//             (adding.innerHTML += `
//             <div class="task" id="${id}">
//               <p><strong>Title:</strong> ${title}</p>
//               <p><strong>Date:</strong> ${date}</p>
//               <p><strong>Description:</strong> ${description}</p>
//               <button type="button" class="btn">Edit</button>
//               <button type="button" class="btn">Delete</button>
//             </div>
//           `)
//         }
//       );
//       reset()
// })



// END OF TODO LIST




// Roman Number converter

// let numberInput=document.getElementById("input")
// let result=document.getElementById("result")
// let converter=document.getElementById("convert")

// const checkNumber=()=>{
//     let num=Number(numberInput.value)
//     if(num<0 || numberInput.value==""){
//         result.style.backgroundColor="rgb(47, 4, 12)"
//         result.innerText="Please enter a valid number"
//         // numberInput.value=""
//         return;
//     }
//     else{
//         const romanNumerals = [
//             { value: 1000, symbol: 'M' },
//             { value: 900, symbol: 'CM' },
//             { value: 500, symbol: 'D' },
//             { value: 400, symbol: 'CD' },
//             { value: 100, symbol: 'C' },
//             { value: 90, symbol: 'XC' },
//             { value: 50, symbol: 'L' },
//             { value: 40, symbol: 'XL' },
//             { value: 10, symbol: 'X' },
//             { value: 9, symbol: 'IX' },
//             { value: 5, symbol: 'V' },
//             { value: 4, symbol: 'IV' },
//             { value: 1, symbol: 'I' }
//         ];
    
//         let roman = '';
    
//         for (let i = 0; i < romanNumerals.length; i++) {
//             while (num>= romanNumerals[i].value) {
//                 roman += romanNumerals[i].symbol;
//                 num -= romanNumerals[i].value;
//             }
//         }
//         result.style.backgroundColor="gray"
//         result.innerHTML=roman;
//         window.reload=function(){
//             result.style.display="none"
//         }
//     }
// }
// converter.addEventListener('click',checkNumber)
// numberInput.addEventListener('keydown',(e)=>{
//     if(e.key=="Enter"){
//         checkNumber()
//     }
// })
// window.reload=function(){
//     result.style.display="none"
// }






// END OF CONVERTER




// NUMBER SORTER

// const sortbutton=document.getElementById("sorter")

// const sortNumber=(event)=>{
//     event.preventDefault()
//     const inputValues=Array.from(document.getElementsByClassName("dropdown")).map((dropdown)=> Number(dropdown.value));
//     const sortedvalues=sourted(inputValues)
//     updateui(sortedvalues)
// }
// const updateui=(array=[])=>{
//     array.forEach((num,i)=>{
//         const outputvalue=document.getElementById(`output-value-${i}`)
//         outputvalue.innerText=num;
//     })
// }

// sortbutton.addEventListener('click',sortNumber);

// const sourted=(array)=>{
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array.length-1;j++){
//             if(array[j]>array[j+1]){
//                 let temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp;
//             }
//         }
//     }
//     return array;
// }



// End NUMBER SORTER






































