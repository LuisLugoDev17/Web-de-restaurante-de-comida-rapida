// function showMenu(menuId) {
//     var menus = document.querySelectorAll('.menu li');
    
//     // Ocultar todos los elementos del menú excepto el seleccionado
//     menus.forEach(function(menu) {
//         if (menu.id !== menuId) {
//             menu.classList.remove('active');
//         } else {
//             menu.classList.add('active');
//         }
//     });

//     // Mostrar u ocultar los elementos del menú según su ID
//     var menuItems = document.querySelectorAll('.menu .burguers');
//     menuItems.forEach(function(item) {
//         if (item.id === menuId) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// function showMenu(menuId) {
//     var menus = document.querySelectorAll('.menu li div');
//     var ingredients = document.querySelectorAll('.menu li div .ingredients')
    
//     // Ocultar todos los elementos del menú excepto el seleccionado
//     menus.forEach(function(menu) {
//         if (menu.id !== menuId) {
//             menu.classList.remove('active');
//         } else {
//             menu.classList.add('active');
//         }
//     });

//     // Mostrar u ocultar los elementos del menú según su ID
//     var menuItems = document.querySelectorAll('.menu .burguers');
//     menuItems.forEach(function(item) {
//         if (item.id === menuId) {
//             item.style.display = 'block';
//             ingredients.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

var menu = document.querySelectorAll('.menu li')
var tab = document.getElementById("hola")
var tab2 = document.querySelectorAll('.tab2')
var tab3 = document.querySelectorAll('.tab3')

document.getElementById("hola").addEventListener("click", function() {
    alert("¡Botón clickeado!");
});