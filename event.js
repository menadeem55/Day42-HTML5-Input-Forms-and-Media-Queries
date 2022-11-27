function hello(event)
{
    event.preventDefault();
    let emailRegex = /^[a-zA-Z]+[.+-]?[A-Za-z0-9]*[@][A-Za-z0-9]+[.+-][A-Za-z0-9]{2,}[.]*[A-Za-z]*$/;
    let email = document.getElementById('email').value;

    if(emailRegex.test(email))
     {
        localStorage.setItem("email",email);
        alert("Hello, "+ localStorage.getItem("email"));
     }else
     {
        alert("Enter valid email");
        document.getElementById("name-err").innerHTML ="enter a valid email ! ";
     }
}

function check(event)
{
    event.preventDefault();
    let emailRegex = /^[a-zA-Z]+[.+-]?[A-Za-z0-9]*[@][A-Za-z0-9]+[.+-][A-Za-z0-9]{2,}[.]*[A-Za-z]*$/;
    let email = document.getElementById('name').value;

    if(!firstNameRegex.test(email))
    document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
   else
   document.getElementById("name-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);