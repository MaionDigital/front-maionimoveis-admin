function loaderBtn(btn, color="text-light") {
    $(btn).children().remove()
    $(btn).prop("disabled", true)
    $(btn).append(
        $("<span>")
        .addClass(`${color}`)
        .text("Aguarde... "),
        $("<span>")
        .addClass(`spinner-border spinner-border-sm ${color}`)
    )
}

function unloaderBtn(btn, text, color="text-light") {
    $(btn).children().remove()
    $(btn).prop("disabled", false)
    $(btn).append(
        $("<span>")
        .addClass(`${color}`)
        .html(`${text}`)
    )
}