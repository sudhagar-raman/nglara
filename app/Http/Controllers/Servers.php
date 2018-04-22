<?php
/**
* 
*@author sudhagar raman
*/
	
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
	public function index(){
		return Server::getAllServers();
	}

	/**
	* Dislay the list of servers by filters
	*
	*@return response
	*/ 
	public function filterServers(){
		$req = request()->all();
		return Server::getServerByFilters($req);
		
	}
}
