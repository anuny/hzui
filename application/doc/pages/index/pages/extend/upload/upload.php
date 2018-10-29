<?php
//error_reporting(E_ALL);
header("content=text/html; charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$isCrop = isset($_POST['crop']);


$uf = $_FILES['file'];
if(!$uf){
  echo json_encode(array('status'=>0,'message'=>'没有文件')); 
  exit();
}
$upload_file_temp = $uf['tmp_name'];
$upload_file_name = $uf['name'];
$upload_file_size = $uf['size'];

if(!$upload_file_temp){
	echo json_encode(array('status'=>0,'message'=>'上传失败','data'=>$uf)); 

  exit();
}
$file_size_max = 1024*1024;// 1M限制文件上传最大容量(bytes)
// 检查文件大小
if ($upload_file_size > $file_size_max) {
	echo json_encode(array('status'=>0,'message'=>'文件太大','data'=>$upload_file_size)); 
  exit();
}
$store_dir = "./upload/";// 上传文件的储存位置
$accept_overwrite = 1;//是否允许覆盖相同文件

$date=date('Ymdhis');
$names=explode('.',$upload_file_name);
$upload_file_name=md5($names[0]).'.'.$names[1];


$file_path = $store_dir . $upload_file_name;
// 检查读写文件
if (file_exists($file_path) && !$accept_overwrite) {
	echo json_encode(array('status'=>0,'message'=>'存在相同文件名的文件','data'=>$file_path)); 
  exit();
}
//复制文件到指定目录
if (!move_uploaded_file($upload_file_temp,$file_path)) {
	echo json_encode(array('status'=>0,'message'=>'复制文件失败','data'=>$file_path)); 
	exit;
}else{
	echo json_encode(array(
		'status'=>1,
		'crop'=>$isCrop,
		'message'=>'上传成功',
		'data'=>$file_path
	));
	exit();
}

$error = $uf['error'];
switch($error){
case 0:
  echo(json_encode($uf)); break;
case 1:
  echo json_encode(array('status'=>0,'message'=>'上传的文件超过了 php.ini 中 upload_max_filesize 选项限制的值','data'=>'')); break;
case 2:
	echo json_encode(array('status'=>0,'message'=>'上传文件的大小超过了 HTML 表单中 MAX_FILE_SIZE 选项指定的值','data'=>'')); break;
case 3:
	echo json_encode(array('status'=>0,'message'=>'文件只有部分被上传','data'=>'')); break;
case 4:
	echo json_encode(array('status'=>0,'message'=>'没有文件被上传','data'=>'')); break;
}
exit()
?>