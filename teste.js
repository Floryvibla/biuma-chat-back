// const teste = () => {
//     return eval(`
//     const fs = require('fs');

//     const pasta = './pasta1';
//     const arquivo = pasta+'/arquivo1.js';
//     const conteudo = 'console.log("Hello world")';

//     // Criar uma pasta
//     fs.mkdir(pasta, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Erro ao criar a pasta:', err);
//             return;
//         }

//         console.log('Pasta criada com sucesso.');

//         // Criar um arquivo e escrever conteúdo nele
//         fs.writeFile(arquivo, conteudo, (err) => {
//             if (err) {
//                 console.error('Erro ao criar o arquivo:', err);
//                 return;
//             }

//             console.log('Arquivo criado e conteúdo escrito com sucesso.');
//         });
//     });
    
//     `)
//   }
  
//   teste()

const { exec } = require('child_process');

function abrirVSCode() {
  // Executa o comando para abrir o VSCode
  exec(`code -n`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao abrir o VSCode: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Erro ao abrir o VSCode: ${stderr}`);
      return;
    }

    console.log('VSCode aberto com sucesso.');
  });
}

// Chama a função para abrir o VSCode
abrirVSCode();
