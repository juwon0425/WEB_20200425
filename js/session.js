function get_id(){
	if(true){
		decrypt_text();
	}
	else{
    var getParameters = function(paramName){ // 변수 = 함수(이름)
    var returnValue; // 리턴값을 위한 변수 선언
    var url = location.href; // 현재 접속 중인 주소 정보 저장
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
        for(var i = 0; i < parameters.length; i++) { 
		    var varName = parameters[i].split('=')[0];
            
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		    }
	    } 
	}// 2중 for문 끝
	}; // 함수 끝
alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
}
function init(){
	let id=document.querySelector("#floatingInput");
	let check=document.querySelector("#idSaveCheck");
	let get_id=getCookie("id");
	
	if(get_id){
		id.value=get_id;
		check.checked=true;
	}
	session_check(); //세션 유무 검사
}
function session_set(){
	let id=document.querySelector("#floatingInput");
	let password=document.querySelector("#floatingPassword");
	let random=new Data(); //랜덤 타임스탬프
	const obj={
		id:id.value,
		otp:random
	}
	if(sessionStorage){
		const objString=JSON.stringfy(obj); //객체->JSON문자열 변환
		let en_text=encrypt_text(objstring); //암호화
		sessionstorage.setItem("Session_Storage_object", objString);
		sessionStorage.setltem("Session_storage_encrypted", en_text);
	} else{
		alert("로컬 스토리지 지원 x");
	}
}
function session_get(){
	if(sessionStorage){
		return sessionStorage.getItem("Session_Storage_encrypted");
	} else {
		alert("세션 스토리지 지원 x");
	}
}
function session_del(){
	//Check if the sessionStorage object exists
	if(sessionStorage){
		//Retrieve data
		sessionStorage.removeItem("Session_Storate_encrypted");
		alert('로그아웃 버튼 클릭 확인:세션 스토리지를 삭제합니다.');
	} else {
		alert("세션 스토리지 지원 x");
	}
}
function session_check(){
	if(sessionStorage.getItem("Session_Storage_test")){
		alert("이미 로그인 되었습니다.");
		location.href='index_login.html'; //로그인된 페이지로 이동
	}
}