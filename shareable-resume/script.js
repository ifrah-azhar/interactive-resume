// Update the preview based on form input
function updatePreview() {
    document.getElementById("displayName").textContent = document.getElementById("name").value || "Your Name";
    document.getElementById("displayEmail").textContent = document.getElementById("email").value || "Your Email";
    document.getElementById("displaySummary").textContent = document.getElementById("summary").value || "Summary will appear here...";
}

// Change theme based on selection
function changeTheme() {
    const theme = document.getElementById("theme").value;
    const preview = document.getElementById("resumePreview");

    preview.classList.remove("classic", "modern");
    preview.classList.add(theme);
}

// Download the resume preview as a PDF
function downloadResume() {
    const resume = document.getElementById("resumePreview");
    html2pdf(resume, {
        margin:       1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}
