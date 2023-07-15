// INTRODUÇÃO

console.clear();
var x = "hello world";
console.log(x)

/* var book = {
    topic: "Javascript",
    fat: true
}
*/
// console.log("Tópico: " + book.topic + "\n Fat: " + book["fat"]);

var primes = [2, 3, 5, 7];
console.log(primes.length - 1)
console.log(primes[0] + primes[2])

// TIPOS DE VALORES
var numero = 1;
var numeroInteiro = 0.02;
var string = "hello world";
var stringAspasSimples = 'JavaScript';
var boolean = true; // ou false
var vazio = null;
var indefinido = undefined;

// OBJETOS
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores
/* Objetos são colocados entre chaves. A propriedade "topic" tem o valor JavaScript e a propriedade fat tem o valor true, a chave marca o fim do objeto */
var book = {
    topic: "JavaScript",
    fat: true
};

// Acesse as propriedades de um objeto com um ponto (.) ou []: 
console.log("Acessando propriedades: " + "\n" +
    book.topic + "\n" +
    book["fat"]);

// Criando novas propriedades
book.author = "Flanagan"; // nova propriedade "author"
book.contents = {} // {} é um objeto vazio sem qualquer propriedade.
console.log(book);

// ARRAYS
// JavaScript também aceita arrays (listas indexadas numericamente) de valores
var primos = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ]
console.log(primos[0]); // retorna o primeiro elemento [indice 0] do array
console.log(primos.length) // retorna a quantidade de elementos

var ultimo = primos[primos.length - 1]; /* trabalha o cálculo da posição do elemento, neste caso, -1 e não o valor */
console.log(ultimo);

/*  Explicando detalhadamente
por exemplo,

primos[0] seria o primeiro elemento.
primos[1] seria o segundo elemento.
primos[2] seria o terceiro elemento.
primos[3] seria o quarto elemento, que é o último elemento.

O seu length seria 4, logo, o último elemento seria length-1, que neste caso é 3(4-1)
*/

primos[4] = 11; // adicionando por  atribuição
primos[5] = 13; // adicionando por atribuição
console.log("Com os novos valores 11 e 13 " + primos);

var empty = []; // array vazio
console.log(empty.length);

// Arrays podem conter outros arrays e objetos

var points = [   // Array com 2 elementos; cada elemento é um objeto
    { x: 0, y: 0 },
    { x: 1, y: 1 }
];

var data = {
    trial1: [[1, 2], [3, 4]],  // Um objeto com duas propriedades, o valor de cada propriedade é um array e os elementos dos arrays são arrays.
    trial2: [[2, 3], [4, 5]]
};

// Operadores aritméticos
var a, b;
a = 10;
b = 2;

console.log("Soma: " + parseInt(a + b));
console.log("Subtração: " + parseInt(a - b));
console.log("Multiplicação: " + parseInt(a * b));
console.log("Divisão: " + parseInt(a / b));
console.log("Concatenando: " + "10" + "2");

// Operadores de forma abreviada
var contador = 0; //define uma variável
contador++; //incrementa uma variável
contador--; //decrementa uma variável
contador += 2; //Soma 2; o mesmo que contador = contador + 2;
contador *= 3; //Multiplica por 3; o mesmo que contador = contador * 3

// Os operadores de igualdade e relacionais testam se dois valores são iguais
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var y = 3;
x = 2;
var on = 1; // São atribuições e não testes.
x == y; // igualdade
x != y; // diferença
x < y; // maior que
x <= y; // menor ou igual que
x > y; // maior que
x >= y; //maior ou igual que

// "two" == "three"; falso, as duas strings são diferentes
// "two" > "three"; verdadeiro, tw é alfabeticamente maior do que th

// operadores lógicos
console.log((2 == 2) && (5 > 2)) //Operador E, ambos tem que serem verdadeiros

console.log((3 > 2) || (2 ^ 3 > 10)) //Operador OU, uma das duas condições precisam serem verdadeiras

var comparando = !(x > 2 || y > 5) // false
console.log(comparando) // inverte o valor, se era falso, se tornou verdadeiro

console.log(!(x > 2 || y > 5)); // alternativa de negação

// Para calcular se uma palavra é alfabeticamente maior é necessário utilizar a tabela ASCII

console.log("A" > "C") // false

// Primeira vista de funções

function plus1(x) {  // Define uma função chamada plus1, com o parâmetro x
    return x + 1;     // retorna um valor uma unidade maior do que foi passado                    //
}                   // As funções são incluídas entre chaves

console.log(plus1(y)); // => 4: y é 3, portanto, essa chamada retorna 3+1

var square = function (x) { // As funções são valores e podem ser atribuídos a variáveis
    return x * x; // Calcula o valor da função
}; // Um ponto e vírgula marca o fim da atribuição

console.log(square(plus1(y)));  // plus1(y)= 4 , logo square(quadrado) de 4 é 16.

// Quando combinamos funções com objetos, obtemos métodos

// Quando funções recebem as propriedades de um objeto, as 
// chamamos de "métodos". Todos os objetos de javascript têm métodos:

var a = []; // Cria um array vazio
a.push(1, 2, 3) // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos
console.log(a); // Exibe o array atualizado

// Também podemos definir nossos próprios métodos. A palavra chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.

points.dist = function () { // Defome um método para calcular a distância entre pontos
    var p1 = this[0]; // Primeiro elemento do array que chamamos
    var p2 = this[1]; // Segundo elemento do objeto "this"
    var a = p2.x - p1.x; // Diferença em coordenadas X
    var b = p2.y - p2.y; // Diferença em coordenadas y
    return Math.sqrt(a * a + b * b); // Teorema de Pitágoras; Math.sqrt() calcula a raiz quadrada
};

console.log(points.dist());


// As instruções JavaScript incluem condicionais e laços que usam a sintaxe das linguagens C, C++, Java, entre outras

function valorAbsoluto(x) { // Uma função para calcular o valor absoluto
    if (x >= 0) { // A instrução If... 
        return x; // Executa o código, se a comparação for verdadeira
    } // Fim da cláusula If

    else { // A cláusula opcional else executa seu código se 
        return -x; // a comparação for falsa
    } // Chaves são opcionais quando há 1 instrução por cláusula.
} // Observe as instruções return aninhadas dentro do if/else

console.log(valorAbsoluto(-5))

function fatorial(n) { // Uma função para calcular fatoriais
    var produto = 1; // Começa com o produto de 1
    while(n > 1) { // Repete as instruções que estão em {}, enquanto
                    // expressão em () for verdadeira
        produto *= n; // Atalho para produto = produto * n;
        n--; // Atalho para n = n - 1
    } // Fim do laço
    return produto; // retorna o produto
}

console.log(fatorial(3)); // 3 = 3.2.1 = 6