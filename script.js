  const menuIcon = document.querySelector('.menu_icon');
  const closeIcon = document.querySelector('.close_icon');
  const mobileMenu = document.querySelector('.mobile_menu');
  const body = document.querySelector("body");

  menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    body.style.overflow="hidden";
  });

  closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    body.style.overflow = "visible";
  });
