//Cotação de moedas do dia.
const USD = 5.85;
const EUR = 6.42;
const GBP = 7.64

//Obtendo os elementos do forms.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para recber somente números.
amount.addEventListener("input", () =>{
const hasCharactersRegex = /\D+/g
 amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit do forms
form.onsubmit = (event) =>{
event.preventDefault()

switch(currency.value){
  case "USD":
    convertCurrency(amount.value, USD, "US$")
    break
  case "EUR":
    convertCurrency(amount.value, EUR, "€")
    break
  case "GBP":
    convertCurrency(amount.value, GBP, "£")
    break
}
}


function convertCurrency(amount, price, symbol){
    try {
      //Exibindo a cotação da moeda selecionada.
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `
      //Calcula o total
      let total = String(amount * price).replace(".", ",")
      
      //Exibe o resultado total 
      result.textContent = `${total} Reais`
      //Aplica a classe que exibe o footer para mostrar o resultado.
      footer.classList.add("show-result")
    } catch (error) {
      //Remove a classe do footer, removendo ele da tela.
      footer.classList.remove("show-result")

      console.log(error)
      alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}
//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
  //Converte para número para utilizar o toLocaleString para formatar no padrão do BRL.
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
}