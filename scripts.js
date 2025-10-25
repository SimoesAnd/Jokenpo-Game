const optionsImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImage = [
    'imgs/pedra.png', 
    'imgs/papel.png', 
    'imgs/tesoura.png',
]

/*
(Rock) Pedra - R
(Paper) Papel - P
(Scissors) Tesoura - S

Pedra ganha de Tesoura
Tesoura ganha de Papel
Papel ganha de Pedra

Pedra perde para Papel
Papel perde para Tesoura
Tesoura perde para Pedra

Empate ocorre quando ambos escolhem a mesma opção
*/

const winner = {
    RR: "Empate",
    RP: "Você",
    RS: "Computador",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você",
}


function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionsImages).indexOf(clickedImage)


    container.classList.add("start")
    resultText.textContent = "Jo-Ken-Pô!"

    userResult.src = computerResult.src = computerSrcImage[0]

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImage[userIndex]
         

        const randomNumber = Math.floor(Math.random() * computerSrcImage.length)
        computerResult.src = computerSrcImage[randomNumber]

        const userValue = ["R", "P", "S"][userIndex]
        const computerValue = ["R", "P", "S"][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]


        resultText.textContent = userValue === computerValue ? "Empate!" : finalResult + " ganhou!"


    }, 2000) // 1000ms = 1 segundo 2000ms = 2 segundos 3000ms = 3 segundos
}



optionsImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
    })
