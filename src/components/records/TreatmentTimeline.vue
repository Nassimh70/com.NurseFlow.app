<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import TreatmentRow from './TreatmentRow.vue'

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: true,
  },
})

const hours = ['08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','00','01','02','03','04','05','06','07']

const paracetamolDone = ref(['08', '12', '16'])
const paracetamolCheckedBy = ref({
  '08': 'Salima Msdn',
  '12': 'Salima Msdn',
  '16': 'Salima Msdn',
})
const amoxicillineDone = ref(['08'])
const amoxicillineCheckedBy = ref({ '08': 'Salima Msdn' })
const naclDone = ref(['16'])
const naclCheckedBy = ref({ '16': 'Salima Msdn' })

function toggle(done, checkedBy, hour) {
  const idx = done.indexOf(hour)
  if (idx > -1) {
    done.splice(idx, 1)
    delete checkedBy[hour]
  } else {
    done.push(hour)
    checkedBy[hour] = 'Salima Msdn'
  }
}
</script>

<template>
  <div :class="`treatment-timeline ${compact ? 'compact' : ''} ${editable ? '' : 'read-only'}`">
    <div v-if="!compact" class="panel-header">
      <div>
        <h2>Traitements — 24 heures</h2>
        <p>Cliquez sur une administration pour confirmer sa réalisation.</p>
      </div>
      <div class="timeline-legend">
        <span><i class="complete" /> Administré</span>
        <span><i class="pending" /> Planifié</span>
        <span><i class="missed" /> Manqué</span>
      </div>
    </div>
    <div class="timeline-scroll">
      <div class="hours-row">
        <span>Traitement</span>
        <b v-for="h in hours" :key="h">{{ h }}</b>
      </div>
      <TreatmentRow
        name="Paracétamol"
        detail="1 g · IV"
        :scheduled="['08','12','16','20','00','04']"
        :done="paracetamolDone"
        :checked-by="paracetamolCheckedBy"
        :all-hours="hours"
        :editable="editable"
        @toggle="toggle(paracetamolDone, paracetamolCheckedBy, $event)"
      />
      <TreatmentRow
        name="Amoxicilline"
        detail="500 mg · Orale"
        :scheduled="['08','20']"
        :done="amoxicillineDone"
        :checked-by="amoxicillineCheckedBy"
        :all-hours="hours"
        :editable="editable"
        @toggle="toggle(amoxicillineDone, amoxicillineCheckedBy, $event)"
      />
      <TreatmentRow
        name="NaCl 0,9%"
        detail="500 ml · IV"
        :scheduled="['16','23']"
        :done="naclDone"
        :checked-by="naclCheckedBy"
        :all-hours="hours"
        :editable="editable"
        @toggle="toggle(naclDone, naclCheckedBy, $event)"
      />
    </div>
    <div class="timeline-note">
      <AppIcon name="user" :size="16" />
      Dernière administration par <strong>SB</strong> à 16:02
    </div>
  </div>
</template>
