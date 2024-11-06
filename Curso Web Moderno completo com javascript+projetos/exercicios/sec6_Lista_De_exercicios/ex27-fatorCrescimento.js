const calcularCrecimento = (altura1,taxaC1,altura2,taxaC2)=>{
  let pessoa1=0;
  let pessoa2=0;
  let tempo= 0;

  while (altura1 < altura2) {
    pessoa1 = altura1+taxaC1;
    pessoa2 = altura2+taxaC2;
    tempo++

    altura1 = altura1+taxaC1;
    altura2 = altura2+taxaC2;

    


    console.log(`altura pessoa1= ${altura1},altura pessoa2= ${altura2} em ${tempo}`)
  }

  
}

calcularCrecimento(1.8,0.2,2.0,0.1);
