const e = React.createElement;

function likeButton(){
    return e(
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'like'
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(likeButton), domContainer);


