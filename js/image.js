const randomImage = 1;

const renderItem = () => {
  fetch(`https://source.unsplash.com/1920x900/?programming`).then(
    (response) => {
      let item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `<img src="${response.url}" class="randomImage" alt="Image">`;
      document.body.appendChild(item);
    }
  );
};

for (let i = 0; i < randomImage; i++) {
  renderItem();
}
