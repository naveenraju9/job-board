document.querySelector('#formBox').addEventListener('submit', myFunction);

var jobApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];

function myFunction() {
    event.preventDefault();
    var jobObj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        role: document.querySelector("#role").value,
        salary: document.querySelector("#salary").value
    };
    jobApplications.push(jobObj);
    localStorage.setItem('jobApplications', JSON.stringify(jobApplications));
    alert('Job added successfully');
}