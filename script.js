// 1 -------------------------------------------------------------------------------------------------------------------
// apsirasome funkcija kuri prima skaiciu
function numeriaiSmulkintai(skaicius) {
    // patikriname ar skaicius yra teigiamas ir ar ivestas kintamasis yra skaicius
    if (typeof skaicius !== 'number' || skaicius <= 0) {
      console.error("Pateiktas skaicius nera numeris arba yra neigiamas.");
      return [];
    }
  
    const result = [];
    // tikriname visus saicius nuo vieno iki musu pateikto skaiciaus
    for (let i = 1; i <= skaicius; i++) {
      // jai skaicius dalinasi is 3 idedame ji i masyva
      if (i % 3 === 0) {
        result.push(i);
      }
    }
    // graziname rezultata
    return result;
  }
  
  const number = 10;
  console.log(`Skaiciai kurie dalinasi is 3 nuo 1 iki ${number}`, numeriaiSmulkintai(number));
  
  
  
  
  
  // 2 -------------------------------------------------------------------------------------------------------------------
  // apsirasome funkcija kuri prima array
  function lyginiaiNumeriai(arrayOfNumbers){
    // panaudojame filter funkscija randame visu lyginius skaicius masyve
    return arrayOfNumbers.filter(number => number % 2 === 0);
  }
  
  
  const skaiciai = [1, 8, 9, 10, 25, 12, 8, 69, 88, 102, 55, 64]
  console.log(`siame masyve ${skaiciai} lyginai skaiciai yra sie`, lyginiaiNumeriai(skaiciai));
  
  
  
  // 3 -------------------------------------------------------------------------------------------------------------------
  // apsirasome funkcija kuri prima objekta
  function koksGyvunoAmzius(objektas) {
  
    // susitrumpiname kintamaji patogumo deliai
    const gimimoMetai = objektas.gimimoMetai
    // pasiimame dabartinius metus new Date().getFullYear() metodu
    const dabartiniaiMetai = new Date().getFullYear();
    // is dabartiniu metu atimame gimimo metus graziname rezultata
    return dabartiniaiMetai - gimimoMetai;
  }
  
  const gyvunas = {
    "rusis": "panda",
    "vardas": "viktorija",
    "gimimoMetai": 1995
  }
  console.log('Rusis:',gyvunas.rusis);
  console.log('Vardas:', gyvunas.vardas);
  console.log('amzius:', koksGyvunoAmzius(gyvunas));