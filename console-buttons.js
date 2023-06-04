let form = document.querySelector('form');

class InvalidNumError extends Error {
  constructor(invalidNum) {
    super("This value cannot be converted to a number: " + invalidNum);
    this.name = "InvalidNumError";
    this.invalidNum = invalidNum;
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  try{
    if (Number.isNaN(Number(firstNum))) {
      throw new InvalidNumError(firstNum);
    }
    if (Number.isNaN(Number(secondNum))) {
      throw new InvalidNumError(secondNum);
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    console.error(error);
    if (error instanceof InvalidNumError) {
      console.log("Again, the stupid value is " + error.invalidNum);
    }
  } finally {
    form.reset();
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// console log example
window.addEventListener("load", function(event) {
  // TODO
  errorBtns[0].addEventListener("click", function(clickContext) {
    console.log("Hi");
  });
  errorBtns[1].addEventListener("click", function(clickContext) {
    console.error("Error example");
  });
  let count = 0;
  errorBtns[2].addEventListener("click", function() {
    console.log(count++);
  });
  errorBtns[3].addEventListener("click", function() {
    console.warn("bruh")
  });
  errorBtns[4].addEventListener("click", function() {
    const isTrue = false;
    console.assert(isTrue, "isTrue turned out to not be true, unforunately");
  });
  errorBtns[5].addEventListener("click", function() {
    console.clear();
  });
  errorBtns[6].addEventListener("click", function() { 
    console.dir(document)
  });
  errorBtns[7].addEventListener("click", function() { 
    console.dirxml(document);
  });
  errorBtns[8].addEventListener("click", function() { 
    console.group("My new group!");
    console.log("This is the first element in the group.");
  });
  errorBtns[9].addEventListener("click", function() { 
    console.groupEnd();
  });
  errorBtns[10].addEventListener("click", function() { 
    stores = [
      {
        name: "Target",
        cost: "3",
        favor: "3"
      },
      {
        name: "Walmart",
        cost: "2",
        favor: "2"
      },
      {
        name: "Macy's",
        cost: "4", 
        favor: "3",
        randomPropertyTest: true
      }
    ]
    console.table(stores);
  });
  errorBtns[11].addEventListener("click", function() { 
    console.time("Timer");
  });
  errorBtns[12].addEventListener("click", function() { 
    console.timeEnd("Timer");
  });
  errorBtns[13].addEventListener("click", function() { 
    function deep() {
      function deeper() {
        function deepest() {
          console.trace();
        }
        deepest();
      }
      deeper();
    }
    deep();
  });
  errorBtns[14].addEventListener("click", function() { 

  });
})