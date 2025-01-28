export class BurgerToggle {
  private burgerButton: HTMLElement | null;
  private sidebar: HTMLElement | null;
  private burgerToggle: string;
  private isOpenSidebar: string;
  constructor(
    buttonSelector: string,
    sidebarSelector: string,
    isburgerToggle: string,
    isOpenSidebar: string
  ) {
    this.burgerButton = document.querySelector(buttonSelector);
    this.sidebar = document.querySelector(sidebarSelector);
    this.burgerToggle = isburgerToggle;
    this.isOpenSidebar = isOpenSidebar;
    this.init();
  }

  private init(): void {
    this.burgerButton?.addEventListener("click", () => this.toggleClass());
  }

  private toggleClass(): void {
    this.burgerButton?.classList.toggle(this.burgerToggle);
    this.sidebar?.classList.toggle(this.isOpenSidebar);
  }
}
