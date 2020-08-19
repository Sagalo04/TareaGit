$("#boton").click(function () {
  NumeroAleatorio();
});

//let x = []; 
function Inicializar() {

  let letra

  let arrayB = []
  let arrayI = []
  let arrayN = []
  let arrayG = []
  let arrayO = []

  for (let ar = 0; ar < 15; ar++) {
    arrayB[ar] = ar + 1;
    arrayI[ar] = ar + 16;
    arrayN[ar] = ar + 31;
    arrayG[ar] = ar + 46;
    arrayO[ar] = ar + 61;

  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i == 0) {
        num = Math.floor(Math.random() * (arrayB.length));
        $('#B' + (j + 1)).text(arrayB[num]);
        arrayB.splice(num, 1)
      }
      if (i == 1) {
        num = Math.floor(Math.random() * (arrayI.length));
        $('#I' + (j + 1)).text(arrayI[num]);
        arrayI.splice(num, 1)
      }
      if (i == 2) {
        num = Math.floor(Math.random() * (arrayN.length));
        $('#N' + (j + 1)).text(arrayN[num]);
        arrayN.splice(num, 1)
      }
      if (i == 3) {
        num = Math.floor(Math.random() * (arrayG.length));
        $('#G' + (j + 1)).text(arrayG[num]);
        arrayG.splice(num, 1)
      }
      if (i == 4) {
        num = Math.floor(Math.random() * (arrayO.length));
        $('#O' + (j + 1)).text(arrayO[num]);
        arrayO.splice(num, 1)
        console.log($('#O' + (j + 1)).text())
      }
    }
  }
}

function NumeroAleatorio() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
  let random, j;
  for (i = 0; i < array.length; i++) {
    random = Math.floor(Math.random() * (75 - 1 + 1) + 1);
    j = array[i];
    array[i] = array[random];
    array[random] = j;
  }

  asd(array, 0);
}


// for(i=1; i<=75; i++){
//     let ids = document.getElementById(i); 
//     x.push(ids); 
// }
// console.log(x);

// let y = $(x[1]).attr('id');
// console.log(y);

function asd(array, index) {

  for (let a = 0; a < 5; a++) {
    if ($('#B' + (a + 1)).text() == array[index]+"") {
      $('#B' + (a + 1)).removeClass("btn-secondary")
      $('#B' + (a + 1)).addClass("btn-primary");
    }
    if ($('#I' + (a + 1)).text() == array[index]+"") {
      $('#I' + (a + 1)).removeClass("btn-secondary")
      $('#I' + (a + 1)).addClass("btn-danger");
    }
    if ($('#N' + (a + 1)).text() == array[index]+"") {
      $('#N' + (a + 1)).removeClass("btn-secondary")
      $('#N' + (a + 1)).addClass("btn-warning");
    }
    if ($('#G' + (a + 1)).text() == array[index]+"") {
      $('#G' + (a + 1)).removeClass("btn-secondary")
      $('#G' + (a + 1)).addClass("btn-info");
    }
    if ($('#O' + (a + 1)).text() == array[index]+"") {
      $('#O' + (a + 1)).removeClass("btn-secondary")
      $('#O' + (a + 1)).addClass("btn-success");
    }

  }

  $('#numeros').text(array[index]);

  if ((array[index]) <= 15) {
    $('#linicial').text("B");
    $("#" + array[index]).removeClass("btn-outline-primary");
    $("#" + array[index]).addClass("btn-primary");
  } else if ((array[index]) > 15 && (array[index]) <= 30) {
    $('#linicial').text("I");
    $("#" + array[index]).removeClass("btn-outline-danger");
    $("#" + array[index]).addClass("btn-danger");
  } else if ((array[index]) > 30 && (array[index]) <= 45) {
    $('#linicial').text("N");
    $("#" + array[index]).removeClass("btn-outline-warning");
    $("#" + array[index]).addClass("btn-warning");
  } else if ((array[index]) > 45 && (array[index]) <= 60) {
    $('#linicial').text("G");
    $("#" + array[index]).removeClass("btn-outline-info");
    $("#" + array[index]).addClass("btn-info");
  } else if ((array[index]) > 60 && (array[index]) <= 75) {
    $('#linicial').text("O");
    $("#" + array[index]).removeClass("btn-outline-success");
    $("#" + array[index]).addClass("btn-success");
  }

  // $("#" + array[index]).removeClass("btn-outline-primary");
  // $("#" + array[index]).addClass("btn-primary");
  // if(array[index] == $(x[index]).attr('id')){

  //   $("#numeroAleatorio").css({
  //     'background': 'violet'
  //   })
  // }


  if (index != 75) {
    index++;
  } else {
    index = 0;
  }

  setTimeout(function () {
    asd(array, index);
  }, 500);
}






// var element = new Array(74);
//     var ot;
//     for (let index = 0; index <= 75; index++) {
//       element[index] = index + 1
//     }

//     function myTimer() {

//       ot = element[Math.floor(Math.random() * element.length)];
//       var i = element.indexOf(ot);

//       if (i !== -1) {
//         element.splice(i, 1);
//       }

//       return ot;

//     }

//     function myFunction() {

//       myTimer()

//          $('#numeros').text(ot); 
//          console.log(ot);

//       setInterval(function(){
//         myFunction()
//       },7000);


//       //document.getElementById("numeros").innerHTML = ot;
//       //document.getElementById("demo2").innerHTML = element;

//     }
