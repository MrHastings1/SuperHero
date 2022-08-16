//https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = '178303514607723'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroButton = document.getElementById('heroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
  //name 👉🏾 base_url/search/batman
  //id: base_url/id
  //json.results[0].image.url

  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    //console.log(json)
    //console.log getHeroInfo())
    const superHero = json
    getHeroInfo(superHero)
    //const intelligence = `<p>🧠 intelligence: ${json.powerstats.intelligence}</p>`
    //const strength = `<p>💪🏾 Strength: ${json.powerstats.strength}</p>`
   // const name = `<h2>${json.name}</h2>`
  //heroImageDiv.innerHTML += `${name}<img src="${json.image.url}" height = 200 width = 200/>${stats}`
})
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪🏾',
  speed: '🏎',
  durability: '🏋🏾‍♀️',
  power: '🔌',
  combat: '⚔️'
}

const getHeroInfo = (charactor) => {
  const name = `<h2>${charactor.name}</h2>`
  const img = `<img src="${charactor.image.url}" height = 200 width = 200/>`
  const stats = Object.keys(charactor.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${charactor.powerstats[stat]}</p>`
  }).join('')
  //console.log(stats.join(''))
  heroImageDiv.innerHTML += `${name}${img}${stats}`
  //return stats.join('')
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    getHeroInfo(hero)
    // heroImageDiv.innerHTML += `<img src="${hero.image.url}" height = 200 width 200/>`
  })
}

const randomHero = () => {
  return Math.floor(Math.random()*731) + 1
}

heroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)

// const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'
// document.querySelector('body').innerHTML += 'Thanos'
// document.querySelector('body').innerHTML += `<img src="${img}" height = 200 width = 200/>`