
// var coffee = document.querySelector('coffeeOrder');
// var email = document.querySelector('emailInput');
// var size = document.getElementsByClassName('radio');
// var shot = document.querySelector('flavorShot');
// var strength = document.querySelector('strengthLevel');

// var coffeeRun = [
//     {
//         coffee,
//         email,
//         size,
//         shot,
//         strength
//     },
//     ];
// console.log(coffeeRun);

// var coffeeOrder = document.querySelector('form');
// coffeeOrder.addEventListener('submit', function() {
//     coffeeOrder.querySelector('[name="coffee"]').value
//     return coffeeRun
// });

// coffeeOrder.onsubmit = function(event) {
//     event.preventDefault();
//     console.log(coffeeOrder);
// }
// $(document).ready(function() {
//     $("submit").click(function() {
//         var data = $('.form').serializeArray();
//         var obj = {};
//         for (var i = 0, l = data.length; i < l; i++) {
//             obj[data[i].name] = data[i].value;
//         console.log(data);
//         }
//         $('table.footable tbody').append('<tr><td>'+obj['coffeeOrder']+'<tr><td>'+obj['emailInput']+'<tr><td>'+obj['radio']+'<tr><td>'+obj['flavorShot']+'<tr><td>'+obj['strengthLevel']);
//         $('.coffeeOrder').value("");
//         $('.emailInput').value("");
//         $('.radio').value("");
//         $('.flavorShot').value("");
//         $('.strengthLevel').value("");
//     })
// })


// var names = [],
//     tbody = $("#table");

// function getInfo(event) {
//     var nameObj = {
//         coffeeOrder: e.target.form[0].value,
//         email: e.target.form[1].value,
//         size: e.target.form[2].value,
//         shot: e.target.form[3].value,
//         strength: e.target.form[4].value,
//     };

//     names.push(nameObj);

//     e.target.form[0].value = "";
//     e.target.form[1].value = "";
//     e.target.form[2].value = "";
//     e.target.form[3].value = "";
//     e.target.form[4].value = "";
//     tbody.empty();

//     names.forEach(function (name) {
//         var tr = $("<tr>");

//         tr.append($("<td>").text(name.coffeeOrder));
//         tr.append($("<td>").text(name.email));
//         tr.append($("<td>").text(name.size));
//         tr.append($("<td>").text(name.shot));
//         tr.append($("<td>").text(name.strength));

//         tbody.append(tr);
//     });
// }

// $("#submit-button").on("click", getInfo);

//Get Item from Form//
// var form = document.getElementById('form');

// function submitOrder() {
//     for (i = 0; i > form.length; i++) {
//         form.onsubmit = function(event) {
//             event.preventDefault();
//             console.log(submitOrder[i].value);
//         }
//     }
// }

var $form = $('#form');
var $coffee = $('#coffeeOrder');
var $email = $('#emailInput');
var $flavor = $('#flavorShot');
var $strength = $('#strengthLevel');
var $orderForm = $('#table');

$form.on('submit', function(e) {
    e.preventDefault();
    
    var $th = $('<th>');
    var $coffeeNameTH = $('<th>').html($coffee.val());
    var $emailAddress = $('<th>').html($email.val());
    var $flavorSelection = $('<th>').html($flavor.val());
    var $caffeineRating = $('<th>').html($strength.val());
    var $size = $('[name="size"]:checked');

    $th.append($coffeeNameTH).append($emailAddress).append($size.val()).append($flavorSelection).append($caffeineRating);
    $orderForm.append($th);
    
    $.post('http://dc-coffeerun.herokuapp.com/api/coffeeorders', function(jsonData) {
        console.log();
    });
    form.reset();

});


$.get('http://dc-coffeerun.herokuapp.com/api/coffeeorders', function(jsonData) {
    console.log();
});
// var form = document.getElementById('form');
// form.onsubmit = function(event) {
//     event.preventDefault();
//     var table = document.getElementById('table');
//     result.innerHTML = form.coffee.value;
//     // console.log(form.coffee.value);
//     form.reset(); //Delete Item from Form//
// };


