/*
    Use the data to create HTML
*/

// Variables

var user1 = {
  userName: '@elonmusk',
  displayName: 'Elon Musk',
  joinedDate: 'June 2009',
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: 'assets/elonmusk.jpg',
  coverPhotoURL: 'assets/elonmusk-cover.jpeg',
  tweets: [
      {
          text: 'I admit to judging books by their cover',
          timestamp: '2/10/2021 00:01:20'
      },
      {
          text: 'Starship to the moon',
          timestamp: '2/09/2021 18:37:12'
      },
      {
          text: 'Out on launch pad, engine swap underway',
          timestamp: '2/09/2021 12:11:51'
      }
  ]
};

var user2 = {
  userName: '@BillGates',
  displayName: 'Bill Gates',
  joinedDate: 'June 2009',
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: 'assets/billgates.jpg',
  coverPhotoURL: 'assets/billgates-cover.jpeg',
  tweets: [
      {
          text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
          timestamp: '2/10/2021 00:01:20'
      },
      {
          text: 'Should I start tweeting memes? Let me know in a comment.',
          timestamp: '2/09/2021 18:37:12'
      },
      {
          text: 'In 2020, I read a book every hour.',
          timestamp: '2/09/2021 12:11:51'
      }
  ]
};

// Integrate data to HTML

let userData = user1;
$(`
<div class = "header-details">
<div class = "header-details-name">
    <h1>${userData.displayName}</h1>
    <img src = "assets/twitter-verified-check.jpg">
  </div>
  <p>${userData.tweets.length} Tweets</p>
</div>
<div
`)
  .appendTo($('.header-container'));

$(`
<img src = "${userData.coverPhotoURL}">
`)
  .appendTo($('.cover-photo-container'));

$(`
<div class = "profile-details-left">
  <div class = "profile-pic">
    <img src = "${userData.avatarURL}">
  </div>
  <div class = "profile-details">
    <div class = "profile-name">
      <h1>${userData.displayName}</h1>
      <img src = "assets/twitter-verified-check.jpg">
    </div>
    <p>${userData.userName}</p>
    <div class = "join-date">
      <img src = "assets/calendar.png">
      <p>Joined ${userData.joinedDate}</p>
    </div>
    <div class = "followers">
      <p><span>${userData.followingCount}</span> Following</p>
      <p><span>${(userData.followerCount / 1000000).toFixed(1)} M</span> Followers</p>
    </div>
  </div>
</div>
<div class = "profile-details-right">
  <button>Following</button>
</div>
`)
  .appendTo($('.profile-details-container'));

$(`
<div class = "profile-tabs">
  <h3>Tweets</h3>
  <h3>Tweets & Replies</h3>
  <h3>Media</h3>
  <h3>Likes</h3>
</div>
`)
  .appendTo('.tweets-container');

let tweetContainer = document.getElementsByClassName('.tweets-container');
userData.tweets.forEach(function(tweet) {
  let tweetDiv = document.createElement('div');
  tweetDiv.classList.add('tweet');
  tweetDiv.innerHTML = `
    <div class = "tweet-left">
    <div class = "tweet-profile-pic">
      <img src = "${userData.avatarURL}">
    </div>
    <div class = "tweet-details">
      <div class = "tweets-user">
        <h3>${userData.displayName}</h3>
        <img src = "assets/twitter-verified-check.jpg">
        <p>${userData.userName}</p>
        <span>&#183;</span>
        <p>${new Date(tweet.timestamp).toLocaleString()}</p>
      </div>
      <div class = "tweet-message">
        <p>${tweet.text}</p>
      </div>
      <div class = "social-icons">
        <div class = "comments">
          <img src = "assets/speech-bubble.png">
          <p>15.6K</p>
        </div>
        <div class = "retweets">
          <img src = "assets/retweet.png">
          <p>5.4K</p>
        </div>
        <div class = "likes">
          <img src = "assets/love.png">
          <p>66.2K</p>
        </div>
        <div class = "share">
          <img src = "assets/share.png">
        </div>
      </div>
    </div>
  </div>
  <div class = "tweet-right">
    <div class = "more">
        <img src = "assets/more.png">
    </div>
  </div>
  `;
  $(tweetDiv).appendTo($('.tweets-container'));
});




