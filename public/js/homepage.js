window.addEventListener('load', () => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="meta">Posted by ${post.user.username} on ${new Date(post.createdAt).toLocaleDateString()}</p>
            <p>${post.content}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      });
  });
  