<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '@/components/common/AppIcon.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppLogo from '@/components/common/AppLogo.vue'

const router = useRouter()
const showPassword = ref(false)

function onLogin() {
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="login-page">
    <div class="login-decoration one" />
    <div class="login-decoration two" />
    <div class="login-brand">
      <AppLogo :size="64" />
      <span class="nurseflow-name">
        <span>Nurse <span class="nurseflow-flow">Flow</span></span>
        <small>Dossier Électronique Médical — Service infirmier</small>
      </span>
    </div>
    <form class="login-card" @submit.prevent="onLogin">
      <div class="login-icon">
        <AppIcon name="shield" :size="28" />
      </div>
      <h1>Bienvenue</h1>
      <p>Connectez-vous à votre espace de soins.</p>
      
      <label class="field">
        <span>Identifiant</span>
        <div class="input-with-icon">
          <AppIcon name="user" />
          <input placeholder="Votre identifiant" value="salima.msdn" />
        </div>
      </label>
      
      <label class="field">
        <span>Mot de passe</span>
        <div class="input-with-icon">
          <AppIcon name="lock" />
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Votre mot de passe"
            value="demsoins2026"
          />
          <button type="button" @click="showPassword = !showPassword">
            <AppIcon name="eye" />
          </button>
        </div>
      </label>
      
      <div class="login-options">
        <label>
          <input type="checkbox" checked />
          Se souvenir de moi
        </label>
      </div>
      
      <AppButton type="submit" class="full-button">
        Se connecter <AppIcon name="arrow" :size="18" />
      </AppButton>
      
      <div class="secure-text">
        <AppIcon name="lock" :size="15" />
        Accès réservé au personnel infirmier autorisé.
      </div>
    </form>
    <footer>NurseFlow · Réseau hospitalier privé</footer>
  </div>
</template>
