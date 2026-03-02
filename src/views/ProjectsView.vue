<script setup>
import TheProject from '@/components/TheProject.vue'
</script>

<template>
  <div id="projects">
    <main>
      <the-badge title="My Work"></the-badge>

      <h1>Projects</h1>

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
          problem="Manual order management and fulfillment slowed down operations"
          solution="Reduced order processing time by 80%, fully automated checkout & fulfillment workflow"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/alucard.git',
            Live: 'https://alucard-wfio.onrender.com',
          }"
        />
        
        <the-project
          title="Direito Moz — Legal Document SaaS"
          :stack="[
            'Vue 3',
            'Symfony 7',
            'Twig',
            'SCSS',
            'Stimulus.js',
            'FastAPI',
            'Firebase Auth',
            'PostgreSQL',
            'Nginx',
            'Docker',
          ]"
          description="Direito Moz is AI-powered platform for generating legal documents automatically and assistance platform for legal professionals, enabling structured document generation, AI-assisted drafting, and secure user access."
          problem="Lawyers spend excessive time drafting routine documents"
          solution="Reduced legal document creation time from hours to seconds"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/direito_moz.git',
            Live: 'https://direito-moz.onrender.com',
          }"
        />

        <the-project
          title="FK Auto - Automotive Inventory Management & Display"
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
          description="FK Auto is a web platform designed to manage and showcase vehicle inventory with precision and performance. The system centralizes detailed specifications — including engine codes, displacement, torque, transmission data, production year, pricing, and mileage — providing a structured and scalable solution for automotive businesses."
          problem="Car dealerships lacked centralized vehicle management with media support"
          solution="Streamlined vehicle catalog management and online display"
          :links="{
            Github: 'https://github.com/kokorvsskyn3t/fk_auto.git',
            Live: 'https://fk-auto.onrender.com',
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
            'Nginx',
            'Docker',
          ]"
          description="AI-driven service analyzes customer service audio calls to assess quality and performance, and processes CVs to highlight the most relevant candidates for a company. The focus is on decision support — not automation theater."
          problem="HR departments spend hours manually screening resumes and calls"
          solution="Accelerated HR screening by 70%, improved candidate matching accuracy, automated call assessment"
          :links="{
            Github: 'https://github.com/sidneyfranciscodev/audio-analysis.git',
            Live: 'https://reasoner-hr.onrender.com',
          }"
        />
      </div>
    </main>
  </div>
</template>
