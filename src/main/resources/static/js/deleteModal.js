const DeleteModal = document.getElementById('ModalDelete')
DeleteModal.addEventListener('show.bs.modal', event => {

    const Dbutton = event.relatedTarget

    const DuserId = Dbutton.getAttribute('data-bs-userId')
    const DuserName = Dbutton.getAttribute('data-bs-userName')
    const DuserSurname = Dbutton.getAttribute('data-bs-userSurname')
    const DuserAge = Dbutton.getAttribute('data-bs-userAge')
    const DuserEmail = Dbutton.getAttribute('data-bs-userEmail')

    const DmodaluserId = DeleteModal.querySelector('#userIdDelete')
    const DmodaluserName = DeleteModal.querySelector('#userNameDelete')
    const DmodaluserSurname = DeleteModal.querySelector('#userSurnameDelete')
    const DmodaluserAge = DeleteModal.querySelector('#userAgeDelete')
    const DmodaluserEmail = DeleteModal.querySelector('#userEmailDelete')

    DmodaluserId.value = DuserId
    DmodaluserName.value = DuserName
    DmodaluserSurname.value = DuserSurname
    DmodaluserAge.value = DuserAge
    DmodaluserEmail.value = DuserEmail

})