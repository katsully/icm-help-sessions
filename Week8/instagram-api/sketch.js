var instaData;

function setup(){
  var url = 'https://api.instagram.com/v1/tags/puppy?access_token=483905805.adfb072.8d0f9d5eac3e4ea890ed932929a28ef7'
  instaData = loadJSON(url, printData);
    ;
}

function printData(){
  println(instaData[0])
}
