document.querySelector('#pdf').addEventListener('change', () => {
    let pdf = document.querySelector('#pdf').files[0];
    let pdfUrl = URL.createObjectURL(pdf) + "#toolbar=0";

    document.querySelector('#preview').setAttribute('src',pdfUrl);
});