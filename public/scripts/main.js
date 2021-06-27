import Modal from './modal.js'     //Importando a modal.js pra este arquivo

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClicl)
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClicl(event, false))
})

//Criando função para mudar o título e texto da janela da modal
function handleClicl(event, check = true){
    event.preventDefault()                                                                          //Serve pra não mudar a url no browser quando clicar marcar como lido e excluir 
    const text = check ? "Marcar como lida" : "Excluir"
    //Criando variável pra definir qual tipo de ação, se será como check ou delete
    const slug = check ? "check" : "delete"
    //Criando variável para passar o id da sala
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)                        //Criando condição para mandar pra url o id, numero da pergunta e qual ação


    //Concatenando o titulo e textos
    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")                  //Criando condição para alternar de cor na janela da modal
    
    //abrir modal
    modal.open()
}