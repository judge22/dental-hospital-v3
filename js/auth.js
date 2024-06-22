const loggedIn = JSON.parse(localStorage.getItem('token'));
console.log(loggedIn); 

 
if(loggedIn.loggedIn != 1) {
    const route = window.location.hash.substring(1); 
    console.log(route);
    console.log("tttttt")
   return window.location.href = './../pages/login-employees.html'; 
}
// window.location // window.location.href.includes(substring)