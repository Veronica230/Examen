document.getElementById("b").addEventListener("click", (e) => {
  let imageInput = document.getElementById("image-input");
  let image = document.getElementById("img");
  if (imageInput.value) image.src = imageInput.value;
});
// CARGA DE IMAGENES
function ver() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
      const imagen = document.getElementById("img");
    };
  }
}
let comando; 
const searchForm = document.querySelector("#voz");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("Your Browwser supports speech Recognition");
  searchForm.insertAdjacentHTML(
    "beforeend",
    '<button class="btn amy-crisp-gradient animation" type="button" ><i class="fas fa-microphone fa-2x" style="color: #FFFF"></i></button>'
  );
  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.querySelector("i");
  const recognition = new SpeechRecognition();
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  recognition.continuous = true;
  recognition.lang = "es-MX";
  recognition.start();
  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if (micIcon.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition);
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    console.log("Speech Recognition Active");
  }

  recognition.addEventListener("end", endSpeechRecognition);
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");

    console.log("Speech Recognition Disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition);
  function resultOfSpeechRecognition() {
    const currentResultIndex = event.resultIndex;
    const transcript = event.results[currentResultIndex][0].transcript;

    if (transcript.toLowerCase().trim() === "ayuda del sitio") {
      modal.style.display = "block";
    }
    if (transcript.toLowerCase().trim() === "cerrar") {
      salida();
    }

    if (transcript.toLowerCase().trim() === "comando 1") {
      comando = just.animate({
        targets: ".ball",
        duration: 2000,
        props: {
           innerHTML: ['turn around'] 
         },
         web: {
           opacity: [0,1,0,1],
           rotateX: [50,1800]
         }
     });
      comando.play();
    }

    if (transcript.toLowerCase().trim() === "comando 2") {
      comando = just.animate({
        targets: ".ball",
        duration: 4000,
        props: {
           innerHTML: ['a bit'] 
         },
         web: {
           rotate: [50,1800],
           rotateX: [50,1800],
         }
     });
     comando.play();
    }

    if (transcript.toLowerCase().trim() === "comando 3") {
      comando = just.animate({
        targets: ".ball",
        duration: 9300,
        props: {
          innerHTML: [""],
        },
        web: {
          opacity: [0, 1],

          transform: [
            { offset: 0, value: "scale(1, 1)" },
            { offset: 0, value: "scale(5, 5)" },
            { offset: 0, value: "scale(4, 4)" },
            { offset: 0, value: "scale(5, 4)" },
            { offset: 0, value: "scale(3, 2)" },
            { offset: 0.65, value: "scale(.95, 1.05)" },
            { offset: 0.3, value: "scale(1.25, .75)" },
            { offset: 0, value: "scale(4, 4)" },
            { offset: 0.75, value: "scale(1.05, .95)" },
            { offset: 1, value: "scale(2, 2)" },
            { offset: 0, value: "scale(4, 4)" },
            { offset: 0.4, value: "scale(.75, 1.25)" },
            { offset: 0.5, value: "scale(1.15, .85)" },
          ],
        },
      });
      comando.play();
    }

    if (transcript.toLowerCase().trim() === "comando 4") {
      comando = just.animate({
        targets: ".ball",
        duration: 5000,
        props: {
           innerHTML: ['BOOM'] 
         },
         web: {
           rotateX: [50,1800],
           rotateY: [50,1800],
         }
     });
      comando.play();
    }
    if (transcript.toLowerCase().trim() === "comando 5") {
      const myAnimation = document
        .querySelector(".ball")
        .animate(
          [
            { transform: "translateY(0)" },
            { transform: "translateX(-150px)" },
            { transform: "translateY(0px)" },
            { transform: "translateX(150px)" },
            { transform: "translateX(150px)" },
          ],
          {
            duration: 7024,
            iterations: 6,
          }
        );
    }
    if (transcript.toLowerCase().trim() === "comando 6") {
      comando = just.animate({
        targets: ".ball",
        duration: 2000,
        props: {
          innerHTML: ["X", "Y", "movimiento"],
        },
        web: {
          transform: [
            "translateY(150px)",
            "translateX(100px)",
            "translateX(-150px)",
            "translateY(-200px)",
            "translateX(0px)",
            "translateY(0px)",
          ],
        },
      });
      comando.play();
    }

    //ANIMACIÓN MOVER
    if (transcript.toLowerCase().trim() === "comando 7") {
      comando = just.animate({
        targets: ".ball",
        duration: 4000,
        props: {
          innerHTML: [''] 
        },
        web: {
           transform: [
              { offset: 0, value: "scale(2, 2)" },
              { offset: 0.3, value: "scale(1.50, 8)" },
              { offset: 0.4, value: "scale(4, 1.25)" },
              { offset: 0.5, value: "scale(2, 3)" },
              { offset: 0.5, value: "scale(3, 5)" },
              { offset: 0.65, value: "scale(3, 2)" },
              { offset: 0.75, value: "scale(2.3, 1)" },
              { offset: 0.90, value: "scale(1, 2.3)" },
              { offset: 1, value: "scale(1, 1)" }
           ]
        }
     });
      comando.play();
    }

    if (transcript.toLowerCase().trim() === "comando 8") {
      comando = just.animate({
        targets: ".ball",
        duration: 7000,
        props: {
          innerHTML: ['movimiento'] 
        },
        web: {
           transform: [
              { offset: 0, value: "scale(.1, 1)" },
              { offset: 0.1, value: "scale(.2, .8)" },
              { offset: 0.2, value: "scale(.4, .6)" },
              { offset: 0.3, value: "scale(.6, .4)" },
              { offset: 0.4, value: "scale(.8, .2)" },
              { offset: 0.5, value: "scale(1, 1)" },
              { offset: 0.6, value: "scale(.8, .2)" },
              { offset: 0.7, value: "scale(.6, .4)" },
              { offset: 0.8, value: "scale(.4, .6)" },
              { offset: 0.9, value: "scale(.2, .8)" },
              { offset: 1,   value: "scale(1, 1)" },
              { offset: 0.2, value: "scale(.4, .6)" },
              { offset: 0.3, value: "scale(.6, .4)" },
              { offset: 0.4, value: "scale(.8, .2)" },
              { offset: 0.5, value: "scale(1, 1)" },
              { offset: 0.6, value: "scale(.8, .2)" },
              { offset: 0.7, value: "scale(.6, .4)" },
              { offset: 0.8, value: "scale(.4, .6)" },
              { offset: 0.9, value: "scale(.2, .8)" },
              { offset: 1,   value: "scale(1, 1)" }
           ]
        }
     });
      comando.play();
    }

    if (transcript.toLowerCase().trim() === "comando 10") {
      comando = just.animate({
        targets: ".ball",
        duration: 2000,
        props: {
          innerHTML: ["faded", "move"],
        },
        web: {
          transform: [
            "translateX(400px)",
            "translatey(200px)",
            "translateX(-400px)",
            "translateY(-400px)",
            "translateX(50px)",
            "translateY(50px)",
            "translateX(50px)",
            "translateX(150px)",
            "translateX(250px)",
          ],
          opacity: [0, 1, 0, 1, 0 ,1, 0, 0, 1],
        },
      });
      comando.play();
    }

    //ANIMACIÓN ACORTAR
    if (transcript.toLowerCase().trim() === "comando 9") {
      comando = just.animate({
        targets: ".ball",
        duration: 10000,
        props: {
           innerHTML: ['bounce'] 
         },
         web: {
           transform: [
              { offset: 0,   value: 'translateY(100px)' },
              { offset: 0.1, value: 'translateY(150px)' },
              { offset: 0.2, value: 'translateY(200px)' },
              { offset: 0.3, value: 'translateY(250px)'},
              { offset: 0.4, value: 'translateY(300px)'},
              { offset: 0.5, value: 'translateY(350px)'},
              { offset: 0.6, value: 'translateY(200px)'},
              { offset: 0.7, value: 'translateY(250px)'},
              { offset: 0.8, value: 'translateY(280px)'},
              { offset: 0.9, value: 'translateY(300px)'},
              { offset: 1,   value: 'translateY(0px)'}
           ]
         }
     });
     comando.play();
    }

    console.log(event);
  }
} else {
  console.log("Your Browser does not support speech Recognition");
}

var op = true;
window.alert = salida;
function salida() {
  var res;
  if (op) {
    res = confirm("¿Deseas salir del sitio?");
    if (res) {
      window.close();
    }
  } else {
    return false;
  }
}
