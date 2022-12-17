(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    console.log("click")
      mobileMenuRef.classList.toggle("is-hidden");
  });

  mobileBtnClose.addEventListener("click", () => {
    console.log("click")
      mobileMenuRef.classList.toggle("is-hidden");
  });
})();
