// ajax >> asyncronous js and xml 

// api >> data from datgabase >> json (js object - array of object)

// ajax >> spa >> single page application >> web with no refresh   >>react - angular

// xmlhttprequest



// crud 

/**

api >> baxkend developer >>  url + method

method 

1-get >>> get data from api (retrive)

2-post >> send data to api (add)


3-put  >> update


4-patch >>> update


5-delete >> delete


--------------------------- 

readystate >> 0  conn not stablish () no open
readystate >> 1 conn stablish make open()
readystate >> 2 req recived  send()
readystate >> 3 req proccessing 
readystate >> 4 req done , response ready

-------------------- 
status >>> 404   not found error

status >> 500 internal server error 

status >> 200  202 ok 

*/

// callbacks  >> async - sync code


var dataArray = [];

var row = document.getElementById('row');

var links = document.querySelectorAll('.navbar .nav-link');

for (var i = 0; i < links.length; i++) {


  links[i].addEventListener('click', function (e) {

    // console.log(e.target.innerText);

    GetData(e.target.innerText)


  })

}


function getPizza() {

  return new Promise(function (func, func2) {

    var myReq = new XMLHttpRequest(); //5at nos5a ==  make instance 
    myReq.open('GET', `https://forkify-api.herokuapp.com/api/search?q=pizza`);//make connec with api

    myReq.send();

    // readyStateChange event 
    myReq.addEventListener('loadend', function () {

      if (myReq.readyState == 4 && myReq.status == 200) {
        myReq.response; //stringggg fa lazm n7wlha l json

        var reponse = JSON.parse(myReq.response) // object {count , recipies}  print in consol


        // console.log(JSON.parse(myReq.response)); //string
        dataArray = reponse.recipes//json 'array of object ' 

        console.log('pizza')
        func();

        // displayData();

      } else {
        func2();
      }



    })



  })





}



function getPasta() {

  return new Promise(function (callback, callback2) {

    var myReq = new XMLHttpRequest(); //5at nos5a ==  make instance 



    myReq.open('GET', `https://forkify-api.herokuapp.com/api/search?q=pasta`);//make connec with api

    myReq.send();

    // readyStateChange event 
    myReq.addEventListener('loadend', function () {

      if (myReq.readyState == 4 && myReq.status == 200) {
        myReq.response; //stringggg fa lazm n7wlha l json

        var reponse = JSON.parse(myReq.response) // object {count , recipies}  print in consol


        // console.log(JSON.parse(myReq.response)); //string
        dataArray = reponse.recipes//json 'array of object ' 

        console.log('pasta')


        callback(); //call


        // displayData();

      } else {
        callback2();
      }



    })


  })



}

function getsalad() {

  return new Promise(function (resolved, rejected) {
    var myReq = new XMLHttpRequest(); //5at nos5a ==  make instance 



    myReq.open('GET', `https://forkify-api.herokuapp.com/api/search?q=salad`);//make connec with api

    myReq.send();

    // readyStateChange event 
    myReq.addEventListener('loadend', function () {

      if (myReq.readyState == 4 && myReq.status == 200) {
        myReq.response; //stringggg fa lazm n7wlha l json

        var reponse = JSON.parse(myReq.response) // object {count , recipies}  print in consol


        // console.log(JSON.parse(myReq.response)); //string
        dataArray = reponse.recipes//json 'array of object ' 

        console.log('salad');

        resolved();

        // displayData();

      } else {
        rejected();
      }



    })


  })




}


function end() {

  console.log('ending')
}


function handelError() {

  console.log('somethig error')
}


// f1().then(f2).then().then()

// getPizza().then( function(){    getPasta().then(  function(){   getsalad().then(    end   )     }   )     }  )

// then chaining 


// getPizza().
//   then(function () { return getPasta() })
//   .then(function () { return getsalad() }).catch(handelError)  


// async function getData(){

//   await getPizza();

//   await getPasta();

//   await getsalad();

//   end();

// }


//  getData();



// iV >> old

// 1-callback 
// 2-promise then 
// 3-async await 2017



// getPizza(function () { getPasta(function () { getsalad(end) }) })

// 2017  >> async await  opertaors





// x.addEventListener('' , function(){ addproduct()  })

// callback hilllllll 

// version 2015  es6 

// promise >>> callback hill

// time  >> pending

// done >> fullfiled (resolved)

// not done >> error (rejected)


// bulit in obj js = { then , catch  }


// var p = new Promise() ; 

// boolean func ??? return boolean  

// promise function ????  return promise 





// f1().then(f2).then(f3).then(f4)




// 1-syncronous code  متزامن  الكود اللي مش بياخد وقت )(مش بيستني حاجا تحصل فا بيشتغل بترتيه الطبيعي)

// // ajax >>> asyncronous js and xml   ,  settime out - event
// 2-asyncrnous code  غير متزامن   

// setTimeout(func , time)
// setInterval(func , time)


// ajax 
// code bystna 7aga t7sl we msh bysht8l bl trteb 



// async code >> ajax >> api
// getData('pizza'); 
// getData('pasta');
// getData('tomato');
// getData('salad');

// getUser();  1 

// getPosts() ; 2 

// getComments(); 3   


// // callbacks  

// // f1()

// // f2() 

// // f3()

// f1(  f2 (f3 (f4)) )

// getPasta();
// getPizza();
// getsalad();


function displayData() {

  var divs = '';
  for (var i = 0; i < dataArray.length; i++) {
    divs += `<div class="col-md-3">
          <div class="">
          <img src='${dataArray[i].image_url}'  class='w-100'>
            <h3>${dataArray[i].title}.</h3>
            <p>${dataArray[i].publisher}</p>
            <p>${dataArray[i].recipe_id}</p>
           
           
            </div>
        </div>`
  }

  row.innerHTML = divs;

}













// function test(x){

//   console.log(x);


//   x();
// }

// test();

// // test(4);


// test(   function(){   alert('hello')}   ) 

// 2017  fetch() >> allll steps of ajax  

async function GetData(Recipie) {


  // fetch >>> Response >> built in object (promise)

  var response = await fetch('https://forkify-api.herokuapp.com/api/search?q=' + Recipie); //async code take time 
  // console.log(await response.json()); //sync code

  var data = await response.json(); // {count , recipies}

  console.log(data);

  dataArray = data.recipes;

  displayData();
}

GetData('pizza');


var user = {
  name: "Ahmed Abd Al-Muti",
  email: "merit10100@gmail.com",
  password: "Ahmed@123",
  rePassword: "Ahmed@123",
  phone: "01010700700"
}





async function register() {


  // fetch >>> Response >> built in object (promise)

  // var response = await fetch("api" , {  method , body , headers }); //async code take time 
  var response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: "post"
    , body: JSON.stringify(user)

    , headers: { 'content-type': 'application/json' }
  }); //async code take time 


  console.log(await response.json())


}

register();