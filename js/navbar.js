const reg = document.getElementById('regions')
const adlar = document.getElementById('adlar')
const region = new URLSearchParams(location.search).get('region')
let regionData = []

fetch('/js/db.json')
.then(res => res.json())
.then(info =>  {
  info.map((el, i) => {
    el.id = i + 1
  })
  regionData = info.filter(elem => elem.region === region)
  showRegion()
})

function showRegion() {
  reg.innerHTML = ''
  regionData.forEach(item => {
    reg.innerHTML += `
        <article class="flex flex-col dark:bg-gray-50">
          <a rel="noopener noreferrer" href="../pages/detail.html?id=${item.id}" aria-label="Te nulla oportere reprimique his dolorum">
            <img alt="" class="object-cover w-full h-45 dark:bg-gray-500" src="${item.flags.png}">
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
            <a rel="noopener noreferrer" href="#" class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"></a>
            <h3 class="flex-1 text-lg font-semibold leading-snug">${item.name.common}</h3>
            <div class="flex flex-col justify-between space-x-2 text-xs dark:text-gray-600">
              <span class="py-2">${item.name.official}</span>
              <span class="py-2 underline text-black">Area: ${item.area} km<sup>2</sup></span>
            </div>
          </div>
      </article>
  `
  })
}

if (adlar && region) {
  adlar.innerHTML += `All countries located in ${region}`
}