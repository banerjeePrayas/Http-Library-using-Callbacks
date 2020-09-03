const http = new eassyHttp;

// GET Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function (error, posts) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(posts);
//     }
// });

// GET Single Post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a Custom Post'
};

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });


// Update Post
http.put('http://jsonplaceholder.typicode.com/posts/7', data, function (error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});


// DELETE Request
http.delete('http://jsonplaceholder.typicode.com/posts/1', function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});