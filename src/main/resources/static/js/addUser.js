const addUser = document.getElementById("addUser");
addUser.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(addUser);
    const object = {
        roles: []
    };

    formData.forEach((value, key) => {
        if (key === "rolesId") {

            const roleId = value.split(" ")[0];
            const roleName = value.split(" ")[1];
            const role = {
                id: roleId,
                name: roleName
            };
            object.roles.push(role);
        } else {
            object[key] = value;
        }
    });

    fetch("admin/api/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user = {
            name: this.name3.value,
            lastName: this.lastName.value,
            age: this.age.value,
            email: this.email.value,
            password: this.password.value,
            roles: object.roles
        })
    })
        .then(() => getUsers())
        .then(() => addUser.reset());

    return show('Page1', 'Page2');
})