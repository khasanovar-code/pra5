const users = [
    {
        login: "admin",
        password: "1234",
        name: "Администратор"
    },
    {
        login: "user1",
        password: "1111",
        name: "София"
    },
    {
        login: "user2",
        password: "2222",
        name: "Мария"
    },
    {
        login: "user3",
        password: "3333",
        name: "Руфина"
    },
    {
        login: "user4",
        password: "4444",
        name: "Ульзана"
    },
    {
        login: "user5",
        password: "5555",
        name: "Зиеда"
    }
];

function loginUser() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const user = users.find(function(user) {
        return user.login === login && user.password === password;
    });

    const message = document.getElementById("message");

    if (user) {
        message.style.color = "green";
        message.textContent = "Добро пожаловать, " + user.name + "!";
    } else {
        message.style.color = "red";
        message.textContent = "Ошибка! Неверный логин или пароль.";
    }
}

function sumAll(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

function calculateSum() {
    const input = document.getElementById("numbers").value;

    const numbers = input.split(",").map(Number);

    const result = sumAll(...numbers);

    document.getElementById("sumResult").textContent = "Сумма: " + result;
}

