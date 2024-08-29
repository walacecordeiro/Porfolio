import { Button } from "@/components/ui/button";

export default function ButtonPrimary({ innerText, type, className }) {
 return (
  <span className={`before:block before:absolute before:-inset-0 before:-skew-x-12 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1 ${className}`}>
   <Button type={type} className={`bg-black/50 h-fit text-base text-primary rounded-sm py-4 px-12 -skew-x-12 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1 ${className}`}>
    {innerText}
   </Button>
  </span>
 );
}
