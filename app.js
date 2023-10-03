// const { constants } = require("buffer")


// const log = console.log
// console.log("Hello world")

// var a = 7
// var b = 2
// var c = a+b
// console.log("The Output is " + c)

// var http = require('http')

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end("welcome back Aliens!!!")
// }).listen(8080)

// num =2 + 2
// console.log(typeof(num))
// var user = "striaaaang"
// console.log(user)

// let radius = 5
// const pi = 3.14
// let area
// let Aliens

// radius = 6

// area = pi * radius * radius

// console.log(area)
// console.log(a)

// let num1 = 1.5e12
// console.log(num1)
// console.log(typeof num1)

// let num1 = 10_00_000
// console.log(num1)
// console.log(typeof num1)

// let num1 = -5/0
// console.log(num1)
// console.log(typeof num1)

// console.log(Number.MAX_VALUE)


// let firstname = "rudresh"
// let lastname = "cg"

// console.log(firstname + " "  + lastname)

// let user = "rud\vresh \"cg\""

// console.log(user)

// let bool = 5<6
// console.log(typeof bool)

// let user

// console.log(user)

// let num = Boolean(8)
// console.log(num, typeof num)

// let num1 = true
// let num2 = false
// console.log(num1+num2)

// let x = 6
// let y = 6
// let data = x == y
// console.log(data)

// console.log("Pen">"Book")

// let num1 = 3
// let num2 = 4

// let result = num1 > num2

// if(result){
//     console.log("num1 is greater")
//     console.log("num1 is greaterr")

// } 

// else if(num1 < num2){
//     console.log("num2 is greater");
//     console.log("yeee")
// }

// else{
//     console.log("Byee")
// }


// let num = 7
// let result 

// if(num%2===0){
//     result = "Even"
// }
// else{
//     result = "Odd"
// }

// result = num%2===0?"Even":"Odd"

// console.log(result)

// let n = 0
// while (n<5){
//     console.log("hi")
//     n++
// }

// for(let i=0; i<10; i++){
//     console.log(i)
// }

// let alien = {
//     name: 'rudresh',
//     tech: 'cg',
//     'work exp': "3year"
// }

// console.log(alien['name'])
// console.log(alien.tech)
// console.log(alien["work exp"])


// let alien = {
//     name: 'rudresh',
//     tech: 'js',
//     laptop: {
//         cpu: 'i7',
//         ram: 5,
//         brand: 'Asus'
//     }
// }

// delete alien.laptop
// console.log(alien)
// console.log(alien.laptop?.brand?.length)

// let alien = {
//     name: 'rudresh',
//     tech: 'js',
//     laptop: {
//         cpu: 'i7',
//         ram: 5,
//         brand: 'Asus'
//     }
// }

// for(let key in alien){
//     console.log(key);
// }

// function greet(){
//     console.log("hello world ");
// }


// function greet(){
//     return "hello world"
// }
// let str = greet();
// console.log(str)

// function greet(user){
//     return `Hello ${user}`
// }

// console.log(greet("rudresh"))


// function add (n1, n2, n3){
//     return n1+n2+n3
// }

// console.log(add(2,6, 8))


// let greet = () => {
//     console.log("hello world");
//     return 1
// }

// console.log(greet())


// let add = (n1, n2) => n1+n2

// console.log(add(5, 6))


// let add = (n1, n2) => Math.abs(n1)+Math.abs(n2)

// console.log(add(-5, -6))

// function alien(name, tech){
//     this.names = name;
//     this.techs = tech;

// }
// let alien1 = new alien("rudresh", "js")

// log(alien1)


// let values = [1, 2, 3, 4, 5];

// values.push(6);
// log(values)
// log(values.length);
// log(values[6])
// values[0]=0
// values.pop()
// log(values)

// let data = ['rudresh', 5, {tech: 'js'}, function(){log("hello world");}];
// log(data);
// data[3]();


// let data = [1, 2, 3, 4, 5, 6]
// for(let d in data){
//     log(d)
// }

// let data = [1, 2, 3, 4, 5, 6]
// log(data.push(9))
// log(data.pop())
// log(data.shift())
// log(data.unshift(0))
// log(data.splice(3,2, 4, 5))
// log(data)

// let nums = []

// nums[0] = 5
// nums[99] = 9

// log(nums.length)
// for(let i in nums){
//     log(i)
// }


// let [a, b, c, d] = [1, 2, 3, 4]
// log(typeof a,b,c,d)
// let  nums  = [5, 7, 2 , 4]
// log(nums)
// let [a,b ,c, d, e] = nums
// log(a)

// let a = 20;
// let b = 30;

// [a,b] = [b,a]
// log(a)
// log(b)


// let nums = [1, 2, 3, 4, 5, 6]

// nums.forEach(n => {
//     log(n*2)
// })


// let nums = [1, 2, 3, 4, 5, 6, 7, 8]
// even = nums.filter(n=>n%2===0)
// log(even)
// log(nums.filter(n=>n%2===0))

// let nums = new Set()

