async function signupFormHandler() {
    event.preventDefault()
    const username = document.querySelector('#email-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    if (!username || !email || !password) {
        return
    }
    const response = await fetch('/api/users',{
        method: 'post',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        console.log('success')
    }
    else {
        alert(response.statusText)
    }
}
async function loginFormHandler() {
    event.preventDefault()
    const email = document.querySelector('#email-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()
    if (!email || !password) {
        console.log('asdf')
        return
    }
    const response = await fetch('/api/users/login',{
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/')
        console.log('woot')
    }
    else {
        alert(response.statusText)
    }
}
document.querySelector('.signup-form').addEventListener('submit',signupFormHandler)
document.querySelector('.login-form').addEventListener('submit',loginFormHandler)