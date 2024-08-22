export default function AboutPage() {
 return (
  <section
   id="sobre"
   className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
   aria-label="About me"
  >
   <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:bg-transparent lg:w-full lg:py-0 lg:pb-5">
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">
     Sobre mim
    </h2>
   </div>
   <div>
    <p className="mb-4">
     Anos me dedicando a aprender algumas tecnologias front-end como React e Next.js, percebi que o
     que realmente me atrai e desperta boas emoções é a experiência visual da construção das
     interfaces: cores, tipografias, pixels…
    </p>
    <p className="mb-4">
     Com base nessa percepção pessoal, decidi mudar minha trajetória e me especializar em UX/UI
     Design.
    </p>
    <p className="mb-4">
     Acredito que combinar meus conhecimentos em prototipagem e desenvolvimento pode me tornar um
     profissional capaz de harmonizar minha equipe de designers com a equipe de desenvolvedores nos
     projetos em questão, uma abordagem híbrida que pode fazer a diferença.
    </p>
   </div>
  </section>
 );
}
