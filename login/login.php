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

<?php
// Connect to the database
$mysqli = new mysqli("localhost", "root", "", "referat");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username and password from the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Prepare and execute a query to retrieve the user from the database
    $stmt = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // If a user was found with the given username
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user["password"])) {
            // Start a session and store the user information
            session_start();
            $_SESSION["logged_in"] = true;
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["username"] = $user["username"];

            // Redirect the user to the homepage
            header("Location: ../home/home.php");
            exit();
        } else {
            // Password is incorrect
            echo "Flasches Passwort.";
        }
    } else {
        // No user was found with the given username
        echo "Falscher Username.";
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$mysqli->close();
?>


<body style="background: rgb(22,22,22);">
    <br class="br">
    <div class="align">
        <form action="../home/home.php" method="post" class="form">
            <div class="name">
                <label for="username">
                    <h1>Userame</h1>
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