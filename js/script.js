const listaInvitati = ["andrea@gmail.com", "francesco@gmail.com", "pippo@gmail.com"];

const element = document.getElementById("btn-mail");
element.addEventListener('click', function(){
        let email = document.getElementById("email").value;
        console.log(email);
        let invito = false;
        for (let i = 0; i < listaInvitati.length; i++) {
            let inviti = listaInvitati[i];
            console.log("nome lista ciclto " + inviti)
            if(email == inviti){
                invito = true;
            }

            if(invito == true){
                document.getElementById("messaggio-invito").innerHTML = "ottimo sei invitato";
            }
            else(
                document.getElementById("messaggio-invito").innerHTML = "mi spiace non sei invitato"
            )
        }
    }
)

const prova = document.getElementById("number-btn");
prova.addEventListener('click', function(){
        let number = document.getElementById("number").value;
        console.log(number);
        let numberGenerate = Math.floor(Math.random() * 6) + 1;
        console.log(numberGenerate);
        let indovinato = false;
        if(number == numberGenerate){
            indovinato = true
        }

        if(indovinato == true){
            document.getElementById("messaggio-vittoria").innerHTML = "ottimo hai indovinato";
        }
        else{
            document.getElementById("messaggio-vittoria").innerHTML = "mi spiace non hai indovinato";
        }
    }
)