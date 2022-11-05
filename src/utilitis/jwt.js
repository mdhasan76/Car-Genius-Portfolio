export const services = (user) => {
    // const currentUser = {
    //     email: user.email
    // }

    // console.log(currentUser)
    // //get user token 
    // fetch("https://carportfolio.vercel.app/jwt", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(currentUser)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         localStorage.setItem("token", data.token)
    //     })

    const currentUser = {
        email: user.email
    }
    // get User Token
    fetch("https://carportfolio.vercel.app/jwt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => localStorage.setItem("token", data.token))
}
