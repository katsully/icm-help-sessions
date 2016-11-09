var inp;
var button;
var searchTerm = "Apple";
var url;
var info = [];
var counter = 0;
var buttonPrev, buttonNext;
var p1, p2;
var link;

function setup() {
  url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json';
  loadJSON(url, gotData, 'jsonp');

  inp = createInput(searchTerm);
  button = createButton('SEARCH');
  button.mousePressed(searchWiki);

  buttonPrev = createButton('See Prev Result');
  buttonPrev.mousePressed(seePrev);
  buttonNext = createButton('See Next Result');
  buttonNext.mousePressed(seeNext);
  
  p1 = createP('').position(75, 25).style('font-weight', 'bold');
  p2 = createP('').position(75, 50);
  link = createA('').position(75, 200);
}

function gotData(data) {
  console.log(data[1]);
  info = data.slice(1, data.length);
  displayData();
}

function searchWiki() {
  searchTerm = inp.value();
  url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json';
  loadJSON(url, gotData, 'jsonp');
  counter = 0;
}

function displayData(){
  p1.html(info[0][counter]);
  p2.html(info[1][counter]);
  link.html(info[2][counter]);
}

function seePrev() {
  if(counter > 0){
    counter--;
  }
  displayData();
}

function seeNext() {
  if(counter < info[0].length-1){
    counter++;
  }
  displayData();
}