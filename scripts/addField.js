// Clicar no botão de adicionar novo horário
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    // Duplicar os campos
    // Node se refere a tags html
    const fieldClone = document.querySelector(".schedule-item").cloneNode(true)

    // Resetar os campos 
    const fieldClean = fieldClone.querySelectorAll('input')

    fieldClean.forEach(function(field) {
        field.value = ""
    })

    // Colocar os objs duplicados na página 
    document.querySelector('#schedule-items').appendChild(fieldClone)
}
