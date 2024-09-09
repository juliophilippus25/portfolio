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
