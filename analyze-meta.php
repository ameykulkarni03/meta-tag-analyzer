<?php

header('Access-Control-Allow-Origin: *');

$input = json_decode(file_get_contents('php://input'), true);

if(!filter_var($input['url'], FILTER_VALIDATE_URL)) {
  $response = [
    'error' => 'Invalid URL'
  ];
  echo json_encode($response);
  exit;
}

$url = $input['url'];

$meta = @get_meta_tags($url);

if (!$meta) {
  $response = [
    'error' => 'Failed to get meta tags'
  ];
  echo json_encode($response);
  exit;
}

$response = [
  'meta' => $meta
];

header('Content-Type: application/json');
echo json_encode($response);

?>