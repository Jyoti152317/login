function signup(userName) {
    let users = ["Jyoti", "Boby", "Aarav"];
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

console.log(signup("Jyoti")); 
console.log(signup("David")); 
