var appliedJobs = JSON.parse(localStorage.getItem('jobApplications')) || [];

var bookmarksList = JSON.parse(localStorage.getItem('bookmarksList')) || [];

function displayData(appliedJobs) {
    document.querySelector('tbody').innerHTML = '';
    appliedJobs.forEach(job => {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = job.name;

        var td2 = document.createElement('td');
        td2.innerText = job.email;

        var td3 = document.createElement('td');
        td3.innerText = job.role;

        var td4 = document.createElement('td');
        td4.innerText = job.salary;

        var td5 = document.createElement('td');
        td5.innerText = 'Bookmark';
        td5.style.color = 'blue';
        td5.style.cursor = 'pointer';

        td5.addEventListener('click', function() {
            bookmarksList.push(job);
            localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
            alert(`Bookmark added succesfully ${job.name}`);
        });
        row.append(td1, td2, td3, td4, td5);
        document.querySelector('#tableBody').append(row);
    });
}

window.addEventListener('load', function() {
    displayData(appliedJobs);
});

function handleNamesSort() {
    var selected = document.querySelector('#sortNames').value
    if(selected === 'asc') {
        appliedJobs.sort(function(a, b) {
            if(a.name > b.name) {
                return 1;
            }
            else if(a.name < b.name) {
                return -1;
            }
            return 0;
        });
    }
    if(selected === 'dsc') {
        appliedJobs.sort(function(a, b) {
            if(a.name > b.name) {
                return -1;
            }
            else if(a.name < b.name) {
                return 1;
            }
            return 0;
        });
       
    }
    displayData(appliedJobs);
}

function handleRolesFilter() {
    var selectedFilterValue = document.querySelector('#filterByRole').value;

    var filterList = appliedJobs.filter(function(job) {
        return job.role === selectedFilterValue;
    });

    displayData(filterList);
}