var count = 0;

setInterval(function() {

    var heart = document.querySelector('button.coreSpriteHeartOpen');
    var next = document.querySelector('a.coreSpriteRightPaginationArrow');
    if(heart) {
        heart.click();
        count++;
        console.log(`I've liked ${count} photo(s).`);
    }
    next.click();
}, 3000);