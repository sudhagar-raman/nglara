<?php

/**
*  
*@author sudhagar raman
*/

namespace App;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
	
    protected $fillable = array('id', 'model', 'ram', 'hdd', 'location', 'price');

    /**
     * Get all server 
     * @return Array of object
    */
    public static function getAllServers(){
    	return Server::orderBy('id', 'asc')->take(20)->get();
    }

    /**
     * Get server list based on the filter parameters
     * $params - array
     * @return Array of object
    */
    public static function getServerByFilters($params){
      $hdd = $params['hdd'] ?? null;
      $ram = $params['ram'] ?? array();
      $location = $params['location'] ?? null;

      $query = Server::orderBy('id', 'asc');

      foreach($ram as $key => $value){
         $query->orWhere('ram', 'like', $value.'%');
      }

      if($hdd){
        $query->where('hdd', 'like', '%' . $params['hdd']);
      }
      
      if($location){
        $query->where('location', $params['location']);
      }
  
      return $query->get();
    }
}
