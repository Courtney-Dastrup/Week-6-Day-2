for (let i=0; i<16; i++){
    $('#container').append(`
        <div class=square>
        </div>
    `)
}

$('#container').on('click', '.square', function() {
    $(this).toggleClass('dark');
});