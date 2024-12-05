function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const courseList = document.getElementById('course-list') || document.createElement('ul');
    courseList.id = 'course-list';

    const courseItem = document.createElement('li');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.className = 'course-entry';
    newCourseInput.placeholder = 'Enter a course';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function () {
        courseList.removeChild(courseItem);
    };

    courseItem.appendChild(newCourseInput);
    courseItem.appendChild(deleteButton);
    courseList.appendChild(courseItem);
    courseContainer.appendChild(courseList);
}

function createIntro() {
    const formDataContainer = document.createElement('div');
    formDataContainer.className = 'byo center';
    const image = document.getElementById('image').files[0];
    const imageURL = URL.createObjectURL(image);
    var text = "<img src=\"" + imageURL + "\" style=\"max-width: 200px; max-height: 200px;\" />";
    
    formDataContainer.innerHTML = `
        <h2>Your Introduction Page</h2>
        <ul>
        <li><strong>Name:</strong> ${document.getElementById('name').value || 'N/A'}</li>
        <li><strong>Mascot:</strong> ${document.getElementById('mascot').value || 'N/A'}</li>
        ${text}
        <li><strong>Image Caption:</strong> ${document.getElementById('image-caption').value || 'N/A'}</li>
        <li><strong>Personal Background:</strong> ${document.getElementById('background').value || 'N/A'}</li>
        <li><strong>Professional Background:</strong> ${document.getElementById('pro-background').value || 'N/A'}</li>
        <li><strong>Academic Background:</strong> ${document.getElementById('academic-background').value || 'N/A'}</li>
        <li><strong>Background in Web Development:</strong> ${document.getElementById('webdev-background').value || 'N/A'}</li>
        <li><strong>Primary Computer Platform:</strong> ${document.getElementById('platform').value || 'N/A'}</li>
        <li><strong>Courses Currently Taking:</strong></li>
        <ul>
            ${Array.from(document.querySelectorAll('.course-entry')).map((input) => `<li>${input.value}</li>`).join('')}
        </ul>
        <li><strong>Funny Thing About Yourself:</strong> ${document.getElementById('funny').value || 'N/A'}</li>
        <li><strong>Anything Else:</strong> ${document.getElementById('additional').value || 'N/A'}</li>
        </ul>
    `;
    const form = document.getElementById("byo-form");
    const footer = document.querySelector('footer');
    footer.parentNode.insertBefore(formDataContainer, footer);
    form.style.display = "none"; // Hide the form completely
    const introHeading = document.querySelector('h3');
    if (introHeading) {
        introHeading.remove(); // Removes the h3 element from the DOM
    }
    const resetLink = document.createElement('button');
    resetLink.textContent = 'Reset';
    resetLink.onclick = function() {
        location.reload();
    };
    document.body.appendChild(resetLink);

}

function isComplete() {
    const requiredFields = [
        "name", "mascot", "image-caption", "background", "pro-background",
        "academic-background", "webdev-background", "platform"
    ];

    const isValid = requiredFields.every((id) => document.getElementById(id).value.trim() !== "");
    if (!isValid || !document.getElementById("agree").checked) {
        alert("Please complete all fields and agree to the terms.");
        return;
    }
    createIntro();
}

function resetForm() {
    const form = document.getElementById("byo-form");
    form.reset();
    
    const courseList = document.getElementById("course-list");
    if (courseList) {
        courseList.innerHTML = ""; // Clear all dynamically added courses
    }
}

document.getElementById('byo-form').addEventListener('submit', function (event) {
    event.preventDefault();
    createIntro();
    this.reset();
});

document.getElementById("add-course-btn").addEventListener("click", addCourse);
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.type = 'button';
resetButton.onclick = function() {
    document.getElementById('byo-form').reset();
    const courseList = document.getElementById('course-list');
    if (courseList) {
        courseList.innerHTML = ""; // Clear all dynamically added courses
    }
};
document.getElementById('byo-form').appendChild(resetButton);
