function playTrailer(n){
    var cont = document.getElementById('container-player');
    cont.style.display = 'block';
    var trailer;
    var player = document.getElementById('player');
    switch(n){
        case 1:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oVzVdvGIC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 2:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/X4bF_quwNtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 3:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Yi4YnwFT7Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 4:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xl8zdCY-abw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 5:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/FAdiEjeNRi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 6:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xCwwxNbtK6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 7:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9GgxinPwAGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 8:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mnd7sFt5c3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 9:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_InqQJRqGW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 10:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0ZXdPhfMbAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 11:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SveaGIlBL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 12:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/i1eJMig5Ik4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 13:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/HhesaQXLuRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
    }
}

function stopTrailer(){
    var cont = document.getElementById('container-player');
    cont.style.display = 'none';
    var trailer;
    var player = document.getElementById('player');
    player.innerHTML = '';
}