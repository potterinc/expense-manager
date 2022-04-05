<?php

require_once('conn.php');
require_once('Notification.php');

$postdata = file_get_contents('php://input');

if (isset($postdata) && !empty($postdata)) {
    $notify = new Notification();
    $request = (json_decode($postdata));

        
    $exp = mysqli_real_escape_string($conn, $exp = trim($request->expenditure));
    $amount = mysqli_real_escape_string($conn, trim($request->amount));
    $date =  mysqli_real_escape_string($conn, trim($request->date));

    $exp_query = "INSERT INTO expense(
        expenditure,
        exp_date,
        cost
    ) 
    VALUES(
        '$exp',
        '$date',
        '$amount'
    )";

    if ($conn->query($exp_query) == TRUE) {
        $notify->success = 'Record Added';
        return json_encode($notify);
    }
    else{
        $notify->error = 'Failed: '. $conn->error;
        return json_encode($notify);
    }
}
