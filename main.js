// CARGA DE IMAGENES
function ver(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}
  
      const searchForm = document.querySelector("#voz");
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("Your Browwser supports speech Recognition");
    searchForm.insertAdjacentHTML("beforeend", '<button class="btn amy-crisp-gradient animation" type="button" ><i class="fas fa-microphone fa-2x" style="color: #FFFF"></i></button>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");
    const recognition = new SpeechRecognition();
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    recognition.continuous = true;
    recognition.lang = "es-MX"; 
    recognition.start(); 
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){

        if(micIcon.classList.contains("fa-microphone")) {
            recognition.start();}
        else{
            recognition.stop();}}
    
    recognition.addEventListener("start", startSpeechRecognition); 
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        console.log("Speech Recognition Active");}

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        
        console.log("Speech Recognition Disconnected");}
 
    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition() {
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;

        if(transcript.toLowerCase().trim()==="ayuda del sitio"){
          modal.style.display = "block";
        }
        if(transcript.toLowerCase().trim()==="cerrar") { 
          salida();}  

        //ANIMACIÓN PARPADEO
        if (transcript.toLowerCase().trim() === "comando 1") { //parpadeo
          var comando = just.animate({
            targets: ".ball",
            duration: 5024, 
            web: {
                opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] 
            }});
        comando.play();}

      //ANIMACIÓN TEMBLAR
      if(transcript.toLowerCase().trim()==="comando 2"){ //temblar
        var comando = just.animate({
          targets: ".ball",
          duration: 5024,
          web: {
              transform: [
                { offset: 0, value: "scale(1, 1)" },
                { offset: 0.25, value: "scale(1.10, 1)" },
                { offset: 0.30, value: "scale(.1.05, 1.15)" },
                { offset: 0.35, value: "scale(1, .90)" },
                { offset: 0.40, value: "scale(.75, 1)" },
                { offset: 0.50, value: "scale(1.05, .95)" },
                { offset: 0.55, value: "scale(.80, .95)" },
                { offset: 0.60, value: "scale(1, 1.10)" },
                { offset: 0.65, value: "scale(1.05, 1.15)" },
                { offset: 0.70, value: "scale(1.15, 1.25)" },
                { offset: 0.80, value: "scale(1.05, .90)" },
                { offset: 0.90, value: "scale(.95, 1.10)" },
                { offset: 1, value: "scale(1, 1)" },
              ]}});
        comando.play();}

        //ANIMACIÓN CRECER
        if (transcript.toLowerCase().trim() === "comando 3") { //crecer
            var comando = just.animate({
                targets: ".ball",
                duration: 5024,
                web: {
                    transform: [
                        { offset: 0, value: "scale(1, 1)" },
                        { offset: 1, value: "scale(2, 2)" },
                    ]}});
            comando.play();}

        //ANIMACIÓN ALEJAR
        if (transcript.toLowerCase().trim() === "comando 4") { //alejarse
            var comando = just.animate({
                targets: ".ball",
                duration: 5024,
                web: {
                    transform: [
                        { offset: 0, value: "scale(2, 2)" },
                        { offset: 0.5, value: "scale(.50, .50)" }]}});
            comando.play();}

        //ANIMACIÓN SALTAR
        if (transcript.toLowerCase().trim() === "comando 5") { //saltar
          const myAnimation = document.querySelector(".ball").animate(
            [
              {transform: "translateY(0)"},
              {transform: "translateY(-150px)"},
              {transform: "translateY(0px)"}
            ],{
              duration: 5024,
              iterations: 6 });}

         //ANIMACIÓN ALARGAR
         if (transcript.toLowerCase().trim() === "comando 6") { //alargar
          var comando = just.animate({
            targets: ".ball",
            duration: 5024,
            web: {
                transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.5, value: "scale(1.2, .70)" },
                  { offset: 0.75, value: "scale(1.5, .50)" },
                  { offset: 1, value: "scale(1, 1)" },
                ]}});
          comando.play();}

      //ANIMACIÓN MOVER
      if (transcript.toLowerCase().trim() === "comando 7") { //mover
          var comando = just.animate({
              targets: '.ball',
              duration: 5024,
              web: {
                  transform: ['translateX(150px)', 'translateX(0)'] }});

          comando.play();}  

      //ANIMACIÓN BORRAR
        if (transcript.toLowerCase().trim() === "comando 8") { // borrar
          var comando = just.animate({
            targets: ".ball",
            duration: 5024, 
            web: {
               opacity: [1, 0],}});
         comando.play();}

      //PODER VER LA IMAGEN DE NUEVO
        if (transcript.toLowerCase().trim() === "regresa") { //regresar
           var comando = just.animate({
                 targets: ".ball",
                 duration: 5024,
                 web: {
                    opacity: [0, 1],}});
              comando.play();}

      //ANIMACIÓN MOV A LA DERECHA
        if (transcript.toLowerCase().trim() === "comando 10") { //derecha
                var comando = just.animate({
                      targets: ".ball",
                      duration: 5024,
                      web: {
                        marginLeft: [0,1024]}});
                   comando.play();}  
        
        //ANIMACIÓN ACORTAR           
        if (transcript.toLowerCase().trim() === "comando 9") { //cortar
                    var comando = just.animate({
                          targets: ".ball",
                          duration: 5024,
                          web: { 
                            borderTopLeftRadius: [1500]}});
                       comando.play();}           

        console.log(event); }}
        else {
    console.log("Your Browser does not support speech Recognition");}

    var op=true;
    window.alert=salida;
    function salida(){
      var res;
      if (op){
        res=confirm('¿Deseas salir del sitio?');
        if (res){
          window.close();}}
          else{
            return false;}
    }