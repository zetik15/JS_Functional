async function getData(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (response.status === 200) {
            const userData = await response.json();
            return userData
        } else {
            return Promise.reject(`Пользователь с ID ${id} не найден`);
        }
    } catch (err) {
        return Promise.reject(`Ошибка ${err.message}`);
    }
}

getData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));



//task 2

const user = {
    name: 'Makar',
    age: 30,
    email:'makar@example.com'
}

async function saveUserData(user) {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        if (response.status !== 201) {
            throw new Error('Не получилось сохранить пользователя')
        }
        return await response.json();
    } catch(err) {
        return Promise.reject(err.message)
    }
}

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.error(error);
    });



//task 3

function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.style.color = 'violet'
        }
    }, delay);
}

changeStyleDelayed ('id', 2000)