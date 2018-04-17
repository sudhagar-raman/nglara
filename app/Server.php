<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $fillable = array('id', 'model', 'ram', 'hdd', 'location', 'price');
}
