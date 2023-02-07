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
$username = '';
$username_error = '';
$password = '';
$password_error = '';
$passnr = 0;
$passnr_error = '';
if (($_POST)) {
  $username = $_POST["username"];
  $username_error;
  if (strlen($username) < 3) {
    $username_error = "Erstelle ein längeren Usernamen";
  }
  $password = $_POST["password"];
  $password_error;
  if (strlen($password) < 3) {
    $password_error = "Erstelle ei längeres Passwort";
  }
  $passnr = $_POST["passnr"];
  $passnr_error;
  if (strlen($passnr) < 3) {
    $passnr_error = "Das is keine Judo Pass Nr.";
  }
}

$servername = "localhost";
$db_username = "root";
$db_password = "";
$dbname = "referat";


// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO users (username, password, passnr) VALUES ('$username', '$password', '$passnr')";

if ($conn->query($sql) === TRUE) {
  header('Location: ../home/home.php');
  //TODO: REDIRECT HOME
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
        <?php if ($password_error) : ?>
          <div class="error"><?php echo $password_error; ?></div>
        <?php endif; ?>
      </div>

      <br style="margin: 2rem" />

      <div class="pnr">
        <label for="passnr">
          <h1>Pass Nr.</h1>
        </label>
        <br style="margin: 0.3rem" />
        <input type="text" id="passnr" name="passnr" />
        <?php if ($passnr_error) : ?>
          <div class="error"><?php echo $passnr_error; ?></div>
        <?php endif; ?>
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