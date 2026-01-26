<script setup>
import TheProject from '@/components/TheProject.vue'
</script>

<template>
  <div id="projects">
    <header></header>
    <main>
      <the-badge title="My Work"></the-badge>

      <h2>Projects</h2>

      <div class="projects-grid">
        <the-project
          title="ALUCARD — E-commerce Platform"
          :stack="[
            'Symfony',
            'Twig',
            'Stimulus.js',
            'SCSS',
            'EasyAdmin',
            'Stripe',
            'Printful API',
            'Doctrine ORM',
            'PostgreSQL',
            'Docker',
          ]"
          description="Alucard is a full e-commerce system designed for a clothing brand, handling authentication, product management, orders, and external fulfillment through Printful. The system focuses on clean backend architecture, admin usability, and reliable third-party API integration."
          focus="security boundaries, integrations, maintainability"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/alucard.git',
            Live: 'https://alucard-wfio.onrender.com',
          }"
        />
        <the-project
          title="Direito Moz — Legal Document Generation Platform"
          :stack="[
            'Vue 3',
            'FastAPI',
            'Firebase_admin',
            'Openai API',
            'Symfony',
            'Doctrine',
            'PostgreSQL',
            'Stripe',
            'Vercel',
            'Docker',
          ]"
          description="Direito Moz is SaaS AI-powered legal document generation and assistance platform for legal professionals, enabling structured document generation, AI-assisted drafting, and secure user access. Built with separation of concerns between frontend, API, and AI services."
          focus="product architecture, security, scalability"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/frontend_direito_plus.git',
            Live: 'https://direitomoz.vercel.app/',
          }"
        />
        <the-project
          title="Audio & Document Analysis - AI Evaluation Service"
          :stack="[
            'FastAPI',
            'Jinja2',
            'Stimulus.js',
            'Firebase_admin',
            'Deepseek R1',
            'Deepseek VL',
            'Docker',
          ]"
          description="This service analyzes customer service audio calls to assess quality and performance, and processes CVs to highlight the most relevant candidates for a company. The focus is on decision support — not automation theater."
          focus="security boundaries, integrations, maintainability"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/audio-analysis.git',
            Live: 'https://audio-doc-analysis.onrender.com',
          }"
        />
      </div>
    </main>
  </div>
</template>
