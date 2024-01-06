<script setup lang="ts">
import AuthForm from '@/components/elements/auth/AuthForm.vue'
import RegistrationForm from '@/components/elements/auth/RegistrationForm.vue'
import SuccessAuth from '@/components/elements/auth/SuccessAuth.vue';
import AlertErr from '@/components/elements/auth/AlertErr.vue';
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import { useRoute } from 'vue-router';

const route = useRoute()
const token = sessionStorage.getItem('token')
</script>

<template>
  <div v-if="!token" class="auth_blocks">
    <AuthForm v-if="route.path === AUTH_ROUTE" />
    <RegistrationForm v-if="route.path === REGISTRATION_ROUTE" />
  </div>
  <SuccessAuth v-else />
  <AlertErr />
</template>

<style scoped></style>