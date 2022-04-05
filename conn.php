<?php
define('SERVER', 'localhost');
define('USER', 'root');
define('PASSWORD', '');
define('DATABASE', 'ngCRUD');

$conn = new mysqli(SERVER, USER, PASSWORD, DATABASE);
if (!$conn)
    die('Failed to connect to database' . $conn->connect_error);
