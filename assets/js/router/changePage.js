function changePage(page, blank=false) {
    blank
    ?
    window.open(`${baseURL}/${page}`)
    :
    window.location.href = `${baseURL}/${page}`
}