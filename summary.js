console.log("I am from summary js file.");
const blogs = document.getElementsByTagName("p");
//console.log(blogs);
for (const blog of blogs) {
    //console.log(blog);
    blog.style.backgroundColor = "steelblue";
    blog.style.color = "white";

}
const harum = document.getElementById("special-blog");
//harum.innerText = "New-Harun";
harum.innerHTML = `
    <h2>Special Inner HTML </h2>
    <div>
    <ul>
    <li>Book-1</li>
    <li>Book-2</li>
    <li>Book-3</li>
    </ul>
    </div>
`

const friends = document.getElementById("friends");
console.log(friends.children);

const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//create element
const friend = document.createElement("li");
friend.innerText = "Friend-11";
friends.appendChild(friend);