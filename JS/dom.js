document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');

    for (const friend of friends) {
        //console.log(friend);
        friend.style.backgroundColor = 'lightblue';
    }
})

document.getElementById('center-third').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');

    newFriend.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Something New Added</p>
    `

    friendContainer.appendChild(newFriend);
})