// nums.add(3)
// nums.add(3)
// nums.add("hello")
// nums.add("hello")
// nums.add("helloo")

// log(nums)

// function start(){
//     for(i = 0; i<5; i++){
//         if(true){
//             color = "red"
//         }
//     }
//     log(color)
//     log(i)
// }

// start();

// let map = new Map();

// map.set("Navin", "java");
// map.set("rudresh", "python");
// map.set("jeevan", "javascript");

// map.forEach((n, v)=>{
//     console.log(v,": ", n)
// })
// i = 0 
// function show(){
//     console.log("Hi", i);
//     i++
//     show();
// }

// show();


// function a(){
//     console.log("a called");
// }


// a();
// b();
// function a() {
//     console.log("hello a");
// }
// let b = function () {
//     console.log("hello a");
// }

// function simulateNetworkRequest(data, callback) {
//     setTimeout(function() {
//       // Simulating network response after 1 second
//       if (data) {
//         callback(null, "Data received successfully: " + data);
//       } else {
//         callback("Error: No data received!", null);
//       }
//     }, 1000);
//   }

//   // Calling the function with a callback
//   simulateNetworkRequest(null, function(error, result) {
//     if (error) {
//       console.error(error,);
//     } else {
//       console.log(result);
//     }
//   });

// setTimeout(function(){
//     console.log
//     ("timer");
// }, 2000);

// function x(y){
//     console.log("x")
//     y();
// }
// x(function y(){
//     console.log("y")
// });

// addEventListener

// function synchr(){
//     console.log("step 1");
//     console.log("step 2");
//     console.log("step 3");
//     console.log("step 4");
// }


// function asynchr(){
//     console.log("step 1");
//     setTimeout(function () {
//         console.log("step 2");
//     }, 5000)
//     console.log("step 3");
//     console.log("step 4");
// }

// asynchr();

// function asyncExample() {
//     console.log("Start");

//     setTimeout(function() {
//       console.log("Step 1");
//     }, 2000);

//     console.log("Step 2");

//     setTimeout(function() {
//       console.log("Step 3");
//     }, 1000);

//     console.log("End");
//   }

//   asyncExample();
//   console.log(c);
//   var a=5;
// //   console.log(b);
//   let b=9;
//   function c(){
//     console.log("A")
//   }

// let a = [1,2]
// let b = a.slice();
// a.push(8)
// console.log(b.pop(9));
// b.push(9);
// console.log(b)

// const axiosRequest = require('axios')
// let response = axiosRequest.get('https://www.boredapi.com/api/activity')
// setTimeout(function (){
//     console.log(response);
// }, 5000)
// console.log(`You could ${response}`)


// const axiosRequest = require('axios')
// axiosRequest.get('https://www.boredapi.com/api/activity')
// .then(response => {
//     console.log(`You could ${response.data.activity}`)
// })
// .catch(error => {
//     console.error(`ERROR! ${error}`)
// })

// const axiosRequest = require('axios');

// async function getdata(){
//     response = await axiosRequest.get('https://www.boredapi.com/api/activity')
//     console.log(response.data.activity);
// }   
// getdata();

// import fetch from "node-fetch";
// const axiosRequest = require('axios');
// const { response } = require("express");


// const githud_api = 'https://api.github.com/users/Rudreshcg'
// axiosRequest.get(githud_api)
// .then(response => {
//     console.log(response)
// })
// console.log(user)

// const calc = require('./calc')

// calc.add(4, 5)
// calc.sub(10, 5)

// const fs = require('fs')

// fs.readFile('caslc.js', 'utf8', function(err, data){
//     console.log(data)
// })

// fs.writeFile("calc1.js", 'console.log("done")', function (){
//     console.log("file write")
// })

// fs.appendFile("calc1.js", "console.log('appending this line')", function(){
//     console.log("appended is completed");
// })

// fs.unlink("calc1.js", function(err){
//     console.log("this file is deleted", err)
// })

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//     res.send("Hello world!!!")
// })

// app.listen(9000, function (){
//     console.log("Running......")
// }) 

// const os = require("os")
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// const {format} = require('date-fns');
// const {v4: uuid} = require('uuid');


// console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));
// console.log(uuid());


// let arr = [
//     {
//         userId: 1,
//         mngrId: 0
//     },
//     {
//         userId: 2,
//         mngrId: 1
//     },
//     {
//         userId: 3,
//         mngrId: 1
//     },
//     {
//         userId: 4,
//         mngrId: 2
//     }
// ]
// let temp = {}
// arr.forEach((user) => {
//     if (temp[user.mngrId]) {

//     }
//     else {
//         let present = arr.find((u) => u.userId == user.mngrId)
//         if (present) {
//             temp[present.mngrId] = true;
//         }
//         else {
//             console.log("Not present")
//         }
//     }
// })

// s = [6,8,9,5,6,5]
// a = s.fill(0, 2,4)
// console.log(a)

// function ab(){
//     let x = 1
//     if(true){
//         let x = 2
//         console.log(x)
//     }
//     console.log(x)
// }
// ab()

