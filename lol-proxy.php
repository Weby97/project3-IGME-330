<?php


// 1) The URL to the web service


    $URL = 'https://'.$_GET['region'].'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'.$_GET['summonerName'].'?api_key=RGAPI-81f615f3-1769-443d-b1f9-6ad86d485c69';

	// 6) Call the web service
	$result = file_get_contents($URL);

	// 7) Echo results
	header('content-type:application/json'); // tell the requestor that this is JSON
	header('Access-Control-Allow-Origin: *'); // turn on CORS for that shout-client.html can use this service
    ini_set("allow_url_fopen", 1);

echo $result;
?>
