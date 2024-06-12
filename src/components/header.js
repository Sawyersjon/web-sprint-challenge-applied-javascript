const Header = (title, date, temp) => {

  let header = document.createElement('div')
  let spanDate = document.createElement('span')
  let headingOne = document.createElement('h1')
  let spanTemp = document.createElement('span')

  spanDate.classList.add('date')
  header.classList.add('header')
  spanTemp.classList.add('temp')

  spanDate.textContent = date
  headingOne.textContent = title
  spanTemp.textContent = temp

  
  
  

  
  header.appendChild(spanDate)
  header.appendChild(headingOne)
  header.appendChild(spanTemp)



  return header

  


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  
  const headerSpot = document.querySelector(selector)
  headerSpot.appendChild(Header('Billy Bob', 'December 24, 2020', '15'))
  return headerSpot
    
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }
