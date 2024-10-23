function changePage(page, blank=false) {
    const baseURL = `${window.location.origin}/projects/realestate_front_admin`

    blank
    ?
    window.open(`${baseURL}/${page}`)
    :
    window.location.href = `${baseURL}/${page}`
}