function caracteresComuns(s1, s2) {
  // Função auxiliar para converter uma string em um conjunto de caracteres únicos
  function criarConjuntoDeCaracteres(str) {
      return new Set(str.toLowerCase());
  }
  
  // Crie conjuntos de caracteres para ambas as strings
  const conjunto1 = criarConjuntoDeCaracteres(s1);
  const conjunto2 = criarConjuntoDeCaracteres(s2);
  
  // Verifique se todos os caracteres de conjunto1 estão em conjunto2 e vice-versa
  const todosEmConjunto2 = [...conjunto1].every(char => conjunto2.has(char));
  const todosEmConjunto1 = [...conjunto2].every(char => conjunto1.has(char));
  
  return todosEmConjunto1 && todosEmConjunto2;
}

// Testes
console.log(caracteresComuns("Hello", "oellH"));  // true
console.log(caracteresComuns("Hello", "world"));  // false
console.log(caracteresComuns("Python", "typhon"));  // true
console.log(caracteresComuns("abc", "abcd"));      // true
console.log(caracteresComuns("abc", "ab"));        // false
