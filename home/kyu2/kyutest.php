<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="kyu.css">
    <title>Test 2.Kyu</title>
</head>

<body style="background: rgb(22,22,22);">
    <div class="background"></div>
    <div class="container">
        <div class="container-item" id="quiz">
            <h2 class="text" id="question">Question</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text" class="text">Answer</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text" class="text">Answer</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text" class="text">Answer</label>
                </li>

                <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text" class="text">Answer</label>
                </li>
            </ul>
        </div>
        <button id="submit">OK</button>
    </div>

    <script src="quiz.js"></script>
</body>

</html>