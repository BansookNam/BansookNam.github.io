function login_check() {
	alert('로그인 후 신청 가능합니다.');
}

function ready() {
	alert('참가 신청 기간이 아닙니다.');
}

function closed() {
	alert('참가 신청이 마감되었습니다.');
}

$(function(){
	$(".select_design").each(function(){
		var Sel_width = $(this).prev("span").outerWidth();
		$(this).css("width",Sel_width);
	});

	$(".select_design").on("change", function(){
		tel_first_num();
	});
	$(".radio_design").on("change", function(){
		radio_check();
	});

	$(".select_design").on("focusin", function(){
		$(this).prev().addClass("on");
	});
	$(".select_design").on("focusout", function(){
		$(this).prev().removeClass("on");
	});

	tel_first_num();
	radio_check();

});

function tel_first_num(){
	$(".select_design").each(function(){
		$(this).prev().html($(this).find("option:selected").text());
	});
}
function radio_check(){
	$(".radio_design").each(function(){
		if($(this).is(":checked")){
			$(this).parent().siblings().children("label").removeClass("checked");
			$(this).next().addClass("checked");
		}
	});
}

function send(frm) {

	if(frm.r_name.value=="") {
		alert('이름을 입력하셔야 신청이 가능합니다.');
		frm.r_name.focus();
		return false;
	}

	if(frm.hp2.value=="") {
		alert("휴대전화번호를 입력하셔야 신청이 가능합니다.");
		frm.hp2.focus();
		return false;
	}

	if(frm.hp2.value.length < 7) {
		alert('휴대전화번호를 올바르게 입력하셔야 신청이 가능합니다.');
		frm.hp2.focus();
		return false;
	}

	if(frm.r_email.value.indexOf('@',0) == -1 || frm.r_email.value.indexOf('.',0) == -1 ){
		alert('메일을 형식에 맞게 입력하셔야 신청이 가능합니다.');
		frm.r_email.focus();
		return false;
	}

	if(frm.r_school.value=="") {
		alert('학교명을 입력하셔야 신청이 가능합니다.');
		frm.r_school.focus();
		return false;
	}

	if(frm.r_school.value.length < 2) {
		alert('학교명을 2자 이상으로 입력하셔야 신청이 가능합니다.');
		frm.r_school.focus();
		return false;
	}

	if(frm.r_major.value=="") {
		alert('학과(전공)을 입력하셔야 신청이 가능합니다.');
		frm.r_major.focus();
		return false;
	}

	if(frm.r_major.value.length < 2) {
		alert('학과(전공)을 2자 이상으로 입력하셔야 신청이 가능합니다.');
		frm.r_major.focus();
		return false;
	}

	if(frm.r_position.value=="") {
		alert('학년(연차)을 선택하셔야 신청이 가능합니다.');
		frm.r_position.focus();
		return false;
	}
	
	if(!frm.edu[0].checked && !frm.edu[1].checked) {
		alert('조교 및 교직원을 겸직하시는 분은 체크해주셔야 신청이 가능합니다.');
		frm.edu_y.focus();
		return false;
	}

	if(frm.r_content.value=="") {
		alert('본 콜로키움과 관련된 연구/프로젝트 실적 및 경험을 입력하셔야 신청이 가능합니다.');
		frm.r_content.focus();
		return false;
	}
	
	if(frm.agree[0].checked == false) {
		alert('개인정보 수집 및 이용에 대한 안내에 동의하셔야 신청이 가능합니다.');
		frm.agree_y.focus();
		return false;
	}

}

function ck_hp(frm) {
	var s = frm.hp2.value;
	if (s.match(/[^0-9]/)){
		s = s.replace(/[^0-9]/g,'');
		frm.hp2.value="";
	}
}

function ck_pass(frm) {
	var s = frm.pass.value;
	if (s.match(/[^0-9]/)){
		s = s.replace(/[^0-9]/g,'');
		frm.pass.value="";
	}
}

function ChkHan(frm) 
{ 
	var pass=frm.r_name.value;


	var chk_num = pass.search(/[0-9]/g);
	var chk_esp = pass.search( /[~!\#$@%()d_^&*\=+|:;?\"<,.>\']/g);

	if(chk_esp==0 || chk_num >= 0) {
		frm.r_name.value="";
		frm.r_name.focus();
		return;
	}
}

function tmp(s)
{
	if (s.value.match(/[^0-9]/))
	{
		s.value = s.value.replace(/[^0-9]/g,'');
	}
}


// 참가 수정

function modify(frm) {
	frm.action="http://navercon.cafe24.com/2018/check.php";
	frm.submit();
}

// 참가 취소

function cancel(frm) {
	ck=confirm("참가신청을 취소하시겠습니까?");
	if(ck) {
		frm.action="http://navercon.cafe24.com/2018/register_cancel.php";
		frm.submit();
	} else {
		return;
	}
}

// 업로드 확인

      function fileSelected() {
        var file = document.getElementById('file').files[0];
        if (file) {
          var fileSize = 0;

		  if (file.size > 1024 * 1024) {
            fileSizecheck = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString();
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
		  } else {
            fileSizecheck = (Math.round(file.size * 100 / 1024) / 100).toString();
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
		  }

		  if (fileSizecheck > 40)
		  {
	  		  alert('40B 이상 파일은 업로드 하실 수 없습니다');
			  
			  document.getElementById('upload-name').value = "";
			  document.getElementById('file').value = "";

		  } else {

			  document.getElementById('fileName').innerHTML = '파일명: ' + file.name;
		      document.getElementById('fileSize').innerHTML = '크기: ' + fileSize;
			  // document.getElementById('fileType').innerHTML = '타입: ' + file.type;
		  }

        }
      }

      function uploadFile() {
        var fd = new FormData();
        fd.append("file", document.getElementById('file').files[0]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "UploadMinimal.aspx");
        xhr.send(fd);
      }

      function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        }
        else {
          document.getElementById('progressNumber').innerHTML = 'unable to compute';
        }
      }

      function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        // alert(evt.target.responseText);
      }

      function uploadFailed(evt) {
        // alert("There was an error attempting to upload the file.");
      }

      function uploadCanceled(evt) {
        // alert("The upload has been canceled by the user or the browser dropped the connection.");
      }

$(window).scroll(function(e) {    
	var window_top = $(window).scrollTop();   
	if (window_top > 1000) {
		$(".btn_top").addClass("on");
	}else {
		$(".btn_top").removeClass("on");
	}
});