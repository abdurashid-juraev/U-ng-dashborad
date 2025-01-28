export class DropdownToggle {
    constructor(notificationSelector, profileSelector) {
        this.notificationButton = document.querySelector(notificationSelector);
        this.profileElement = document.querySelector(profileSelector);
        this.init();
    }
    init() {
        var _a;
        if (this.notificationButton && this.profileElement) {
            (_a = this.notificationButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.toggleProfile());
        }
    }
    toggleProfile() {
        if (this.profileElement) {
            this.profileElement.classList.toggle("dropdown-open");
        }
    }
}
