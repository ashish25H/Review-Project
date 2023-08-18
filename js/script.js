async function renderLoginPage() {
    let response = await fetch('components/login/login.mustache');
    let template = await response.text();

    document.getElementById('login-form').innerHTML = Mustache.render(template);

    const scriptPath = "components/login/login-script.js";

    // Check if the script is present
    const scriptElement = document.querySelector(`script[src="${scriptPath}"]`);

    if (scriptElement) {
        console.log('The script is present.');
        $('#login-form').show();
        $('#body-content').hide();
    } else {
        const script = document.createElement("script");
        script.src = "components/login/login-script.js";
        document.body.appendChild(script);
    }

    // const script = document.createElement("script");
    // script.src = "components/login/login-script.js";
    // document.body.appendChild(script);
}

renderLoginPage();
window.renderLoginPage = renderLoginPage;
