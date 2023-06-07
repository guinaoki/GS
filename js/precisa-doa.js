document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('form-precisa');
  
    // Adicione um evento de envio ao formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var endereco = document.getElementById('endereco').value;
      var necessidade = document.getElementById('necessidade').value;
  
      console.log('Nome:', nome);
      console.log('E-mail:', email);
      console.log('Endereço:', endereco);
      console.log('Descrição da Necessidade:', necessidade);
  
      form.reset();
    });
  });
  