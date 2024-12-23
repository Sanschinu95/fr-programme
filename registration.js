
document.getElementById('frForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        branch: document.getElementById('branch').value,
        section: document.getElementById('section').value,
        scholar_number: parseInt(document.getElementById('scholar_number').value, 10),
        why: document.getElementById('why').value,
        experience: document.getElementById('experience').value,
    };

    try {
        const response = await fetch('https://server.ecellnitb.in/fr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Form submitted successfully! ');
            document.getElementById('frForm').reset();
            window.location.href = 'https://chat.whatsapp.com/KHcLQFzb09TF7oZMgOgoQm';
            
            
        } else {
            document.getElementById('frForm').reset();
            alert('Error submitting form. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('frForm').reset();
        alert('An error occurred. Please try again.');
    }
});