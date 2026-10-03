<script setup>
import AppIcon from '@/components/common/AppIcon.vue'

const props = defineProps({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  scheduled: { type: Array, required: true },
  done: { type: Array, required: true },
  checkedBy: { type: Object, required: true },
  allHours: { type: Array, required: true },
  editable: { type: Boolean, default: true },
})

const emit = defineEmits(['toggle'])

function doseClass(hour) {
  if (props.done.includes(hour)) return 'dose done'
  if (hour === '20') return 'dose next'
  return 'dose pending'
}
</script>

<template>
  <div class="treatment-row">
    <div>
      <strong>{{ name }}</strong>
      <small>{{ detail }}</small>
    </div>
    <span v-for="hour in allHours" :key="hour" class="dose-cell">
      <button
        v-if="scheduled.includes(hour)"
        :class="doseClass(hour)"
        :disabled="!editable"
        @click="editable && emit('toggle', hour)"
      >
        <AppIcon v-if="done.includes(hour)" name="check" :size="13" />
        <i v-else />
      </button>
      <small v-if="done.includes(hour) && checkedBy[hour]" class="checked-by">
        {{ checkedBy[hour] }}
      </small>
    </span>
  </div>
</template>
