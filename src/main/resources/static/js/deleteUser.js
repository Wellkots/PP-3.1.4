const formDelete = document.getElementById('formDelete')
formDelete.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(formDelete);
    fetch("admin/api/" + formData.get("id"), {
        method: "DELETE"
    })
        .then(() => getUsers());
    $("#ModalDelete").modal("hide");
    formDelete.reset();
})