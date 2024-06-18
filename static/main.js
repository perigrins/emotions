document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData();
    const file = document.getElementById('audioFile').files[0];
    formData.append('file', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        document.getElementById('result').textContent = 'Wynik: ' + result.output;
    } catch (error) {
        console.error('Error:', error);
    }
});
