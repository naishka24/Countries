const content = document.getElementById('content')
const randomArticle = document.getElementById('randomArticle')
const btns = document.getElementById('btns')
let count = 16
function show() {
  content.innerHTML = ''

  data
    .slice(count - 16, count)
    .map(item => {
      content.innerHTML += `
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

function handlePagination() {
  Array(Math.ceil(data.length / count))
    .fill("")
    .map((_, i) => btns.innerHTML += `<button onclick="artir(${i + 1})" class="cursor-pointer p-[10px] py-[8px] border border-black hover:scale-110 rounded-[8px]">${i + 1}</button>`)

}
function artir(x) {
  count = x * 16
  show()
  scrollTo({
    top : content.offsetTop,
    behavior : "smooth"
  })
}

function showRandomArticle() {
  randomArticle.innerHTML = ''

  const randomCountry = Math.floor(Math.random() * data.length)
  const item = data[randomCountry]
    randomArticle.innerHTML += `
    <div class="m-[50px] p-[20px] dark:bg-gray-100 rounded-[8px]">
    <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
      <img src="${item.flags.png}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
      <div class="p-6 space-y-2 lg:col-span-5">
        <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${item.name.common}</h3>
        <h3 class="text-2xl p-2 font-medium sm:text-2xl bg-gray-200 rounded-[8px]"> Capital: ${item.capital}</h3>
        <h3 class="text-2xl my-3 p-2 sm:text-xl bg-gray-200 rounded-[8px]"> Region: ${item.region}</h3>
        <span class="p-2 my-3 mr-3 text-black bg-gray-200 rounded-[8px]">Population: ${item.population.toLocaleString()}</span> 
        <span class="p-2 underline text-black bg-gray-200 rounded-[8px]">Area: ${item.area} km<sup>2</sup></span> 
        <p class="my-3 p-2 bg-gray-200 rounded-[8px]">Bordered Countries: <br>${item.borders === undefined ? '' : item.borders.join(' ')}</p>
        <p class="my-3 p-2 bg-gray-200 rounded-[8px]">Languages: <br>${Object.values(item.languages).join(' ')}</p>
      </div>
    </a>
  </div>`
}
