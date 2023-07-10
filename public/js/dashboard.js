window.addEventListener('load', () => {
    fetch('/api/posts', { credentials: 'include' })
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="meta">Posted on ${new Date(post.createdAt).toLocaleDateString()}</p>
            <p>${post.content}</p>
            <button class="delete-btn" data-id="${post.id}">Delete</button>
          `;
          postElement.querySelector('.delete-btn').addEventListener('click', handleDelete);
          postsContainer.appendChild(postElement);
        });
      });
  });
  
  function handleDelete(e) {
    const id = e.target.dataset.id;
    fetch(`/api/posts/${id}`, { method: 'DELETE', credentials: 'include' })
      .then(response => {
        if (response.ok) {
          e.target.parentElement.remove();
        }
      });
  }
  