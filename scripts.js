function addComment() {
    const commentInput = event.target.previousElementSibling;
    const commentSection = commentInput.previousElementSibling;

    if (commentInput.value.trim() !=="" ) {
        const newComment = document.createElement('p');
        new Comment.textContent = commentInput.value;
        commentSection.appendChild(newComment);
        commentInput.value = '';
    } else {
        alert("Comment cannot be empty!");
    }
}