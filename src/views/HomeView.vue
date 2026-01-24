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
          I'm a software engineer with a passion for building secure, maintainable, and
          well-architected applications. My expertise spans backend and frontend development, with a
          focus on creating systems that are easy to understand and extend over time.
        </p>

        <br>

        <h2>What I Do</h2>

        <table>
          <thead>
            <tr>
              <th>Architecture</th>
              <th>Full-Stack Engineering</th>
              <th>AI Integration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Design backend systems with clear boundaries,
                security-first thinking, and scalability in mind.
              </td>
              <td>
                Build end-to-end applications using Vue (JavaScript),
                Symfony (PHP), FastAPI (Python), PostgreSQL,
                Firebase, and Docker.
              </td>
              <td>
                Apply AI pragmatically — document analysis, audio evaluation,
                and decision support systems that solve real business problems.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
