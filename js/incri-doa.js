// incri-doa.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('inscri-doa');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var endereco = document.getElementById('endereco').value;
      var alimento = document.getElementById('alimento').value;
  
      // Aqui você pode realizar qualquer ação desejada com os valores do formulário
      // Por exemplo, enviar os dados para um servidor ou realizar validações adicionais
  
      // Exemplo de exibição dos valores do formulário no console
      console.log('Nome: ' + nome);
      console.log('E-mail: ' + email);
      console.log('Endereço: ' + endereco);
      console.log('Alimento: ' + alimento);
  
      // Limpe o formulário após o envio
      form.reset();
    });
  });
  