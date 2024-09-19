document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const role = document.getElementById('dropdown').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const communication = Array.from(document.querySelectorAll('input[name="communication"]:checked')).map(cb => cb.value);
    const comments = document.getElementById('comments').value;

    if (satisfaction) {
        alert(`Thank you, ${name}! \n\nYour responses have been recorded:\n\nName: ${name}\nEmail: ${email}\nAge: ${age}\nRole: ${role}\nSatisfaction: ${satisfaction.value}\nCommunication Preferences: ${communication.join(', ')}\nComments: ${comments}`);
    } else {
        alert('Please select your level of satisfaction.');
    }
});
