<script setup>
import AppButton from '@/components/common/AppButton.vue'
</script>

<template>
  <section class="panel observations">
    <div class="panel-header">
      <div>
        <h2>Observations</h2>
        <p>Suivi clinique de la journée</p>
      </div>
      <AppButton variant="ghost">Voir tout</AppButton>
    </div>
    <div class="observation-list">
      <div>
        <time>19:10</time>
        <span />
        <article>
          <header>
            <strong>Infirmière Sarah</strong>
            <small>Aujourd'hui</small>
          </header>
          <p>État stable, surveillance poursuivie. Patient calme, douleur évaluée à 2/10.</p>
        </article>
      </div>
      <div>
        <time>17:30</time>
        <span />
        <article>
          <header>
            <strong>Infirmière Amel</strong>
            <small>Aujourd'hui</small>
          </header>
          <p>Patient conscient et coopérant. Constantes dans les limites habituelles.</p>
        </article>
      </div>
      <div>
        <time>14:45</time>
        <span />
        <article>
          <header>
            <strong>Infirmière Nadia</strong>
            <small>Aujourd'hui</small>
          </header>
          <p>Admission dans le service, installation en chambre effectuée.</p>
        </article>
      </div>
    </div>
  </section>
</template>
