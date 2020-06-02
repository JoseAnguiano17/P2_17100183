<?php
    header('Content-Type: application/json');
    include 'conectar.php';
    $query = $_POST['query'];
    $result = mysqli_query($conectar, $query);
    $sel =strpos($query,'SELECT');
    if($sel !== false){
        $items = [];
        while($row = mysqli_fetch_row($result)) {
            array_push($items,['ID'=>$row[0], 'Nombre'=>$row[1],'Apellido Paterno'=>$row[2], 'Apellido Materno'=>$row[3]]);
        }
        echo (json_encode($items));
    } else {
        var_dump($query);
    }
?>