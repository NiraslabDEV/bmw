// Funções para controle do modal
function openWhatsAppForm() {
  document.getElementById("whatsappModal").style.display = "block";
}

function closeWhatsAppForm() {
  document.getElementById("whatsappModal").style.display = "none";
}

// Fechar modal quando clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("whatsappModal");
  if (event.target == modal) {
    closeWhatsAppForm();
  }
};

// Fechar modal quando clicar no X
document.querySelector(".close").onclick = function () {
  closeWhatsAppForm();
};

// Manipular envio do formulário
document.getElementById("whatsappForm").onsubmit = function (e) {
  e.preventDefault();

  // Coletar dados do formulário
  const name = document.getElementById("name").value;
  const trade = document.querySelector('input[name="trade"]:checked').value;
  const delivery = document.querySelector(
    'input[name="delivery"]:checked'
  ).value;
  const color = document.getElementById("color").value;

  // Formatar mensagem para WhatsApp
  const message = `Olá, gostaria de mais informações sobre o BMW X3 M50 xDrive!
    
*Dados do cliente:*
Nome: ${name}
Carro na troca: ${trade}
Confirma interesse em pronta entrega: ${delivery}
Preferência de cor: ${color}

*Veículo de interesse:*
Modelo: BMW X3 M50 xDrive
Valor: R$ 624.950,00
Status: PRONTA ENTREGA 🚗

Aguardo contato para prosseguir com a negociação.`;

  // Número do vendedor
  const phoneNumber = "11941431850";

  // Criar link do WhatsApp com a mensagem
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Abrir WhatsApp em nova aba
  window.open(whatsappLink, "_blank");

  // Fechar o modal
  closeWhatsAppForm();
};
