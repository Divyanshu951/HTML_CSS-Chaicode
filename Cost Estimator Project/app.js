const tabs = document.querySelector(".tabs");
const slider = document.querySelector(".slider");

tabs.addEventListener("click", function (e) {
  const ele = e.target;
  if (ele.className !== "tab") return;

  const tabArray = Array.from(document.querySelectorAll(".tab"));

  // Remove active from all arrays
  tabArray.forEach((tab) => tab.classList.remove("active"));
  ele.classList.add("active");
});

slider.addEventListener("change", function (e) {
  const number = document.querySelector(".number");

  number.textContent = new Intl.NumberFormat("en-US").format(
    e.target.value * 10000,
  );
});
