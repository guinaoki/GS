// incri-doa.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('inscri-doa');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var endereco = document.getElementById('endereco').value;
      var alimento = document.getElementById('alimento').value;
      var doacao1 = document.getElementById('doacao1').value;
      var doacao2 = document.getElementById('doacao2').value;
      var disponibilidade = document.getElementById('disponibilidade').value;
      var tipo = document.getElementById('tipo').value;
      var horario = document.getElementById('horario').value;
      var informacoes = document.getElementById('informacoes').value;
  
      // Aqui você pode realizar qualquer ação desejada com os valores do formulário
      // Por exemplo, enviar os dados para um servidor ou realizar validações adicionais
  
      // Exemplo de exibição dos valores do formulário no console
      console.log('Nome: ' + nome);
      console.log('E-mail: ' + email);
      console.log('Endereço: ' + endereco);
      console.log('Alimento: ' + alimento);
      console.log('Por que você decidiu fazer essa doação? ' + doacao1);
      console.log('Você já fez uma doação de alimentos alguma vez? ' + doacao2);
      console.log('Teria disponibilidade para ser voluntariado em atividades relacionadas à doação de alimentos? ' + disponibilidade);
      console.log('Qual tipo de alimento você está doando? ' + tipo);
      console.log('Qual o melhor horário para retirada ou entrega de doações de alimentos? ' + horario);
      console.log('Gostaria de receber informações sobre o destino das doações de alimentos? ' + informacoes);
  
      // Limpe o formulário após o envio
      form.reset();
    });
  });
