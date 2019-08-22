$(function entry() {
    // Add entry
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let userTextElement = $(event.currentTarget).find('#shopping-list-entry').val();
                    
        $(".shopping-list").append($('<li>') .append(
            $('<span class="shopping-item">' + userTextElement + '</span>')
                ).append(
                $('<div class="shopping-item-controls">').append(
                    $('<button class="shopping-item-toggle"></button>').append(
                        $('<span class="button-label">check</span>')
                        )
                    ).append(
            ' ').append(
                    $('<button class="shopping-item-delete"></button>').append(
                        $('<span class="button-label">delete</span>')
                    )
                )
            )
        )

        $('input').val("");                         
    });

    //Toggle Check
    $(document).on('click','.shopping-item-toggle' ,function(){
        let parentItem = $(this).parent().parent().find('.shopping-item')
        let css = $(parentItem).css("text-decoration")

        if(css == 'none solid rgb(128, 128, 128)') {
            $(parentItem).css("text-decoration", "line-through")
        } else {
            $(parentItem).css("text-decoration", "none")
        }
    });

    //Delete Item
    $(document).on('click','.shopping-item-delete' ,function(){
        $(this).parent().parent().remove(); 
    });
});