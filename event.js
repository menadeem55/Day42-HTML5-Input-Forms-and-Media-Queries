function hello(event)
{
    event.preventDefault();
    let mobileRegex = /^(91)( )[6-9]{1}[0-9]{9}$/;
    let mobile = document.getElementById('mobile').value;

    if(mobileRegex.test(mobile))
     {
        localStorage.setItem("mobile",mobile);
        alert("Hello, "+ localStorage.getItem("mobile"));
     }else
     {
        alert("Enter valid mobile Number");
        document.getElementById("name-err").innerHTML ="enter a valid Mobile Number ! ";
     }
}

function check(event)
{
    event.preventDefault();
    let  mobileRegex = /^(91)( )[6-9]{1}[0-9]{9}$$/;
    let  mobile = document.getElementById(' mobile').value;

    if(! mobileRegex.test( mobile))
    document.getElementById("name-err").innerHTML ="Enter Valid Mobile Number !"
   else
   document.getElementById("name-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);