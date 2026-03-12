function doLogin() {

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passInput").value;

    if (!email) {
        showToast("Please enter your email", "error");
        return;
    }

    if (!password) {
        showToast("Please enter your password", "error");
        return;
    }

    fetch("http://localhost:8083/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

        .then(async response => {

            const data = await response.json();

            if (response.status === 201) {

                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    text: "You have been logged in successfully."
                }).then(() => {

                    localStorage.setItem("token", data.data.token);

                    window.location.href = "dashboard.html";

                });

            } else {

                handleError(data);

            }

        })

        .catch(error => {

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "An unexpected error occurred."
            });

            console.error(error);

        });

}



function handleError(response) {

    const data = response.data;

    if (data?.email) {

        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: data.email
        });

    }
    else if (data?.password) {

        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: data.password
        });

    }
    else {

        Swal.fire({
            icon: "error",
            title: "Login Failed!",
            text: response.data || "Unauthorized access!"
        });

    }
}