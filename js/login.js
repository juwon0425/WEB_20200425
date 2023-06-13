function login(){
	let form=document.querySelector("#form_main");
	let id=document.querySelector("#floatingInput");
	let password=document.querySelector("#floatingPassword");
	let check=document.querySelector("#idSaveCheck");
	
	form.action="../index_login.html";
	form.method="get";
	
	if(check.checked==true){
		alert("쿠키를 저장합니다");
		setCookie("id", id.value, 1);
		alert("쿠키 값:"+id.value);
	}
	else{
		setCookie("id", id.value, 0);
	}
	
	if(id.value.length===0||password.value.length===0){
		alert("아이디와 비밀번호를 모두 입력해주세요.")
	}else{
		session_set(); //세션 생성
		form.sbmit();
	}
}

function login_count(){
	logion_cnt
}
function logout_count(){
	logout_cnt
}

function logout(){
	session_del(); //세션 삭제
	location.href='../index.html';
}

function addJavascript(jsname){
	var th=documents.getElementsByTagname('head');
	var s=document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('srd',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js');//암복호화 함수
addJavascript('/js/session.js');//세션 함수
addJavascript('/js/cookie.js');//쿠키 함수