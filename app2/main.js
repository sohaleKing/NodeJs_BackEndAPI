let url = new URL("https://api.hatchways.io/assessment/blog/posts");
const selectTag = () => {
  const tag = document.getElementById("tags").value;
  const dataContainer = document.getElementById("data");

  // Validate request
  if (!tag) {
    dataContainer.innerHTML = `{"error":"The tag parameter is required"}`;
    return;
  }
  fetch(
    `${url}?` +
      new URLSearchParams({
        tag: tag,
        sortBy: "likes",
      })
  )
    .then((res) => res.json())
    .then((data) => {
      dataContainer.innerHTML = JSON.stringify(data);
    });
};
