<?php

namespace App\Http\Controllers;

use App\Server;
use Illuminate\Http\Request;

class Servers extends Controller
{
    /**
	* Dislay the list of servers
	*
	*@return response
	*/
	public function index($id = null){
		if($id == null){
			return Server::orderBy('id', 'asc')->take(15)->get();
		}else{
			return $this->show($id);
		}
	}
}
