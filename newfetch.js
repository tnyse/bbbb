  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json';
  fetch(url)
    .then((resp) => resp.json())
    .then(tnyse => resp())
    .then(function(data) {


      

      return authors.map(function(author) {
        let li = createNode('li'),
          //  img = createNode('img'),
          span = createNode('span');
        //  img.src = author.gsx.;
        span.innerHTML = `<h4>${author.gsx$nameofbusiness.$t} : ${author.gsx$businessdescription.$t} </h4> ${author.gsx$address.$t} </br> `;
        append(li, img);
        append(li, span);
        append(ul, li);

      })
    })


    .catch(function(error) {
      console.log(JSON.stringify(error)); 
         });