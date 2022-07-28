/* HEADER */
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-primary border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Registro Médico</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="padecimientos.html">Padecimientos Registrados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="tratamientos.html">Tratamientos Asignados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="medicamentos.html">Medicamentos Recetados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="expediente.html">Expediente Médico</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ajustes</a>
                            <div class="dropdown-menu ml-2">
                                <a class="nav-link text-dark" href="">Cuenta</a>
                                <a class="nav-link text-dark" href="">Salir</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`
    }
}
customElements.define('my-header', MyHeader);

/* FOOTER */
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="border-top footer text-muted" style="bottom: 0px; top: 95%; position:fixed;">
        <div class="container p-2">
            &copy; Registro Médico 2022
        </div>
    </footer>`
    }
}
customElements.define('my-footer', MyFooter);