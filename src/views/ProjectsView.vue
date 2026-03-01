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
          title="ALUCARD — E-commerce Store"
          :stack="[
            'Symfony 7',
            'Twig',
            'SCSS',
            'Stimulus.js',
            'EasyAdmin',
            'Stripe',
            'Printful API',
            'Doctrine ORM',
            'PostgreSQL',
            'Nginx',
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
            'Symfony 7',
            'Twig',
            'SCSS',
            'Stimulus.js',
            'Firebase Auth',
            'EasyAdmin',
            'Doctrine ORM',
            'PostgreSQL',
            'Nginx',
            'Docker',
          ]"
          description="Direito Moz is SaaS AI-powered legal document generation and assistance platform for legal professionals, enabling structured document generation, AI-assisted drafting, and secure user access. Built with separation of concerns between frontend, API, and AI services."
          focus="product architecture, security, scalability"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/direito_moz.git',
            Live: 'https://direito-moz.onrender.com',
          }"
        />
        <the-project
          title="ReasonerHR"
          :stack="[
            'FastAPI',
            'Jinja2',
            'CSS3',
            'Stimulus.js',
            'Firebase auth',
            'OpenAI API',
            'Gunicorn',
            'Docker',
          ]"
          description="This service analyzes customer service audio calls to assess quality and performance, and processes CVs to highlight the most relevant candidates for a company. The focus is on decision support — not automation theater."
          focus="security boundaries, integrations, maintainability"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/audio-analysis.git',
            Live: 'https://reasoner-hr.onrender.com',
          }"
        />

        <the-project
          title="FK Auto - Automotive Inventory Management Platform"
          :stack="[
            'Symfony 7',
            'Twig',
            'SCSS',
            'Stimulus.js',
            'EasyAdmin',
            'PostgreSQL',
            'Nginx',
            'Docker',
          ]"
          description="FK Auto is a digital automotive platform designed to manage and showcase vehicle inventory with precision and performance. The system centralizes detailed specifications — including engine codes, displacement, torque, transmission data, production year, pricing, and mileage — providing a structured and scalable solution for automotive businesses. Built with a modern full-stack architecture, FK Auto focuses on data consistency, performance optimization, and clean user experience. The platform supports advanced filtering, structured engine taxonomy, and modular expansion for future integrations such as analytics, marketplace functionality, or AI-driven recommendations. FK Auto reflects an engineering-first mindset: clear data modeling, backend integrity, and scalable infrastructure designed for long-term growth rather than short-term presentation."
          focus="maintainability, security, scalability"
          :links="{
            Github: 'https://github.com/kokorvsskyn3t/fk_auto.git',
            Live: 'https://fk-auto.onrender.com',
          }"
        />
      </div>
    </main>
  </div>
</template>
