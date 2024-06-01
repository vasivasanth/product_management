function openNewUserForm(){
    var newuser = document.getElementById('new-user');
    var bg = document.getElementById('bg');
    var lg= document.getElementById('new-user');
    bg.style.backgroundColor="#848484";
    lg.style.visibility="hidden";
    newuser.style.display="none";
    newuser.style.visibility="visible";
    newuser.style.display="block";
}