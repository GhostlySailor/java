(function (window){
    let IvanGreeter = {};
    IvanGreeter.name = "Иван";
    let greeting = "Привет, ";
    IvanGreeter.sayHello = function(){
  console.log(greeting+" "+ IvanGreeter.name);
    }
    window.IvanGreeter = IvanGreeter;
})
(window);
