const editModal = document.getElementById('ModalEdit')
editModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget

    const userId = button.getAttribute('data-bs-userId')
    const userFirstName = button.getAttribute('data-bs-userFirstName')
    const userLastName = button.getAttribute('data-bs-userLastName')
    const userAge = button.getAttribute('data-bs-userAge')
    const userEmail = button.getAttribute('data-bs-userEmail')


    const modaluserId = editModal.querySelector('#userId')
    const modaluserFirstName = editModal.querySelector('#userFirstName')
    const modaluserLastName = editModal.querySelector('#userLastName')
    const modaluserAge = editModal.querySelector('#userAge')
    const modaluserEmail = editModal.querySelector('#userEmail')

    modaluserId.value = userId
    modaluserFirstName.value = userFirstName
    modaluserLastName.value = userLastName
    modaluserAge.value = userAge
    modaluserEmail.value = userEmail


})
