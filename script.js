
const soma = document.getElementById('soma');
const subtrai = document.getElementById('subtrai');
const zera = document.getElementById('zera');
const resultado = document.getElementById('resultado');

let contador = 0;

/*----------------------------------------------------*/

soma.addEventListener('click', () => {
    contador++;
    resultado.value = contador;
});

/*----------------------------------------------------*/

subtrai.addEventListener('click', () => {
    contador--;
    resultado.value = contador;
});

/*----------------------------------------------------*/

zera.addEventListener('click', () => {
    contador = 0;
    resultado.value = contador;
});

/*----------------------------------------------------*/

// contador acima foi criado

/*----------------------------------------------------*/

const campoA = document.getElementById("a"); // 1 texto em forma de resposta
const campoB = document.getElementById("b"); // 2 texto em forma de resposta
const valor = document.getElementById("visor"); // total da calculadora

// [campoA].[campoB] = [valor]

/*----------------------------------------------------*/

function pegarValores() {
    // pega os textos atuais de A e B
    // no momento em que a função é chamada.

    // Number() transforma o texto recebido em número
    // .value acessa o valor dentro do input

    const a = Number(campoA.value);
    const b = Number(campoB.value);

    return [a, b];
}

/*----------------------------------------------------*/

// TECLADO

const teclado = document.querySelectorAll(".num");

let campoAtual = campoA;

teclado.forEach(button => {
    button.addEventListener("click", (event) => {
        const numero = event.target.textContent;

        campoAtual.value += numero;
    });
});

/*----------------------------------------------------*/

// FUNÇÃO PARA MUDAR O CAMPO ATUAL

function mudarCampo(campo) {
    campoAtual = campo;
}

/*----------------------------------------------------*/

// um CLIQUE NO CAMPO A

campoA.addEventListener("click", () => {
    mudarCampo(campoA);
});

/*----------------------------------------------------*/

// um CLIQUE NO CAMPO B

campoB.addEventListener("click", () => {
    mudarCampo(campoB);
});

/*----------------------------------------------------*/

// é a continuação de pegarValores

function autoOperador(a, b, operacao) {  // nome da função

    if (operacao === "soma") {
        const resultado = a + b;  // ele recebe os numeros de pegarValores
        return resultado;
    }

    if (operacao === "sub") {
        const resultado = a - b;  // oq autoOperador faz
        return resultado;
    }

    if (operacao === "mul") {
        const resultado = a * b;
        return resultado;
    }

    if (operacao === "div") {
        const resultado = a / b;
        return resultado;
    }
}  // agora autoOperador faz isso

/*----------------------------------------------------*/

function calcular(operacao) {
    const [a, b] = pegarValores();
    const resultado = autoOperador(a, b, operacao);  // antes coloquei addEventListener
    valor.value = resultado;           // sendo que apenas o botao deve ter

}

// SOMANDO

const somando = document.getElementById("som");

somando.addEventListener('click', () => {

    const [a, b] = pegarValores();

    const resultado = autoOperador(a, b, "soma");

    valor.value = resultado;
});

/*----------------------------------------------------*/

// SUBTRAINDO

const dimimui = document.getElementById("dim");

dimimui.addEventListener('click', () => {

    const [a, b] = pegarValores();

    const resultado = autoOperador(a, b, "sub");

    valor.value = resultado;
});

/*----------------------------------------------------*/

// MULTIPLICANDO

const multiplica = document.getElementById("mul");

multiplica.addEventListener('click', () => {

    const [a, b] = pegarValores();

    const resultado = autoOperador(a, b, "mul");

    valor.value = resultado;
});

/*----------------------------------------------------*/

// DIVIDINDO

const divisao = document.getElementById("div");

divisao.addEventListener('click', () => {

    const [a, b] = pegarValores();

    const resultado = autoOperador(a, b, "div");

    valor.value = resultado;
});

/*----------------------------------------------------*/

// ZERANDO resultado

const zerar = document.getElementById("zer");

zerar.addEventListener('click', () => {

    valor.value = 0;
});

// cuidar para nao fazer processos, botao de zerar é reto com o resultado


/*----------------------------------------------------*/


/*oq precisamos entender:  

?.adcEvento ("x",()=>{
    function1(oq fazer);
    com oq temos;
    function2(oq fazer);
    agora apresentamos
});

*/
/*----------------------------------------------------*/
/*

botao.addEventListener("click", () => {

    const [a, b] = pegarValores();

    const resultado = autoOperador(a, b, "soma");

    valor.value = resultado;

});
*/