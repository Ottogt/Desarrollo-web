import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type MenuKey = 'task' | 'goals'

interface MenuStoreState {
  active: MenuKey
  setActive: (value: MenuKey) => void
}

export const useMenuStore = create<MenuStoreState>()(
  devtools(
    (set) => ({
      active: 'task',
      setActive: (value) => set({ active: value }),
    }),
    { name: 'menu-store' },
  ),
)
