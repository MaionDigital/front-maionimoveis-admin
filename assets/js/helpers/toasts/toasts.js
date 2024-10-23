function createTextToast(title="", text="") {
    $("#text-toast").remove()

    const toast = 
    `
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999;">
        <div class="toast hide" id="text-toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-primary">
                <span class="text-white fw-bold">
                    ${title}
                </span>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            <span class="text-black">
                ${text}
            </span>
            </div>
        </div>
    </div>
    `

    $("body").append(toast)
    new bootstrap.Toast($("#text-toast")).show()
}

function createOpsToast(text="") {
    $("#ops-toast").remove()

    const toast = 
    `
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999;">
        <div class="toast hide" id="ops-toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-danger">
                <span class="text-white fw-bold">
                    Algo deu errado...
                </span>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            <span class="text-black">
                ${text}
            </span>
            </div>
        </div>
    </div>
    `

    $("body").append(toast)
    new bootstrap.Toast($("#ops-toast")).show()
}

function createSuccessToast(title="", text="") {
    $("#success-toast").remove()

    const toast = 
    `
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999;">
        <div class="toast hide" id="success-toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-secondary">
                <span class="text-white fw-bold">
                    ${title}
                </span>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            <span class="text-black">
                ${text}
            </span>
            </div>
        </div>
    </div>
    `

    $("body").append(toast)
    new bootstrap.Toast($("#success-toast")).show()
}