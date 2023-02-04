<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="/svg/favicon.svg">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>

<body style="background-color: black">
    <br class="br">
    <div class="align">
        <form action="/referat/home/home.php" method="post" class="form">
            <div class="name">
                <label for="username">
                    <h1>Username</h1>
                </label>
                <br style="margin: 0.3rem">

                <input type="text" id="username" name="username">
            </div>

            <br style="margin: 2rem;">

            <div class="pw">
                <label for="password">
                    <h1>Passwort</h1>
                </label>
                <br style="margin: 0.3rem">
                <input type="password" id="password" name="password">
            </div>

            <br style="margin: 0.5rem;">

            <input type="submit" value="Login" class="ok">
        </form>
        <br>
    </div>
    <a href="/referat" class="btn"><button class="btn">
            <h3>Zurück</h3>
        </button></a>
</body>

</html>