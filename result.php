<?php

if(isset($_GET['ip'])) {
    $response = file_get_contents("http://ip-api.com/json/".$_GET['ip']);
    $response = json_decode($response);

//    var_dump($response);
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css">
    <title>Geo IP Test</title>
</head>
<body>

    <?php if(isset($response) && $response->status == 'success'):?>
    <div class="container">
        <div class="modal-content">
            <div class="modal-body">
                <div>
                    <h3>Страна</h3>
                    <p><?php echo $response->country. " ({$response->countryCode})"?></p>
                </div>
                <div>
                    <h3>Республика</h3>
                    <p><?php echo $response->regionName. " ({$response->region})"?></p>
                </div>
                <div>
                    <h3>Город</h3>
                    <p><?php echo $response->city?></p>
                </div>
                <div>
                    <h3>Индекс</h3>
                    <p><?php echo $response->zip?></p>
                </div>
                <div>
                    <h3>Часовой пояс</h3>
                    <p><?php echo $response->timezone?></p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="window.location='index.html'">Ок</button>
            </div>
        </div>
    </div>
    <?php endif; ?>

        <!-- JavaScript -->

    <script src="libs/jquery/jquery-3.6.0.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</body>
</html>