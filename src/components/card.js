const Card = (article) => {


    let container = document.createElement('div')
    let headlineHTML = document.createElement('div')
    let authorHTML = document.createElement('div')
    let imgContainerHTML = document.createElement('div')
    let imgHTML = document.createElement('img')
    let spanName = document.createElement('span')

    container.classList.add('card')
    headlineHTML.classList.add('headline')
    authorHTML.classList.add('author')
    imgContainerHTML.classList.add('img-container')
  
    headlineHTML.textContent = article.headline
    imgHTML.src = article.authorPhoto
    spanName.textContent = article.authorName

    imgContainerHTML.appendChild(imgHTML)
    authorHTML.appendChild(imgContainerHTML)
    authorHTML.appendChild(spanName)
    container.appendChild(headlineHTML)
    container.appendChild(authorHTML)

    container.addEventListener('click', () =>{
      console.log(headlineHTML.textContent)
  })
  return container

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let a = document.querySelector(selector)
  axios.get('http://localhost:5000/api/articles')
  .then(response => {
    a.appendChild(Card(response.data.articles))
  })
  return a
  


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
