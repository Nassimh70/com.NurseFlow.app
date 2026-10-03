<script setup>
import PageTitle from '@/components/common/PageTitle.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppAvatar from '@/components/common/AppAvatar.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import InfoRow from '@/components/records/InfoRow.vue'

const emit = defineEmits(['notify', 'logout'])

function resetPassword() {
  emit('notify', 'Un lien de réinitialisation a été envoyé à votre adresse.')
}

function logout() {
  emit('logout')
}
</script>

<template>
  <div>
    <PageTitle
      title="Votre profil"
      subtitle="Informations de votre compte professionnel de santé."
    />
    <div class="settings-layout">
      <section class="panel profile-card">
        <div class="profile-cover" />
        <div class="profile-details">
          <AppAvatar initials="SB" tone="blue" large />
          <h2>Salima Msdn</h2>
          <p>Infirmière diplômée d'État</p>
          
          <div class="profile-info">
            <InfoRow label="Identifiant" value="salima.msdn" />
            <InfoRow label="Service affecté" value="Service 2 — Médecine" />
            <InfoRow label="Statut du compte" value="Actif" />
            <InfoRow label="Dernière connexion" value="Aujourd'hui à 07:45" />
          </div>
          
          <AppButton class="full-button" variant="secondary" @click="resetPassword">
            Modifier le mot de passe
          </AppButton>
          <AppButton class="full-button" variant="danger" icon="logout" @click="logout">
            Se déconnecter
          </AppButton>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Statistiques d'activité</h2>
            <p>Résumé de vos actions dans le système</p>
          </div>
        </div>
        <div class="stats-grid" style="padding: 18px; grid-template-columns: 1fr 1fr; margin: 0">
          <div class="stat-card" style="box-shadow: none; border-color: var(--line)">
            <div class="stat-icon tone-blue"><AppIcon name="pill" /></div>
            <div class="stat-copy">
              <span>Traitements</span>
              <strong>142</strong>
              <small>Cette semaine</small>
            </div>
          </div>
          <div class="stat-card" style="box-shadow: none; border-color: var(--line)">
            <div class="stat-icon tone-green"><AppIcon name="message" /></div>
            <div class="stat-copy">
              <span>Transmissions</span>
              <strong>38</strong>
              <small>Cette semaine</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
