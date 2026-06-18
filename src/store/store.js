import { defineStore } from 'pinia'
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Buy groceries', done: false, dueDate:"2026-12-12"},
      { id: 2, name: 'Finish homework', done: true, dueDate:"2026-12-12"},
      { id: 3, name: 'Clean my room', done: false, dueDate:"2026-12-12" }
    ]
  })
})