 // Extract key from URL query parameter
 const urlParams = new URLSearchParams(window.location.search);
 const key = urlParams.get('key');
 
 const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
generateBtn = container.querySelector(".form button");
qrImg = container.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
    qrValue=key;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});
