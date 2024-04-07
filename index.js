// Add New Book

let title;
let author;
let year;
let genres;
let audioduration;
let blurb;

document. getElementById("submit").onclick = function(){
    title = document. getElementById("titleInput").value;
    author = document. getElementById("authorInput").value;
    year = document. getElementById("yearInput").value;
    genres = document. getElementById("genresInput").value;
    audioduration = document. getElementById("audiodurationInput").value;
    blurb = document. getElementById("blurbInput").value;
    document.getElementById("title").textContent = `${title}`;
    document.getElementById("author").textContent = `${author}`;
    document.getElementById("year").textContent = `${year}`;
    document.getElementById("genres").textContent = `${genres}`;
    document.getElementById("audioduration").textContent = `${audioduration}`;
    document.getElementById("blurb").textContent = `${blurb}`;
}
