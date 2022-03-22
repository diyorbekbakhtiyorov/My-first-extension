const text = document.getElementById("title");
const author = document.getElementById("author");

const getQuotes = async () => {
  let apiURL = "https://type.fit/api/quotes";
  const response = await fetch(apiURL);
  const allQuotes = await response.json();

  const index = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[index].text;
  const auth = allQuotes[index].author;

  if (auth == null) {
    author = "Anonim";
  }

  text.innerHTML = quote;
  author.innerHTML = "(" + auth + ")";
};

getQuotes();
