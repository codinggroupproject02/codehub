async function commentButtonAction(event){
    event.preventDefault();

    let result = document.querySelector('#data-post-id');

    alert(result);
    //alert('I am here! + post_id is '); 
}

document.querySelector('#commentBtn').addEventListener('click',commentButtonAction)
