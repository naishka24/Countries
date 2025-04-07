const main = document.getElementById("main")
const id = new URLSearchParams(location.search).get("id")

function detailShow() {
const item = data.find(elem => elem.id == id)

  main.innerHTML = `
    <div class="my-[100px] mx-[50px] p-[20px] dark:bg-gray-100 rounded-[8px]">
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