function kttendn() {
    let ten = $("#usernameLogin").val();
    let ktcp= /^[a-z0-9_]{3,16}$/
    if (ten == "") {
      $("#errten").html("Ten khong duoc rong");
      return false;
    }
    else if (!ktcp.test(ten)) {
      $("#errten").html("Ten khong dung cu phap");
      return false;
    }
    else {
      $("#errten").html("(*)");
      return true;
    }
  }
  $("#usernameLogin").blur(function (e) {
    kttendn();
  });

 function ktmk(){
  let mk= $("#passwordLogin").val();
  let ktcp=   /^[a-z0-9_]{6,18}$/
  if(mk == ''){
  $("#errmk").html("khong duoc de trong");
return false;
  }
else if(!ktcp.test(mk)){

 $("#errmk").html("Mat khau sai cu phap");
return false;
}
else{
  $("#errmk").html("");
  return true;
}
 }

  $("#passwordLogin").blur(function (e) {
    ktmk();
  });

  function kttendk() {
    let ten = $("#usernameSignup").val();
    let ktcp= /^[a-z0-9_]{3,16}$/
    if (ten == "") {
      $("#errtendk").html("Ten khong duoc rong");
      return false;
    }
    else if (!ktcp.test(ten)) {
      $("#errtendk").html("Ten khong dung cu phap. Moi nhap lai");
      return false;
    }
    else {
      $("#errtendk").html("");
      return true;
    }
  }
  $("#usernameSignup").blur(function (e) {
    kttendn();
  });

  function ktmkdk(){
    let mk= $("#passwordSignup").val();
    let ktcp= /^[a-z0-9_]{6,18}$/;
  
    if(mk == ''){
      $("#errmkdk").html("Không được để trống");
      return false;
    }
  
    else if(!ktcp.test(mk)) {
      $("#errmkdk").html("Mật khẩu sai cú pháp");
      return false;
    }
  
    else{
      let mk2 = $("#RepasswordSignup").val();
      if (mk === mk2) {
        $("#errmkdk").html("");
        return true;
      } else {
        $("#errmkdk").html("Mat khau khong khop");
        return false;
      }
    }
  }