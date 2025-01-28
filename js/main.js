import { BurgerToggle } from "./burgerToggle.js";
import { DropdownToggle } from "./dropdown.js";
document.addEventListener("DOMContentLoaded", () => {
  const sidenavProfileBtn = new DropdownToggle(".profile-btn", ".profile-menu");
  const notificationBtn = new DropdownToggle(
    ".notification-btn",
    ".notification-menu"
  );
  const btn = new BurgerToggle(
    ".sidebar-toggle-burger",
    ".u-sidenav",
    "open",
    "is-open"
  );
});
