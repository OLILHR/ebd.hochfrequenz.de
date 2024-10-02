<script>
  import "../app.scss";
  import { base } from "$app/paths";
  import { Footer } from "$lib";
</script>

<div class="min-h-screen flex flex-col">
  <section
    class="bg-secondary py-28 flex flex-grow items-center justify-center"
  >
    <div class="rounded-lg bg-tint p-12 shadow-md">
      <h1 class="text-xl pb-5">Entscheidungsbaumdiagramme</h1>
      <h2
        class="text-[12px] border-b border-secondary inline-block pb-[12px] mb-[20px] uppercase"
      >
        - aber es sind actually Diagramme.
      </h2>
      <h3 class="font-bold pb-2">Finde dein EBD</h3>
      <a
        href="{base}/ebd"
        class="rounded-full bg-secondary text-white px-5 py-2 shadow-md inline-block no-underline"
      >
        Jetzt öffnen
      </a>
    </div>
  </section>
  <section class="flex flex-col lg:flex-row bg-tint pb-10">
    <div class="flex-1 px-10 py-10">
      <h4 class="font-bold text-sm mb-2">Lorem Ipsum</h4>
      <p class="text-[12px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </div>
    <div class="flex-1 px-10 pt-10">
      <h4 class="font-bold text-sm mb-2">Lorem Ipsum</h4>
      <p class="text-[12px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </div>
    <div class="flex-1 px-10 pt-10">
      <h4 class="font-bold text-sm mb-2">Lorem Ipsum</h4>
      <p class="text-[12px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <ul class="list-disc ps-2 my-2">
        <li class="text-[12px]">
          <span class="font-bold">Lorem Ipsum</span> Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </li>
        <li class="text-[12px]">
          <span class="font-bold">Lorem Ipsum</span> Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </li>
        <li class="text-[12px]">
          <span class="font-bold">Lorem Ipsum</span> Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </li>
      </ul>
    </div>
  </section>
  <Footer background="bg-secondary" />
</div>
