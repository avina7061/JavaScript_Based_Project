try {
  const buttons = document.getElementsByTagName('button');
  const inputholder = document.getElementsByTagName('input')[0];
  const calculator = document.querySelector(".container");
  let string = "";
  // calculator.addEventListener('click', function (e){
  //   if (e.target.tagName = "button") {
  //            console.log(e.target)
  //         }
  //  })// we also access like this

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {

      console.log(e.target);

      try {
        if (e.target.innerHTML != "=" && e.target.innerHTML != "C") {
          string += e.target.innerHTML;
          inputholder.value = string;
        }

        else if (e.target.innerHTML == "C") {
          inputholder.value = "0";
          string = "";
        }

        else {
          inputholder.value = eval(string);
        }
      }
      catch (e) {
        inputholder.value = "ERROR_404 ";
      }
    });
  }
}

catch (e) {
  console.log(e);
  
}
