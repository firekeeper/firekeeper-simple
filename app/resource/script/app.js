$('#login').on('click', function() {
    $.ajax({
        url: '/login',
        type: 'post',
        dataType: 'json',
        data: {
            username: 'AshenOne',
            password: '123456'
        },
        success: function(data) {
            console.log(data)
        }
    })
})
