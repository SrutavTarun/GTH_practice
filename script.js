// Image Processing Functions
function processImage(inputImage, brightnessValue, contrastValue, isGrayscale, isInvert) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = inputImage.width;
    canvas.height = inputImage.height;

    ctx.filter = `brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${isGrayscale ? 1 : 0}) invert(${isInvert ? 1 : 0})`;
    ctx.drawImage(inputImage, 0, 0);

    return canvas.toDataURL("image/jpeg");
}

// Event Listeners
document.getElementById("imageUpload").addEventListener("change", function (e) {
    const inputImage = new Image();
    inputImage.src = URL.createObjectURL(e.target.files[0]);
    inputImage.onload = function () {
        const brightness = document.getElementById("brightness").value;
        const contrast = document.getElementById("contrast").value;
        const grayscale = document.getElementById("grayscale").checked;
        const invert = document.getElementById("invert").checked;

        const outputImage = document.getElementById("outputImage");
        outputImage.src = processImage(inputImage, brightness, contrast, grayscale, invert);
    };
});

document.getElementById("brightness").addEventListener("input", function () {
    const inputImage = document.getElementById("outputImage");
    const brightness = this.value;
    inputImage.style.filter = `brightness(${brightness}%)`;
});

document.getElementById("contrast").addEventListener("input", function () {
    const inputImage = document.getElementById("outputImage");
    const contrast = this.value;
    inputImage.style.filter = `contrast(${contrast}%)`;
});

document.getElementById("grayscale").addEventListener("change", function () {
    const inputImage = document.getElementById("outputImage");
    const isGrayscale = this.checked;
    inputImage.style.filter = `grayscale(${isGrayscale ? 1 : 0})`;
});

document.getElementById("invert").addEventListener("change", function () {
    const inputImage = document.getElementById("outputImage");
    const isInvert = this.checked;
    inputImage.style.filter = `invert(${isInvert ? 1 : 0})`;
});
