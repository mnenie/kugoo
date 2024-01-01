<script setup lang="ts">
import AuthForm from '@/components/elements/auth/AuthForm.vue'
import RegistrationForm from '@/components/elements/auth/RegistrationForm.vue'
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
 <AuthForm v-if="route.path === AUTH_ROUTE" />
 <RegistrationForm v-if="route.path === REGISTRATION_ROUTE" />
</template>

<style scoped></style>