function randomPic(url) {
  $.getJSON(url, function(response) {
    parseDogPic(response);
  });
}

const parseDogPic = json => {
  console.log(json.url);
  document.getElementById("puppyLove").src = json.url;
};
