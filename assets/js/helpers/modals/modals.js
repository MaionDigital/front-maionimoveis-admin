function addUserModal() {
    $('#modal-add-user').remove()

    const modalHTML = 
    `
    <div class="modal fade" id="modal-add-user" tabindex="-1" aria-labelledby="modal-text-label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title text-white" id="modal-text-label">
              Adicionar Usuário
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div class="modal-body text-center">

            <div class="row mb-3">
                <div class="col">
                    <input class="form-control" type="text" id="input-name" placeholder="Nome" required>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col">
                    <input class="form-control" type="password" id="input-password" placeholder="Senha" required>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col">
                    <select class="form-control form-select" id="input-role" required>
                        <option value="manager">Gerente</option>
                    </select>
                </div>
            </div>

        </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-sm bg-primary" onclick="registerUser(this)" id="modal-add-user-btn">
              <span class="text-white">Cadastrar</span>
            </button>
          </div>

        </div>
      </div>
    </div>
    `
    
    $("body").append(modalHTML)

    new bootstrap.Modal($("#modal-add-user")).show()
}