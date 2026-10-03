<script setup>
import { useRouter } from 'vue-router'
import AppIcon from '@/components/common/AppIcon.vue'
import AppAvatar from '@/components/common/AppAvatar.vue'
import AppLogo from '@/components/common/AppLogo.vue'

const router = useRouter()

</script>

<template>
  <header class="topbar">
    <div class="topbar-left">
      <div class="topbar-brand">
        <AppLogo :size="49" />
        <span class="nurseflow-name">
          <span>Nurse <span class="nurseflow-flow">Flow</span></span>
          <small>Service infirmier</small>
        </span>
      </div>
    </div>
    <slot />
    <div class="top-actions">
      <button class="profile-button" @click="$router.push({ name: 'profile' })">
        <AppAvatar initials="SB" />
        <span>
          <strong>Salima Msdn</strong>
          <small>Infirmière — Service 2</small>
        </span>
        <AppIcon name="chevron" :size="16" />
      </button>
    </div>
  </header>
</template>
