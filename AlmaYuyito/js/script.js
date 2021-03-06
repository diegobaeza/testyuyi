/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	var element = document.getElementById("nav-lateral");

	if(element.style.display === "none" ){
		element.style.display = "block";
	}else{
		element.style.display = "none";
	}
	
}

function semiColapsar() {
	var element = document.getElementById("nav-lateral");
	var contenido = document.getElementById("contenido");
    var icFlecha = document.getElementById("icono-flecha");
    var menuParrafos = document.getElementsByClassName("item-menu-text");
    var menuIconos = document.getElementsByClassName("item-menu-icon");
    var i;

    var lblproveedor = document.getElementById("lblProveedor");
    
    if (element.style.width === "4rem") {

        

        if (screen.width > 799 && screen.width < 1001) {
            element.style.width = "30%";
        }
        else{
            element.style.width = "15rem";
            
        }

        //contenido.style.width = "100%";
        icFlecha.classList.add("invertir");

        
        for (i = 0; i < menuParrafos.length; i++) {
            menuParrafos[i].classList.remove('hidden');
        } 

        for (i = 0; i < menuIconos.length; i++) {
            menuIconos[i].classList.remove('icon-semi-collapse');
        } 
        
    }
    else {
       
        element.style.width = "4rem";
        
        //contenido.style.width = "100%";
        icFlecha.classList.remove("invertir");


       

        for (i = 0; i < menuParrafos.length; i++) {
            menuParrafos[i].classList.add('hidden');

        } 

        for (i = 0; i < menuIconos.length; i++) {
            menuIconos[i].classList.add('icon-semi-collapse');
        } 
	}
	
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  	var element = document.getElementById("nav-lateral");


  	if(element.style.display === 'none' ){
		element.classList.add("nav-abierto");
	}

}

function prueba(){
	var element = $('#nav-lateral');

    var contenido = $('#contenido');

    var icFlecha = $("icono-flecha");

    if (element.width === "5%") {
        element.width = "20%";
        contenido.width = "100%";
        icFlecha.toggleClass("invertir");
    } else {
        element.width = "5%";
        contenido.width = "95%";
        icFlecha.toggleClass("invertir");
    }
}



function mostrarSubmenu(id) {


    document.getElementById(id).classList.toggle("show");
    document.getElementById(id).classList.toggle("v-zero");
    document.getElementById(id).classList.toggle("v-visible");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.sub-menu')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function float2dollar(value) {
    return "$" + Math.round((value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
}


function crearChartLine() {
    // chart colors
    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* large line chart */
    var ch = document.getElementById("chLine");

    if (ch) {

        new Chart(ch, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    data: [750, 445, 483, 503, 689, 692, 634, 700, 445, 483, 503, 689],
                    backgroundColor: '#0059b6',
                    borderColor: '#007bff',
                    borderWidth: 1,
                    pointBackgroundColor: '#007bff',
                    pointHoverRadius: 20
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Grafico Ingresos',
                    fontSize: 60
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            callback: function (value, index, values) {
                                return float2dollar(value);
                            },
                            fontSize: 40
                        }
                    }],

                    xAxes: [{ ticks: { fontSize: 25} }]
                },
                legend: {
                    display: false
                    
                }
            }
        });
    }


    var ch = document.getElementById("chBar");

    if (ch) {

        new Chart(ch, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    data: [750, 445, 483, 503, 689, 692, 634, 700, 445, 483, 503, 689],
                    backgroundColor: '#0059b6',
                    borderColor: '#007bff',
                    borderWidth: 1,
                    pointBackgroundColor: '#007bff'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Grafico Clientes',
                    fontSize: 60
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            callback: function (value, index, values) {
                                return float2dollar(value);
                            },
                            fontSize: 40
                        }
                    }],

                    xAxes: [{ ticks: { fontSize: 25 } }]
                },
                legend: {
                    display: false

                }
            }
        });
    }


    var ch = document.getElementById("chPie");

    if (ch) {

        new Chart(ch, {
            type: 'pie',
            data: {
                labels: ['Producto1', 'Producto2', 'Producto3', 'Producto4', 'Producto5'],
                datasets: [{
                    data: [750, 445, 483, 503],
                    backgroundColor: '#0059b6',
                    borderColor: '#007bff',
                    borderWidth: 1,
                    pointBackgroundColor: '#007bff',
                    pointHoverBorderWidth: 40,
                    pointHitRadius: 10
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Grafico Productos',
                    fontSize: 60
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            
                            fontSize:35
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }
}



function crearChartPie() {
    // chart colors
    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

    /* large line chart */
    var ch = document.getElementById("chLine");

    if (ch) {

        new Chart(ch, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    data: [750, 445, 483, 503, 689, 692, 634, 700, 445, 483, 503, 689],
                    backgroundColor: '#0059b6',
                    borderColor: '#007bff',
                    borderWidth: 1,
                    pointBackgroundColor: '#007bff'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            callback: function (value, index, values) {
                                return float2dollar(value);
                            }
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }
}