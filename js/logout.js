console.log("hello from logout"); 
try {
    document.querySelector("#logout-3").addEventListener('click' , (event)=>{
        alert('goodbye see you later O@O'); 
        localStorage.clear();
        window.location.href = "./../../login-employees.html";
    })
} catch (error) {
    console.log({errors : error}); 
}