function toggleMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu-links");
    const icon: HTMLElement | null = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

export { toggleMenu };
