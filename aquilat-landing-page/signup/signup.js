const form_ref = document.getElementById('signup-form')


//values of the feilds


form_ref.addEventListener('submit', async e => {
    e.preventDefault()
    const full_name_of_user = form_ref.elements.namedItem("signup-name").value
    const user_email = form_ref.elements.namedItem("signup-email").value
    const user_password = form_ref.elements.namedItem("signup-password").value

    fetch("/api/v1/user/register", {
        method: 'POST',

        body: JSON.stringify({
            name: full_name_of_user,
            email: user_email,
            password: user_password,
            date_of_birth: [11, 12, 2005]
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
})