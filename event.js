function hello(event)
{
    event.preventDefault();
    let passwrdRegex = /^((?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*_]).{8,})$/;
    let passwrd = document.getElementById('passwrd').value;

    if(passwrdRegex.test(passwrd))
     {
        localStorage.setItem("passwrd",passwrd);
        alert("Password Saved Succesfully ");
     }else
     {
        alert("Enter valid Password");
        document.getElementById("name-err").innerHTML ="enter a valid Password Atlead 8 Elements ! ";
     }
}

function check(event)
{
    event.preventDefault();
    let  passwrdRegex = /^((?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*_]).{8,})$/;
    let  passwrd = document.getElementById(' passwrd').value;

    if(!passwrdRegex.test( passwrd))
    document.getElementById("name-err").innerHTML ="enter a valid Password Atlead 8 Elements ! ";
   else
   document.getElementById("name-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);