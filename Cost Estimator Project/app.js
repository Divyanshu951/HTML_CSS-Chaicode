const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function (e) {
  if (e.target.className !== "tab") return;

  const tabArray = Array.from(document.querySelectorAll(".tab"));

  // Remove active from all arrays
  tabArray.forEach((tab) => tab.classList.remove("active"));

  e.target.classList.add("active");
});
