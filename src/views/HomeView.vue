<script setup>
import TheHero from '@/components/TheHero.vue'
</script>

<template>
  <div id="home">
    <header>
      <the-hero></the-hero>
    </header>
    <main>
      <section id="intro">
        <the-badge title="Introduction"></the-badge>

        <h2>Who I Am</h2>
        <p>
          I am a backend Engineer focused on REST API architecture, containerized SaaS systems and
          backend performance optimization. I build production-ready applications using Symfony and
          FastAPI, with PostgreSQL relational modeling and Docker-based infrastructure. Experienced
          in secure payment integrations (Stripe), authentication systems and microservice
          separation. Currently open to international opportunities in Europe, particularly Portugal
          (CPLP), and remote backend roles. Strong interest in scalable system design, backend
          security and infrastructure fundamentals.
        </p>

        <h2>What I Do</h2>
        <h3>Architecture</h3>
        <p>
          I design backend systems with clear boundaries, security-first thinking, and scalability in
          mind.
        </p>
        <h3>Full-Stack Engineering</h3>
        <p>
          I build end-to-end applications using Vue (JavaScript), Symfony (PHP), FastAPI (Python),
          PostgreSQL, Firebase, and Docker.
        </p>

        <h3>AI Integration</h3>
        <p>
          I apply AI pragmatically — document analysis, audio evaluation, and decision support systems
          that solve real business problems.
        </p>
      </section>
    </main>
  </div>
</template>
