function hello(event)
{
    event.preventDefault();
    let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(firstNameRegex.test(name))
     {
        localStorage.setItem("name",name);
        alert("Hello, "+ localStorage.getItem("name"));
     }else
     {
        alert("Enter valid name");
        document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
     }

    
}

function check(event)
{
    event.preventDefault();
    let firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(!firstNameRegex.test(name))
    document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
   else
   document.getElementById("name-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);