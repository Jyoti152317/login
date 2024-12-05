function signup(userName) {
    let users = ["Jyoti", "Boby", "Aarav"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let users = ["Jyoti", "Boby", "Aarav"];
    if (users.includes(userName)) {
        if (password == "Emp@123") {
            return "Login Successful...";
        } else {
            return "Wrong Password...";
        }
    } else {
        return "User Not Found, Please Signup";
    }
}

console.log(signup("Jyoti")); 
console.log(login("Aarav", "Emp@123")); 
console.log(login("Boby", "wrong-password")); 
console.log(login("David", "Emp@123"));
