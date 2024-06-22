const _logout = document.getElementById('logout-2');
const logout2 = document.getElementById('logout-3');
const loggedIn = JSON.parse(localStorage.getItem('token'));
if (loggedIn == null) {
    alert("wow !!!!!!!!!"); 
    loginPage();
}
const route = window.location.hash.substring(3);
console.log(route);
console.log("tttttt")

function loginPage() {
    window.location.href = "./../../login-employees.html";
}
function logOut() {
    alert("hello");
    localStorage.removeItem('token');
    loginPage();
}
try {
    _logout.addEventListener('click', (e) => {

        logOut();

    })
} catch (e) {

    console.log({ logout_error: e });

}
try {
    logout2.addEventListener('click', (e) => {

        alert("hello from button ");

    })
} catch (e) {
    console.log({ logout_error: e });

}