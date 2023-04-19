document.getElementById("resultado").disabled = true;
document.getElementById("Copy").style.display='none';


        function Encriptar() {
            var entrada = document.getElementById("ingreso").value;
            var cifrar;
            cifrar = entrada.replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat")

            document.getElementById("resultado").innerHTML = cifrar;
            document.getElementById("Copy").style.display='block';
            document.getElementById("muneco").style.visibility='hidden'
            document.getElementById("text1").style.display='none';
            document.getElementById("text2").style.display='none';
        }

        function DesEncriptar() {
            var entra = document.getElementById("ingreso").value;
            var descifrar;

            if (entra.indexOf("ai", "enter", "imes", "ober", "ufat")) {
                descifrar = entra.replaceAll("enter", "e")
                    .replaceAll("imes", "i")
                    .replaceAll("ai", "a")
                    .replaceAll("ober", "o")
                    .replaceAll("ufat", "u")
            }

            document.getElementById("resultado").innerHTML = descifrar;
            console.log(descifrar)
        }
        function Copiar() {
            var content = document.getElementById('resultado');
            document.getElementById("resultado").disabled = false;
            content.select();
            document.execCommand('copy');
            document.getElementById("resultado").disabled = true;

        }
