//функция, которая проверяет является ли число простым

function SimplyPrime(num) {
    if(num < 2) return false;
	
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
  }
  //цикл который проверяет каждое число
  for(var i = 0; i < 1000; i++){
    if(SimplyPrime(i)) console.log(i);
}