"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      favorite: [],
      isCartOpen: false,
      toggleFavorite: (product) => {
        const current = get().favorite;
        const exists = current.find((fav) => fav.id === product.id);
        set({
          favorite: exists ? current.filter((fav) => fav.id !== product.id) : [...current, product],
        });
      },
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: "favorite-storage",
      partialize: (state) => ({ favorite: state.favorite }),
    },
  ),
);

export default useStore;
