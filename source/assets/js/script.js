function func(n){
    var trailer;
    var player = document.getElementById('player');
    switch(n){
        case 11:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SveaGIlBL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        case 12:
            trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/i1eJMig5Ik4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            player.innerHTML = trailer;
            break;
        default:
            window.alert();
    }
}