const user = {
  username: 'Satyendra',
  lastactivitytime: '20th Dec'
};

function createPost() {
  return new Promise((resolve, reject) => {
    // Simulating post creation - Resolving immediately as there's no actual asynchronous operation
    resolve({ title: 'Post Five', body: 'This is Post Five' });
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivitytime = new Date().toISOString();
      resolve(user.lastactivitytime);
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating deletion of the last post
      resolve('Last post deleted successfully');
    }, 1000);
  });
}

function userupdatesapost() {
  Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([createPostResolves, updateLastUserActivityTimeResolves]) => {
      console.log('Last Activity Time:', updateLastUserActivityTimeResolves);
      console.log('Created Post:', createPostResolves);
      return deleteLastPost(); // Returning promise for post deletion
    })
    .then((deletePostStatus) => {
      console.log(deletePostStatus);
      console.log('Remaining Posts:', user.username); // Logging remaining posts
    })
    .catch((err) => console.error(err));
}

userupdatesapost();
