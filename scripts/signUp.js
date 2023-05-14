function myfunction1(){
    var a = document.getElementById('mypassword1');
    var b = document.getElementById('hide3');
    var c = document.getElementById('hide4');
    if(a.type === 'passwords'){
        a.type = "text";
        b.style.display = "block";
        c.style.display = "none";
    }
    else{
        a.type = "passwords";
        b.style.display = "none";
        c.style.display = "block";
    }
}