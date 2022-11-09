const editModal = document.getElementById('ModalEdit')
editModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget

    const userId = button.getAttribute('data-bs-userId')
    const userName = button.getAttribute('data-bs-userName')
    const userSurname = button.getAttribute('data-bs-userSurname')
    const userAge = button.getAttribute('data-bs-userAge')
    const userEmail = button.getAttribute('data-bs-userEmail')

    const modaluserId = editModal.querySelector('#userId')
    const modaluserName = editModal.querySelector('#name')
    const modaluserSurname = editModal.querySelector('#userSurname')
    const modaluserAge = editModal.querySelector('#userAge')
    const modaluserEmail = editModal.querySelector('#userEmail')

    modaluserId.value = userId
    modaluserName.value = userName
    modaluserSurname.value = userSurname
    modaluserAge.value = userAge
    modaluserEmail.value = userEmail
})