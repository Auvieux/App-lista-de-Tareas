window.addEventListener('load', ()=> {
    const formCrear = document.getElementById('form-crear')
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')


    formCrear.addEventListener('submit',(e)=> {
        e.preventDefault()
        capturarValor()
    })

    const capturarValor = () => {
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('debe ingresar una tarea')
    }

    
    const mostrarTareaHtml = (tarea) => {
        const liHtml = `<li><strong>${tarea}</strong><i class="fa-solid fa-trash-can borrar"></i></li>`;
        listaTareas.innerHTML += liHtml
    }


    inputBuscar.addEventListener('keyup', (e)=> {
        const caracter = inputBuscar.value.trim()
        busqueda(caracter)
    })


    const busqueda = (cadena) =>{ 
        let arreglo = Array.from(listaTareas.children)

        arreglo
        .filter((texto) => !texto.textContent.toLocaleLowerCase().includes(cadena))
        .forEach((cadenaFiltrada) => {
            cadenaFiltrada.classList.add('textoFiltrado')
        })

        arreglo
        .filter((texto) => texto.textContent.toLocaleLowerCase().includes(cadena))
        .forEach((cadenaFiltrada) => {
            cadenaFiltrada.classList.remove('textoFiltrado')
        })
    }



    listaTareas.addEventListener('click', (e)=> {
        if(e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })


})