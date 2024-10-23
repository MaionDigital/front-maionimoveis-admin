$(document).ready(() => {
    if (!ensureAuth()) {
        changePage("index.php")
    }
})