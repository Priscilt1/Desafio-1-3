const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];
// escopo = contexto
// todo array [] tem funcoes e propriedade nativas, eu posso usar a propriedade length para saber quantos elementos
// eu tenho no meu array      [].length
// o dado dinamico no console.log será o usuario e tecnologia, logo, a posição do array sera a letra A, pois ela esta indentificada no let
// toda vez que usar o array deve usar o for

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js
  
//PRIMEIRO JEITO DE RESOLVER   
// ler-se:    para (usuario de usuarios)    - o usuario é a posicao no array 
for (let usuario of usuarios) {
  //imprima a mensagem
  console.log (`${usuario.nome} trabalha com ${usuario.tecnologias.join (', ')}`)
}


// // SEGUNDO JEITO DE RESOLVER 
// for ( let a = 0; a < usuarios.length; a++) {  
//   console.log(`${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias.join (', ')}`)
// }





function checaSeUsuarioUsaCSS (usuario) {
    for (let tecnologia of usuario.tecnologias) {
        const encontreiTecnologiaCSS = tecnologia === `CSS`
        if(encontreiTecnologiaCSS) return true;
    
    }
 return false;
}
  


for (let usuario of usuarios) {
    const esteUsuarioPossuiCSS = checaSeUsuarioUsaCSS (usuario)
}


  
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}



