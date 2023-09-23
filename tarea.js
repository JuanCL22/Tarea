function permutacionLexicografica(numeros) {
    const n = numeros.length;
    const resultado = [];

    function copiarArreglo(arr) {
        const copia = [...arr];
        resultado.push(copia);
    }

    copiarArreglo(numeros);

    while (true) {
        let i = n - 2;
        while (i >= 0 && numeros[i] >= numeros[i + 1]) {
            i--;
        }

        if (i === -1) {
            break;
        }

        let j = n - 1;
        while (numeros[j] <= numeros[i]) {
            j--;
        }

        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];

        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            [numeros[left], numeros[right]] = [numeros[right], numeros[left]];
            left++;
            right--;
        }

        copiarArreglo(numeros);
    }

    return resultado;
}

const numeros = [1, 2, 3, 4];
const permutaciones = permutacionLexicografica(numeros);

for (const permutacion of permutaciones) {
    console.log(permutacion.join(' '));
}
