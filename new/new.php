<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="svg/favicon.svg" />
  <link rel="stylesheet" href="new.css">
  <title>Neuer Account</title>
</head>

<?php
$username;
$username_error = '';
if (($_POST)) {
  $username = $_POST["username"];
  $username_error;
  if (strlen($username) < 3) {
    $username_error = "Please choose longer username";
  }
}


$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO referat (username, password, passnr) VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  //TODO: REDIRECT HOME
  echo "Wilkommen";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
?>

<body style="background: rgb(22,22,22);">

  <br class="br" />
  <div class="align">
    <form action="new.php" method="post" class="form">
      <div class="name">
        <label for="username">
          <h1>Username</h1>
        </label>
        <br style="margin: 0.3rem" />

        <input type="text" id="username" name="username" />
        <?php if ($username_error) : ?>
          <div class="error"><?php echo $username_error; ?></div>
        <?php endif; ?>
      </div>

      <br style="margin: 2rem" />

      <div class="pw">
        <label for="password">
          <h1>Passwort</h1>
        </label>
        <br style="margin: 0.3rem" />
        <input type="password" id="password" name="password" />
      </div>

      <br style="margin: 2rem" />

      <div class="pnr">
        <label for="passnr">
          <h1>Pass Nr.</h1>
        </label>
        <br style="margin: 0.3rem" />
        <input type="text" id="passnr" name="passnr" />
      </div>

      <br style=" margin: 0.5rem" />

      <input type="submit" name="register" value="Register" class="ok" />
    </form>
    <br />
  </div>
  <a href="/referat" class="btn"><button class="btn">
      <h3>Zurück</h3>
    </button></a>
</body>

</html>