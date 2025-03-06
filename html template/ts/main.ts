import { BurgerToggle } from "./burgerToggle";
import { DropdownToggle } from "./dropdown";

document.addEventListener("DOMContentLoaded", () => {
  const sidenavProfileBtn: DropdownToggle = new DropdownToggle(
    ".profile-btn",
    ".profile-menu"
  );
  const notificationBtn: DropdownToggle = new DropdownToggle(
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
