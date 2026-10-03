import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { layout: 'none' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { layout: 'none' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
    },
    {
      path: '/patients',
      name: 'patients',
      component: () => import('@/views/PatientsView.vue'),
    },
    {
      path: '/patients/add',
      name: 'patients-add',
      component: () => import('@/views/AddPatientView.vue'),
    },
    {
      path: '/patients/:id',
      name: 'patient-record',
      component: () => import('@/views/PatientRecordView.vue'),
    },
    {
      path: '/patients/:id/edit',
      name: 'patient-edit',
      component: () => import('@/views/EditPatientView.vue'),
    },
    {
      path: '/transmissions',
      name: 'transmissions',
      component: () => import('@/views/TransmissionsView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
