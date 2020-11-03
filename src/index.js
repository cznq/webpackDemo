
console.log('4444process.env.NODE_ENV333:', process.env.NODE_ENV);

function getDayjs() {
  return import(/* webpackChunkName:'day_js' */ 'dayjs')
}
async function getCom() {
  const { default: day_js } = await getDayjs()
  // return _.join(['ww','qq'],'//')
  return day_js().format('YYYY')
}
// console.log('getCom',getCom())
getCom().then(res => {
  console.log('res11:', res)
})

// import './index.css';
// var age = 16;
//     var gender = 'female';

//     var obj = {
//       age: 11,
//       gender: 'male'
//     }

//     function Test(a, b) {
//       console.log(this.age);
//       console.log(this.gender);
//       console.log(a);
//       console.log(b);
//     }


//     Function.prototype.myCall = function(obj,...arg){
//       obj.fn = this;
//       const res = obj.fn(...arg)
//       delete obj.fn;
//       return res;
//     }
// Function.prototype.bind1 = function(obj,args){
//   obj.fn = this
//   return function(){
//     const res  = obj.fn(...args)
//     delete obj.fn
//     return res
//   }
// }
// const Te = Test.bind1(obj,[22,33])
// Te();
// console.log(_.join(['a', 'b', 'c']));
// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */'./click.js').then(({ default: fun }) => {
//     console.log(fun);
//     fun()
//   })
// }) 
// class People {
//   constructor(name){
//     this.people= name;
//   }
//   sea(){
//     console.log(this.people+333);
//   }
// }
// class Student extends People {
//   constructor(name,age){
//     super(name);
//     this.age = age;
//   }
//   // siHei(){
//   //   console.log(`${this.name}说好`);
//   // }
// }

// const student = new Student('wzj',18);
// console.log(student,student.age);
// student.sea();