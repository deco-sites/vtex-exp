/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchPopup = signal(false);
const displaySearchDrawer = signal(false);
const displayTicketModal = signal(false);

const state = {
  displayCart,
  displayMenu,
  displaySearchPopup,
  displaySearchDrawer,
  displayTicketModal,
};

export const useUI = () => state;
