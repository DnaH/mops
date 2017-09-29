<?php
/**
 * Created by PhpStorm.
 * User: dnah
 * Date: 25.09.17
 * Time: 13:03
 */

$settings = parse_ini_file("constants/db.conf");

foreach ($settings as $key => $setting)
{
    // Notice the double $$, this tells php to create a variable with the same name as key
    $$key = $setting;
}
