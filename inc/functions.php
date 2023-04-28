<?php

function add_doted_str($string){
    // $string = "PHP Bangla Tutorial - Full Course | বাংলা পি এইচ পি টিউটোরিয়াল সিরিজ";

    $str_len = strlen($string);
    
    if($str_len > 18){
    //    $new_str =  substr($string, 50);
      $new_str =   substr_replace($string, " .... ", 18);
      echo $new_str;
    
    //    set_charset
    //    echo 'str runs';
    }else{
       echo 'the new not run str';
    }
    
}





?>