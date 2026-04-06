/*
2. Faça um Programa TypeScript que transforme o array, concatenando as strings com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array, passando uma função arrow como parâmetro.
2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]
*/
console.log(`Atividade 2: Transformar um array através da concatenação das strings com 1 (um) espaço (" ") utilizando o método join()\n\n`);
export const strings = ['Arrays', 'com', 'TypeScript'];

export const concatenando = (lista: Array<string>) => lista.join(' ');
export const formatado = concatenando(strings);
console.log(`Lista original: ${strings}\n`);
console.log(`Lista concatenada: ${formatado}`);