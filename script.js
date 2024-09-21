function submitAnswers() {
    // Get answers for each question
    const q1_1_1 = document.getElementById('q1_1_1').value;
    const q1_1_2 = document.getElementById('q1_1_2').value;
    const q1_1_3 = document.getElementById('q1_1_3').value;
    const q1_2 = document.getElementById('q1_2').value;
    const q1_3 = document.getElementById('q1_3').value;

    const q2_1_1 = document.getElementById('q2_1_1').value;
    const q2_1_2 = document.getElementById('q2_1_2').value;
    const q2_1_3 = document.getElementById('q2_1_3').value;
    const q2_2_1 = document.getElementById('q2_2_1').value;
    const q2_2_2 = document.getElementById('q2_2_2').value;

    // Add logic to process answers or save them
    document.getElementById('submission-result').innerText = "Answers submitted successfully!";
}

