<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { patients } from '@/modules/patients/patients.data'
import AppButton from '@/components/common/AppButton.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PatientTable from '@/components/patients/PatientTable.vue'

const router = useRouter()

const filter = ref('Tous')
const query = ref('')

const filters = ['Tous', 'Stable', 'À surveiller', 'Urgent', 'Sortie']

const visible = computed(() => {
  return patients.filter((p) => {
    const matchFilter = filter.value === 'Tous' || p.status === filter.value
    const matchQuery =
      p.name.toLowerCase().includes(query.value.toLowerCase()) ||
      p.room.includes(query.value) ||
      p.id.toLowerCase().includes(query.value.toLowerCase())
    return matchFilter && matchQuery
  })
})
</script>

<template>
  <div>
    <section class="panel patients-page-header">
      <div class="panel-header">
        <div>
          <h2>Patients du service</h2>
          <p>Vue en temps réel des patients hospitalisés</p>
        </div>
        <AppButton icon="plus" @click="router.push({ name: 'patients-add' })">
          Ajouter un patient
        </AppButton>
      </div>
    </section>

    <section class="patients-filter-panel">
      <div class="patients-filter-row">
        <label class="search-field">
          <AppIcon name="search" :size="18" />
          <input
            v-model="query"
            placeholder="Rechercher un patient, chambre ou ID..."
          />
        </label>
        <div class="filter-tabs">
          <button
            v-for="item in filters"
            :key="item"
            :class="['filter-chip', `filter-chip-${item.toLowerCase().replace('à surveiller', 'surveillance')}` , filter === item ? 'active' : '']"
            @click="filter = item"
          >
            {{ item }}
            <span v-if="item === 'Tous'">24</span>
          </button>
        </div>
      </div>
    </section>

    <section class="patients-table-panel">
      <div v-if="visible.length" class="patient-management-table">
        <PatientTable :rows="visible" />
      </div>
      <EmptyState v-else />

      <div class="pagination">
        <span>Affichage de 1 à {{ visible.length }} sur 24 patients</span>
        <div>
          <button disabled>Précédent</button>
          <button class="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Suivant</button>
        </div>
      </div>
    </section>
  </div>
</template>
