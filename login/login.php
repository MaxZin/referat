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
 $username = 'username';
 $password = 'password';
 $servername = "localhost";
 $db_username = "root";
 $db_password = "";
 $db_name = "referat";
 $wrong_pass = '';
 $wrong_name = '';
 
 // Create connection
 $conn = new mysqli($servername, $db_username, $db_password, $db_name);
 
 // Check connection
 if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
 }

 if (($_POST)) {
    $username = $_POST["username"];
    $password = $_POST["password"];
 }

 $check_name = "SELECT * FROM users WHERE username='$username'";
 $result_name = $conn->query($check_name);
 $check_password = "SELECT * FROM users WHERE password='$password'";
 $result_password = $conn->query($check_password);

 if ($result_name->num_rows > 0) {
    // User already exists in the database
    if ($result_password->num_rows > 0) {
        // Password already exists in the database
        header('Location: ../home/home.php');
        exit();
    } else {
        echo $wrong_pass = 'Falsches Passwort.';
    }
  } else {
    $wrong_name = 'Falscher Username.';
  }

?>


<body style="background: rgb(22,22,22);">
    <br class="br">
    <div class="align">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" class="form">
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