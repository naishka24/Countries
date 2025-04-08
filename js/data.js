const data = []

fetch("/js/db.json")
  .then(res => res.json())
  .then(info => {
    data.push(...info)
    data.map((item, i) => {
      item.id = i + 1
    })
    
    if (typeof show === "function") show()
    if (typeof detailShow === "function") detailShow()
    if (typeof handlePagination === "function") handlePagination()
    if (typeof showRandomArticle === "function") showRandomArticle()
    if (typeof showBorders === "function") showBorders()
  })