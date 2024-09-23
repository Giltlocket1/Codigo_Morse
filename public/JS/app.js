$(document).ready(function() {
    // Diccionario para código morse
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', '0': '-----', ' ': '/', '.': '.-.-.-', ',': '--..--'
    };

    const morseToText = Object.keys(morseCode).reduce((obj, key) => {
        obj[morseCode[key]] = key;
        return obj;
    }, {});

    // Validación de texto vacío
    function validarEntrada(texto) {
        return texto.trim().length > 0;
    }

    // Función para convertir texto a morse
    function textoAMorse(texto) {
        return texto.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
    }

    // Función para convertir morse a texto
    function morseATexto(morse) {
        return morse.split(' ').map(char => morseToText[char] || '').join('');
    }

    // Evento: convertir texto a morse
    $('#btnTextoAMorse').on('click', function() {
        const texto = $('#inputTexto').val();
        if (validarEntrada(texto)) {
            const morse = textoAMorse(texto);
            $('#resultado').removeClass('d-none').addClass('alert-success').text(`Morse: ${morse}`);
            $('#alertaError').addClass('d-none');
        } else {
            $('#alertaError').removeClass('d-none');
            $('#resultado').addClass('d-none');
        }
    });

    // Evento: convertir morse a texto
    $('#btnMorseATexto').on('click', function() {
        const morse = $('#inputTexto').val();
        if (validarEntrada(morse)) {
            const texto = morseATexto(morse);
            $('#resultado').removeClass('d-none').addClass('alert-success').text(`Texto: ${texto}`);
            $('#alertaError').addClass('d-none');
        } else {
            $('#alertaError').removeClass('d-none');
            $('#resultado').addClass('d-none');
        }
    });
});
