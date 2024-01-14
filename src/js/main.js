import '../styles/style.css'

const APP_ID = "app"

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById(APP_ID)
    if (!app) throw new Error(`Unable to locate element with '${APP_ID}' id. Cannot initialize app`)
    app.innerHTML = 'e-commerce'
})

