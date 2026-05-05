import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Task } from '../types/entities'

interface TaskStoreState {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  addTask: (task: Task) => void
  removeTask: (id: string) => void
}

export const useTaskStore = create<TaskStoreState>()(
  devtools(
    (set, get) => ({
      tasks: [],
      setTasks: (tasks) => set({ tasks }),
      addTask: (task) => set({ tasks: [...get().tasks, task] }),
      removeTask: (id) =>
        set({
          tasks: get().tasks.filter((t) => t.id !== id),
        }),
    }),
    { name: 'task-store' },
  ),
)
