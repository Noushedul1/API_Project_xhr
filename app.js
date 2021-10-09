var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true);
    xhr.onload = function(){
        if(this.status == 200){
            var m = JSON.parse(this.responseText);
            console.log(m);
            var output = '';
            for(var i in m){
                output += '<div class="insideDiv">'+
                '<img src=" '+m[i].avatar_url+' " height="70" width="70">'+
                '<ul>'+
                '<li>ID : '+m[i].id+' </li>'+
                '<li>Login : '+m[i].login+'</li>'+
                '</li>'+
                '</div>';
            }
            document.getElementById('fetching').innerHTML = output;
        }else if(this.status == 404){
            document.getElementById('fetching').innerHTML = 'Not found';
        }
    }
    xhr.send();
});