// retrieving form data
// author name : document.getElementById("author").value
// book title : document.getElementById("book").value

// arrays
var authors = ["Thomas Mann", "James Joyce", "E. M. Forster", "Isabel Allende", "Isabel Allende"];
var titles = ["Death in Venice", "A portrait of the artist as a young man", "A room with a view", "The house of spirits", "Of love and shadows"];
var descriptions = [
    "One of the most famous literary works of the twentieth \
    century, this novella embodies themes that preoccupied Thomas Mann in much \
    of his work: the duality of art and life, the presence of death and \
    disintegration in the midst of existence, the connection between love and \
    suffering and the conflict between the artist and his inner self.",

    "A portrait of the artist as a young man \
    Description: This book is a fictional re-creation of the Irish writer's \
    own life and early environment. The experiences of the novel's young hero, \
    unfold in astonishingly vivid scenes that seem freshly recalled from life \
    and provide a powerful portrait of the coming of age of a young man of \
    unusual intelligence, sensitivity and character.",

    "A room with a view \
    Description: This work displays an unusually perceptive view of British \
    society in the early 20th century.It is a social comedy set in Florence, \
    Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling \
    against straitlaced Victorian attitudes of arrogance, narroe mindedness \
    and sobbery, falls in love - while on holiday in Italy - with the socially \
    unsuitable George Emerson.",

    "The house of spirits \
    Description: Allende describes the life of three generations of a \
    prominent family in Chile and skillfully combines with this all the main  \
    historical events of the time, up until Pinochet's dictatorship.",

    "Of love and shadows \
    Description: The whole world of Irene Beltran, a young reporter in Chile \
    at the time of the dictatorship, is destroyed when she discovers a series  \
    of killings carried out by government soldiers. With the help of a  \
    photographer, Francisco Leal, and risking her life, she tries to come up \
    with evidence against the dictatorship."
];


// clears info
function clearInfo() {
    document.getElementById("author").value = "";
    document.getElementById("book").value = "";
    document.getElementById("data").innerHTML = "";
}

// opens file and parses its info for given parameters
function parseForInfo(authorName, bookTitle) {
    var size = authors.length;
    var result = [];

    for (var i = 0; i < size; i++) {
        if (authors[i] === authorName) {
            result += i;
        } else if (bookTitle === titles[i]) {
            result += i;
        }
    }

    return result;
}

// adds parse
function findInfo() {
    var authorName = document.getElementById("author").value;
    var bookTitle = document.getElementById("book").value;
    
    var indexes = parseForInfo(authorName, bookTitle);
    var text = "";
    // add info to doc
    document.getElementById("data").innerText = "";

    if (indexes.length == 0) {
        document.getElementById("data").innerText = "Book Not Found";
    }

    for (var i = 0; i < indexes.length; i++) {
        document.getElementById("data").innerText += authors[indexes[i]];
        document.getElementById("data").innerHTML += "<br>";
        document.getElementById("data").innerText += titles[indexes[i]];
        document.getElementById("data").innerHTML += "<br>";
        document.getElementById("data").innerText += descriptions[indexes[i]];
        document.getElementById("data").innerHTML += "<br>";
    }
    
}

// trying to use file reader
// var buffer = FileReader.readAsArrayBuffer("books.txt");
// for (b in buffer) {
//     console.log(b);
// }

// using XMLhttp Requests/blobs/readFile


