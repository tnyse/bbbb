// get the file
fetch('https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
   //  data = response.json;
   //  // Work with JSON data here
   // var mylist = data.feed.entry;
   var myData = data
   console.log(myData);

  })
  .catch((err) => {
    // Do something for an error here
  })

  var list = JSON.parse(myData);

  console.log(list);

  

  // myJSON is text received in JSON format.
// Convert JSON into a JavaScript object:
// var myObj = JSON.parse(mylist);
// document.getElementById("list").innerHTML = mylist;

  // var names = data.feed.entry[i]

  // function addtolist(){
  //   x = document.getElementById("list")
  //   x.innerHTML = names

  // }


