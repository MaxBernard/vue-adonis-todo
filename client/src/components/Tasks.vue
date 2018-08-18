<template>
  <Panel title="Tasks">
    <div class="tasks mt-2" v-for="task in tasks" :key="task.id" >
      <EditableRecord
        :title="task.title"
        :isEditMode="task.isEditMode"
        @onInput="setTaskTitle({ task, title: $event, })"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      >
        <v-icon
          @click="checkClicked(task)">
          {{ task.completed ? 'check_box' : 'check_box_outline_blank'}}
        </v-icon>
      </EditableRecord>
    </div>

    <CreateRecord
      placeholder="I need to..."
      @onInput="setNewTaskTitle" :value="NewTaskTitle"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskTitle',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'deleteTask',
      'saveTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskTitle',
      'setTaskTitle',
      'setEditMode',
      'toggleCompleted',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>
</style>
