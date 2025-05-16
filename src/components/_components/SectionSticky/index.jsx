export function SectionSticky({ title, normalCaseOnMobile, className, children }) {
 return (
  <section className={`${className}`}>
   {title && (
    <div className="sticky top-0 z-20 w-full bg-background ring-4 ring-background py-5 sm:ring-0 md:-mx-12 md:px-12 lg:static lg:bg-transparent lg:w-fit lg:p-0 lg:mb-7">
     <h2
      className={`text-sm font-bold lg:text-xl ${
       normalCaseOnMobile ? "normal-case lg:uppercase" : "uppercase"
      } tracking-widest text-black_white`}
     >
      {title}
     </h2>
    </div>
   )}
   {children}
  </section>
 );
}
