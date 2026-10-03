<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const router = useRouter()
const route = useRoute()
useScrollReveal()

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const navItems = [
  { name: 'dashboard', label: 'Tableau de bord', icon: 'grid' },
  { name: 'patients', label: 'Patients', icon: 'users' },
  { name: 'patient-record', label: 'Fiches patients', icon: 'file' },
  { name: 'transmissions', label: 'Transmissions', icon: 'message' },
]

function isActive(name) {
  if (name === 'patient-record') {
    return route.name === 'patient-record' || route.name === 'patient-edit'
  }
  return route.name === name
}

const activeNavIndex = computed(() => {
  const index = navItems.findIndex((item) => isActive(item.name))
  return index === -1 ? 0 : index
})

function navigate(name) {
  if (name === 'patient-record') {
    router.push({ name: 'patient-record', params: { id: 'DEM-2026-001' } })
  } else {
    router.push({ name })
  }
  emit('close')
}

</script>

<template>
  <div v-if="open" class="mobile-overlay" @click="emit('close')" />
  <aside :class="`sidebar ${open ? 'sidebar-open' : ''}`">
    <nav
      class="side-nav"
      :style="{ '--active-nav-index': activeNavIndex }"
    >
      <span class="side-nav-indicator" aria-hidden="true" />
      <button
        v-for="item in navItems"
        :key="item.name"
        :class="[
          'sr-item',
          `sr-item-${Math.min(navItems.indexOf(item) + 3, 5)}`,
          isActive(item.name) ? 'active' : '',
        ]"
        @click="navigate(item.name)"
      >
        <AppIcon :name="item.icon" />
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>
