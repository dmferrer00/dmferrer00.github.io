const form = document.getElementById("survey-form");
function isComplete(form){
    form.addEventListener("submit", function(event){
        event.preventDefault();
        if(form.checkValidity()){
            form.submit();
        }
    })
}
