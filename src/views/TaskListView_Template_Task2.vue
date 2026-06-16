<!--
=============================================================
  DAY 2 ASSIGNMENT — TaskListView.vue (Parent Component)
  This file renders a list of TaskCard components.
=============================================================
-->
<script setup>
import { ref } from 'vue'
import TaskCard_Template_Task2 from './TaskCard_Template_Task2.vue';
// TODO 1: Create a ref() tasks array with at least 3 sample tasks
// Each task: { id, name, done, dueDate }
// const tasks = ref([...])
const tasks = ref([
  {
  id: 1,
  name:  "task",
  done: false,
  dueDate: "2026-06-20"
  },

  {
  id: 2,
  name:  "task2",
  done: false,
  dueDate: "2026-06-20"
  },

  {
  id: 3,
  name:  "task3",
  done: false,
  dueDate: "2026-06-20"
  },
])

// TODO 2: Write handleComplete(id) — toggle the done state of the task with this id
function handleComplete(id) {
    const task = tasks.value.find(task => task.id === id);

    if(task){
        task.done = !task.done
    }
}

// TODO 3: Write handleDelete(id) — remove the task with this id from the array
function handleDelete(id) {
  tasks.value = tasks.value.filter(task => task.id !== id); 
}
</script>

<template>
  <div class="task-list-view">
    <h1>My Tasks</h1>

    <!-- TODO 4: Render a <TaskCard> for each task using v-for
         - Pass :task="task" as a prop
         - Listen @complete="handleComplete"
         - Listen @delete="handleDelete"
         - Fill the "meta" named slot with the due date
    -->

    <!-- Example structure (remove the comment markers and complete it):
    <TaskCard
      v-for="task in tasks"
      :key="task.id"
      :task="???"
      @complete="???"
      @delete="???"
    >
      <template #meta>
        Due: {{ ??? }}
      </template>
    </TaskCard>
    -->
  </div>
</template>

<style scoped>
.task-list-view {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}
h1 { color: #1B2A4A; margin-bottom: 24px; }
</style>
