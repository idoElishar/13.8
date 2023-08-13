async function getData() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json()
    const a = data.results
    console.log(a)
    console.log(a[0].name.first + " " + a[0].name.last)
    console.log(a[0].email)
    console.log(a[0].picture.large)
    console.log(a[0].dob.age)
}
async function getBoyData() {
    let i = 0
    while (i < 5) {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json()
        const userdata = data.results
        if ((userdata[0].gender !== "female")) {
            i++
            let b = ""
            a = document.createElement("div")
            b += (userdata[0].name.first + " " + userdata[0].name.last + "\n")
            b += (userdata[0].email + "\n")
            pic = document.createElement("img")
            b += (userdata[0].dob.age + "\n")
            a.innerText = b
            pic.src = userdata[0].picture.medium
            a.appendChild(pic)
            document.body.appendChild(a)
        }
    }
}
async function getJoke() {
    const response = await fetch('https://api.humorapi.com/jokes/random/?api-key=e92350f9f0cf40feb2e499dbc01e264c');
    const data = await response.json()
    let a = document.createElement("div")
    const joke = data.joke
    if (joke === undefined) {
        a.innerText = "we use joke more then 10 times for day"
    }
    else {
        a.innerText = joke
    }
    document.body.appendChild(a)
}
async function getProductList() {
    const response = await fetch('https://fakestoreapi.com/products ');
    const data = await response.json()
    const a = document.createElement("ol")
    for (let i = 0; i < data.length; i++) {
        let b=document.createElement("li")
        b.innerText = (data[i].title )
        a.appendChild(b)
    }
    document.body.appendChild(a)
}



async function change() {
    const reqOptions = {
        method: 'put',
        body: JSON.stringify({ name: 'Israel' ,lastName:"kilng",Email:"idsosd@gmail.com",age:22}),
        headers: {
        'Content-Type': 'application/json'
        }
        }
        fetch("https://jsonplaceholder.typicode.com/users", reqOptions)
        .then(resp => resp.json())
        .then(json => console.log(json));
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data)
    }