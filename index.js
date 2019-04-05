document.addEventListener('DOMContentLoaded', () => {
  const catContainer = document.getElementById('cat-container')

  catContainer.innerHTML = renderCats()



//When a user click son the header at the top, it should turn blue
  const header = document.querySelector("h1#cat-header")

  header.addEventListener("click", function(e) {
	   e.target.className = "ui blue header center aligned"
  })

//When a user clicks on the name of any cat, it should turn green.
const container = document.querySelector("#cat-container")
const catName = document.querySelectorAll("div.ui.header")
const up = document.querySelectorAll("i.thumbs.up.icon")

container.addEventListener("click", function(e) {
  if (e.target.dataset.action === "change-color") {
    e.target.className = "ui header green"
  } else if (e.target.dataset.action === "like") {
    console.log(e.target.dataset.id)
    const id = parseInt(e.target.dataset.id)
    const number = container.querySelector(`#cat-${id}`)
    let currentLikeCounter = parseInt(number.innerText)
    currentLikeCounter += 1
    number.innerText = currentLikeCounter
  }

})




})

function renderOneCat(cat) {
  return `<div class="ui card">
            <div class="image">
              <img src="${cat.photo}" height='100%'>
            </div>
            <div class="content">
              <div data-action='change-color' class="ui header">${cat.name}</div>
              <div class="meta">
                <span class="breed">Breed: ${cat.breed}</span>
              </div>
            </div>
            <div class="extra content">
              <a>
                <i data-action='like' data-id='${cat.id}' class="thumbs up icon"></i>
                <span id='cat-${cat.id}'>${cat.likes}</span> Likes
              </a>
            </div>
          </div>`
}

function renderCats() {
  return CATS.map(renderOneCat).join('')
}
