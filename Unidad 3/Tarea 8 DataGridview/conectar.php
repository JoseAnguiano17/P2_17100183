<?php
    $dominio = 'localhost';
    $usuario = 'root';
    $password = '';
    $db = 'u_17100183';
    $conectar = mysqli_connect($dominio,$usuario,$password);
    if(!$conectar){
        echo"Error al conectar con la base de datos.";
    } else {
        $db=mysqli_select_db($conectar,$db);
        if(!$db){
            echo"Error, no se encontro la base de datos.";
        }
    }
?>