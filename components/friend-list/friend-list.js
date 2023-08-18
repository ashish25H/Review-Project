async function renderFriendList() {
    let response = await fetch('components/friend-list/friend-list.mustache');
    let template = await response.text();
    let images = JSON.parse(localStorage.getItem('friends'));
    let fourFriends = images.splice(0,4);

    let img = {
        arr: images,
        firstFourFriends : fourFriends,
    }

    document.getElementById('friend-list').innerHTML = Mustache.render(template, img);

    $('#count').text(images.length);

    $('.see-more-btn').click(function() {
        $('.extra-img').show();
        $(this).hide();
        $('.see-less-btn').show();
    });

    $('.see-less-btn').click(function() {
        $('.extra-img').hide();
        $(this).hide();
        $('.see-more-btn').show();
    });
}

renderFriendList();
window.renderFriendList = renderFriendList;