export class DropdownToggle {
  notificationButton: HTMLElement | null;
  profileElement: HTMLElement | null;

  constructor(notificationSelector: string, profileSelector: string) {
    this.notificationButton = document.querySelector(notificationSelector);
    this.profileElement = document.querySelector(profileSelector);

    this.init();
  }

  init(): void {
    if (this.notificationButton && this.profileElement) {
      this.notificationButton?.addEventListener("click", () =>
        this.toggleProfile()
      );
    }
  }

  toggleProfile(): void {
    if (this.profileElement) {
      this.profileElement.classList.toggle("dropdown-open");
    }
  }
}
