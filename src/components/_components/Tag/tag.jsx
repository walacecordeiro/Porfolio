export default function Tag({ innerText, className }) {
 return (
  <div
   className={`flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary ${className}`}
  >
   {innerText}
  </div>
 );
}
