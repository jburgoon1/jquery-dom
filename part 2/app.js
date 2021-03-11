

$('button').on('click', function(e){
    e.preventDefault();
    const moviename = $('input').eq(0).val();
const value = $('input').eq(1).val();
const review = `${moviename}: ${value}`

console.log(moviename, value)
if(moviename.length > 2 && value >= 0 && value<=10){
    $('ol').append('<li>' +review + '<button>X</button></li>')
    $('value').empty();
}else{
    alert('not a valid rating')
}
$('.movieform')[0].reset();
})
$('ol').on('click', 'button',function (e){
    e.target.parentElement.remove();
})