(function (window){
    let MarieGreeter = {};
    MarieGreeter.name = "Мария";
    let greeting = "Здравствуйте, "
    MarieGreeter.sayHello = function(){
  console.log(greeting+" "+ MarieGreeter.name)
    }
    window.MarieGreeter = MarieGreeter
})
(window);