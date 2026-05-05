import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Goal } from '../types/entities'

interface GoalStoreState {
  goals: Goal[]
  setGoals: (goals: Goal[]) => void
  addGoal: (goal: Goal) => void
  removeGoal: (id: string) => void
}

export const useGoalStore = create<GoalStoreState>()(
  devtools(
    (set, get) => ({
      goals: [],
      setGoals: (goals) => set({ goals }),
      addGoal: (goal) => set({ goals: [...get().goals, goal] }),
      removeGoal: (id) =>
        set({
          goals: get().goals.filter((g) => g.id !== id),
        }),
    }),
    { name: 'goal-store' },
  ),
)
