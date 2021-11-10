function getPosts(){
  let endpoint = 'https://spreadsheets.google.com/feeds/list/1LWA2-LJ_KOXu2frtYK2_hgyOa4DJLxWVO4D9SlAg-dA/2/public/values?alt=json';
        fetch(endpoint)
        .then((response=>{
          // Returning it in JSON format
            return response.json()
        }))
        .then((data=>{
          // Displaying it to the DOM
           let output = "<h3>Posts:</h3>"+
                       "<div class='form-group'>"+
                        // We will use this input later on to search for posts
                       "<input type='text' id='search' class='form-control' placeholder='search by title or ID..'>"+
                       "</div>";
            data.forEach(post => {
                output += `
            <ul class="list-group mb-3" id="${post.id}">
              <li class="list-group-item"><strong>ID:</strong> ${post.id}</li>
              <li class="list-group-item"><strong>Title:</strong> ${post.title}</li>
              <li class="list-group-item"><strong>Body:</strong> ${post.body}</li>
            </ul>
          `;
            });
           document.getElementById('posts').innerHTML = output;



           /////////////////////
           /// 
           /// 
           ///


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
  .then(function(data) {

    let authors = data.feed.entry;
    return authors.map(function(author) { 
      let li = createNode('li'),
        //  img = createNode('img'),
          span = createNode('span');
    //  img.src = author.gsx.;
      span.innerHTML = `<h4>${author.gsx$nameofbusiness.$t} : ${author.gsx$businessdescription.$t} </h4> ${author.gsx$address.$t} </br> `;
    //  append(li, img);
      append(li, span);
      append(ul, li);
      console.dir(authors.gsx$timestamp); 
    })
  }) 
  .catch(function(error) {
    console.log(JSON.stringify(error));
  }); 
