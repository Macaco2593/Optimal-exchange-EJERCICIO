/*# Intercambio óptimo

Optimizaciones de procesos: Mejorar el proceso en tiempo de ejecución
Análisis de problemas: Debe ser capaz de comprender y buscar la mejor solución a los problemas
Matemáticas: Operaciones matemáticas
Algoritmos: Comprensión de algoritmos

#Descripción
El intercambio de moneda de un país aleatorio tiene 'k' número de denominaciones. Para cada denominación, hay una moneda.

Siempre que se realiza una transacción con el cajero, para pagar una cantidad 'X', usted le da la cantidad exacta o una cantidad mayor que 'X' (digamos 'Y') al cajero.

Luego, él le devuelve la cantidad adicional (Y-X). Ambos intentan minimizar la cantidad de monedas intercambiadas en el proceso. Por ejemplo, si X = 68 y tienes las denominaciones 1,2,5,10,20,50, entonces la transacción óptima podría ser que tú pagues al cajero 50+20 unidades (2 monedas) y luego el cajero te devuelva 2 unidades (1 moneda). Por lo tanto, la cantidad total de monedas intercambiadas en el proceso es 3 (50 + 20 - 2).

La eficiencia de un conjunto de denominaciones se calcula mediante la cantidad mínima de monedas intercambiadas requeridas para cada valor entero de moneda entre 1 y N (algún límite superior, supongamos) y tomando su promedio como A. Cuanto menor sea A, mejor será el conjunto de denominaciones.

Escribe un programa que, dada una serie de monedas, calcule la cantidad promedio y máxima de monedas necesarias para pagar cualquier monto en el rango [1,N]. Puedes suponer que ambas partes involucradas tienen cantidades suficientes de cualquier moneda a su disposición.

#Entrada
La primera línea contiene la cantidad de casos de prueba. Para cada caso de prueba, hay una sola línea que contiene N ( 1<=N<=100 ), Número de denominaciones K ( K<=10 ) y luego el valor de cada denominación, todos separados por un solo espacio.

#Salida
Para cada caso de prueba, la salida es una sola línea que contiene primero el promedio y luego el número máximo de monedas involucradas en el pago de una cantidad en el rango [1,N]. El promedio debe ser preciso hasta 2 decimales.

#Entrada de muestra
3
100 6 1 2 5 10 20 50
100 6 1 3 10 15 51 84
100 6 1 4 9 16 25 36

#Salida de muestra
2,96 5
2,56 3
2,85 5 */

function arreglarEntrada(entrada) {
    return entrada.split(" ").map(Number)
}

function arreglarDenominaciones(entrada) {
    return entrada.split(" ").map(Number).slice(2)
}

const entrada = "100 6 1 2 5 10 20 50"
let = arrayEntrada = arreglarEntrada(entrada)

//console.log(arrayEntrada)

const  validacion = (N,K) => {
    if(N <= 100 && N >= 1 && K >= 1 && K <= 10){
        return true;
    }else{
        return false;
    }
}

let N = arrayEntrada[0], K = arrayEntrada[1], denominaciones = arreglarDenominaciones(entrada)

function calcular(){

    let capital=0, m=0, monedas=0, maxMonedas=0, totalMonedas = 0;

    for(let i = 0; i<N; i++){
        monedas = 0;
        capital = i + 1
        m=0
        let excedente = 0;
        do {
            
           if (capital - denominaciones[denominaciones.length -1 - m] < 0){
            m++
            
           }else{
            monedas++
            capital-=denominaciones[denominaciones.length -1 - m];

            if(capital < 0){
                excedente+= Math.abs(capital);
                capital = 0;
            } else{
                m++;
            }

            if(monedas>maxMonedas){maxMonedas= monedas}
           }

        } while(capital > 0 && m < denominaciones.length)

        if(excedente > 0){
            let n = denominaciones.length -1;
            while(excedente > 0 && n>=0){
                if(excedente - denominaciones[n]>=0){
                    monedas++;
                    excedente -=denominaciones[n];
                } else{
                    n--;
                }
            }
        }
        
        totalMonedas +=monedas
    }

    let promedio = totalMonedas/N
    console.log("Promedio de monedas usadas: ", promedio)
    return maxMonedas;
}

console.log(denominaciones)
const resultado = calcular()
console.log(resultado)