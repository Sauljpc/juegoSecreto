    let maximoPosible = 12;
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    let usuarioNumero = 0;
    let intentos = 1;
    let maximosIntentos = 3;
    while (numeroSecreto != usuarioNumero) {

        usuarioNumero = parseInt(prompt (`Me indicas un numero entre el 1 y ${maximoPosible}, por favor:`));
        console.log(usuarioNumero);

            if (numeroSecreto == usuarioNumero) {
                alert (`Acertaste, el numero es: ${numeroSecreto}. Lo hiciste en: ${intentos}  ${intentos ? 'intento' : 'intentos'}` );
            } if (usuarioNumero > numeroSecreto ) {
                    alert ('Cerca, es un numero menor')
            } else {
                alert ('Es un numero mayor')
            }
            intentos++;
            

            if (intentos > 3) {
                alert (`Fallaste, llegaste al numero maximo de ${maximosIntentos} intentos, El numero era ${numeroSecreto}`);
                break;
            }
    }

        