import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa6";

export default function ButtonPrimary({
  innerText,
  type,
  eventClick,
  className,
  pdfDownload,
}) {
  return (
    <a
      href={pdfDownload}
      download
      className={`before:block before:absolute before:-inset-0 before:-skew-x-0 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1 before:${className}`}
    >
      <Button
        type={type}
        onClick={eventClick}
        className={`bg-black/50 h-fit gap-2 text-base text-primary rounded-sm py-4 px-12 -skew-x-0 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1 ${className}`}
      >
        {pdfDownload ? <FaFilePdf /> : ""}
        {innerText}
      </Button>
    </a>
  );
}
