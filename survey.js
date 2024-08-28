document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('surveyForm');

    surveyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const age = document.getElementById('age').value;
        const subject = document.getElementById('subject').value;

        // Logic to determine the task based on age and subject
        // You can store these values or redirect to the tasks page

        window.location.href = 'tasks.html';
    });
});
