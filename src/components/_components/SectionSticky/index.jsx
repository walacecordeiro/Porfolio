export function SectionSticky({ title, normalCaseOnMobile, className, children }) {
 return (
  <section className={`${className}`}>
   {title && (
    <div className="sticky top-0 z-20 -mx-6  w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:bg-transparent lg:w-fit lg:p-0 lg:mb-7">
     <h2
      className={`text-sm font-bold lg:text-xl ${
       normalCaseOnMobile ? "normal-case lg:uppercase" : "uppercase"
      } tracking-widest text-slate-200`}
     >
      {title}
     </h2>
    </div>
   )}
   {children}
  </section>
 );
}
