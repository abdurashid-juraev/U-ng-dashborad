export class BurgerToggle {
    constructor(buttonSelector, sidebarSelector, isburgerToggle, isOpenSidebar) {
        this.burgerButton = document.querySelector(buttonSelector);
        this.sidebar = document.querySelector(sidebarSelector);
        this.burgerToggle = isburgerToggle;
        this.isOpenSidebar = isOpenSidebar;
        this.init();
    }
    init() {
        var _a;
        (_a = this.burgerButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.toggleClass());
    }
    toggleClass() {
        var _a, _b;
        (_a = this.burgerButton) === null || _a === void 0 ? void 0 : _a.classList.toggle(this.burgerToggle);
        (_b = this.sidebar) === null || _b === void 0 ? void 0 : _b.classList.toggle(this.isOpenSidebar);
    }
}
