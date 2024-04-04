
  /* GET https://newsapi.org/v2/everything?q=Apple&from=2024-04-02&sortBy=popularity&apiKey=76fe5af7bd694c1abdbc3f641eb9c676 */


const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){

  if (input.value == ''){
    alert('Input field is empty!')
    return
  }

  newsList.innerHTML = ''

  e.preventDefault()

  const apiKey = '76fe5af7bd694c1abdbc3f641eb9c676'
  let topic = input.value;
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
  

  fetch(url).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data)
    if (data.articles && Array.isArray(data.articles)) {
      data.articles.forEach((article) => {
        
        let li = document.createElement('li');
        let a = document.createElement('a');
        let img = document.createElement('img'); // Create img element
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.textContent = article.title;
        img.src = article.urlToImage; // Set src attribute of img to article's image URL
        img.alt = article.title; // Set alt attribute of img to article's title
        li.appendChild(img); // Append img to li
        li.appendChild(a);
        newsList.appendChild(li);
      });
      
    } else {
      console.error("Articles data is not available or not an array.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });



