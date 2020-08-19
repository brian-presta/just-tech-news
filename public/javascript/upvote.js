async function upvote(event) {
    event.preventDefault()

    let id = window.location.toString().split('/')
    id = id[id.length-1]

    const response = await fetch('/api/post/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    if (response.ok) {
        document.location.reload();
    } 
    else {
    alert(response.statusText);
    }
}

document.querySelector(".upvote-btn").addEventListener("click", upvote)