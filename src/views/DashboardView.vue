<script setup>
import { useRouter } from 'vue-router'
import { patients } from '@/modules/patients/patients.data'
import AppButton from '@/components/common/AppButton.vue'
import StatCard from '@/components/dashboard/StatCard.vue'
import PatientTable from '@/components/patients/PatientTable.vue'
import TransmissionItem from '@/components/dashboard/TransmissionItem.vue'
import AppIcon from '@/components/common/AppIcon.vue'

const router = useRouter()
const recentPatients = patients.slice(0, 5)
</script>

<template>
  <div>
    <div class="stats-grid">
      <StatCard label="Patients" :value="24" icon="users" tone="blue" />
      <StatCard label="Stable" :value="18" icon="check" tone="green" />
      <StatCard label="À surveiller" :value="4" icon="clock" tone="orange" />
      <StatCard label="Urgent" :value="2" icon="alert" tone="red" />
    </div>

    <div class="dashboard-grid">
      <section class="panel patient-panel">
        <div class="panel-header">
          <div>
            <h2>Patients du service</h2>
            <p>Vue en temps réel des patients hospitalisés</p>
          </div>
          <AppButton variant="secondary" @click="router.push({ name: 'patients' })">
            Voir tous
          </AppButton>
        </div>
        <PatientTable :rows="recentPatients" />
      </section>

      <section class="panel transmissions-panel">
        <div class="panel-header">
          <div>
            <h2>Transmissions récentes</h2>
            <p>Dernières informations partagées</p>
          </div>
          <button class="icon-btn">
            <AppIcon name="chevron" />
          </button>
        </div>
        <div class="transmission-list">
          <TransmissionItem
            time="19:10"
            name="Amine Mansouri"
            nurse="Salima Msdn"
            message="État stable, surveillance poursuivie."
            unread
          />
          <TransmissionItem
            time="18:30"
            name="Yacine Aït"
            nurse="Amel K."
            message="Douleur thoracique signalée, médecin informé."
            urgent
            unread
          />
          <TransmissionItem
            time="17:45"
            name="Sarah Benali"
            nurse="Nadia R."
            message="Traitement administré, bonne tolérance."
          />
          <TransmissionItem
            time="16:20"
            name="Lina Haddad"
            nurse="Salima Msdn"
            message="Perfusion renouvelée, débit contrôlé."
          />
        </div>
        <AppButton
          variant="secondary"
          icon="plus"
          class="full-button"
          @click="router.push({ name: 'transmissions' })"
        >
          Ajouter une transmission
        </AppButton>
      </section>
    </div>
  </div>
</template>
