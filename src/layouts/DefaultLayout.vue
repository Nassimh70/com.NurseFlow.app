<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppTopbar from '@/components/layout/AppTopbar.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import AppModal from '@/components/common/AppModal.vue'
import { useToast } from '@/composables/useToast'

const router = useRouter()
const { toastMessage, notify, dismiss } = useToast()

const menuOpen = ref(false)
const modal = ref(null) // null | 'observation' | 'transmission'

function openModal(type) {
  modal.value = type
}

function closeModal() {
  modal.value = null
}

function onModalSubmit(type) {
  notify(
    type === 'observation'
      ? 'Observation ajoutée au dossier'
      : "Transmission partagée avec l'équipe",
  )
}

function handleLogout() {
  router.push({ name: 'login' })
}

// Expose openModal so child views can use it via provide/inject or router
</script>

<template>
  <div class="app-shell">
    <div class="main-shell">
      <AppTopbar>
        <AppSidebar
          :open="menuOpen"
          @close="menuOpen = false"
        />
      </AppTopbar>
      <main>
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component
              :is="Component"
              :key="$route.fullPath"
              @open-modal="openModal"
              @notify="notify"
              @logout="handleLogout"
            />
          </Transition>
        </RouterView>
      </main>
    </div>
    <nav class="mobile-nav">
      <button
        v-for="item in [
          { name: 'dashboard', label: 'Accueil', icon: 'grid' },
          { name: 'patients', label: 'Patients', icon: 'users' },
          { name: 'transmissions', label: 'Transmissions', icon: 'message' },
          { name: 'notifications', label: 'Notifications', icon: 'bell' },
        ]"
        :key="item.name"
        :class="$route.name === item.name ? 'active' : ''"
        @click="$router.push({ name: item.name })"
      >
        <AppIcon :name="item.icon" />
        <span>{{ item.label }}</span>
      </button>
    </nav>
    <AppModal
      v-if="modal"
      :type="modal"
      @close="closeModal"
      @submit="onModalSubmit"
    />
    <div v-if="toastMessage" class="toast">
      <span>
        <AppIcon name="check" />
      </span>
      <div>
        <strong>Opération réussie</strong>
        <small>{{ toastMessage }}</small>
      </div>
      <button @click="dismiss">
        <AppIcon name="x" :size="16" />
      </button>
    </div>
  </div>
</template>
