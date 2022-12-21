import axios from 'axios'

const Card = (article) => {
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

  const cardWrapper = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardImgCon = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardName = document.createElement('span');

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgCon);
  cardAuthor.appendChild(cardName);
  cardImgCon.appendChild(cardImg);

  cardWrapper.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  cardImgCon.classList.add('img-container');

  cardName.textContent = article.authorName;
  cardImg.src = article.authorPhoto;
  cardHeadline.textContent = article.headline;

  cardWrapper.addEventListener('click', event => {
    console.log(article.headline);
  })

  return cardWrapper;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let cardCreator = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
    .then(resp => {
      let articlesData = resp.data;

      let articlesArr = [];
      articlesArr.push(articlesData.articles.javascript[0]);
      articlesArr.push(articlesData.articles.javascript[1]);
      articlesArr.push(articlesData.articles.javascript[2]);
      articlesArr.push(articlesData.articles.javascript[3]);
      articlesArr.push(articlesData.articles.bootstrap[0]);
      articlesArr.push(articlesData.articles.bootstrap[1]);
      articlesArr.push(articlesData.articles.bootstrap[2]);
      articlesArr.push(articlesData.articles.technology[0]);
      articlesArr.push(articlesData.articles.technology[1]);
      articlesArr.push(articlesData.articles.technology[2]);
      articlesArr.push(articlesData.articles.jquery[0]);
      articlesArr.push(articlesData.articles.jquery[1]);
      articlesArr.push(articlesData.articles.jquery[2]);
      articlesArr.push(articlesData.articles.node[0]);
      articlesArr.push(articlesData.articles.node[1]);


      articlesArr.forEach(item => {
          const articleCard = Card(item);
          cardCreator.appendChild(articleCard);
        });
    })
    .catch(err => {
      console.log("Shoots brah!", err);
    });
  
    return cardCreator;

}

export { Card, cardAppender }
