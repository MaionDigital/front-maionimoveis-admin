$(document).ready(function() {
    const showNavbar = (toggleId, navId, bodyId, headerId, navLogoId) => {
        const toggle = $(`#${toggleId}`)
        const nav = $(`#${navId}`)
        const bodypd = $(`#${bodyId}`)
        const headerpd = $(`#${headerId}`)

        let navLogo

        if (window.innerWidth >= 768) {
            navLogo = $(`#${navLogoId}`)
        }

        // Validate that all variables exist
        if(toggle.length && nav.length && bodypd.length && headerpd.length) {
            toggle.on('click', () => {
                nav.toggleClass('show')
                toggle.toggleClass('bx-x')
                bodypd.toggleClass('body-pd')
                headerpd.toggleClass('body-pd')
                navLogo?.toggleClass('d-none')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'nav-logo')
    
    const linkColor = $('.nav_link')

    function colorLink() {
        linkColor.removeClass('active')
        $(this).addClass('active')
    }

    linkColor.on('click', colorLink)
})