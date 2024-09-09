// ToggleDetail
function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".job-exp-item, .project-exp-item");
  const detail = $(item).children(
    ".job-exp-item-detail, .project-exp-item-detail"
  );

  $(detail).slideToggle();
}

// ToggleMenu
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Animate
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
    // else {
    //   sec.classList.remove("show-animate");
    // }
  });
};
