import { Button } from "@/components/ui/button";
import { FaFilePdf } from "react-icons/fa6";
import { RiExternalLinkFill } from "react-icons/ri";

export default function ButtonPrimary({
  innerText,
  type,
  eventClick,
  className,
  pdfDownload,
  url,
}) {
  return (
    <a
      href={url ? url : pdfDownload}
      target={url && "blank"}
      download
      className={`before:block before:absolute before:-inset-0 before:-skew-x-0 before:rounded-md before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1`}
    >
      <Button
        type={type}
        onClick={eventClick}
        className={`bg-muted-foreground/10 shadow-md h-fit gap-2 text-base text-primary rounded-md py-4 px-12 -skew-x-0 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1 ${className}`}
      >
        {pdfDownload ? <FaFilePdf /> : ""}
        {innerText}
        {url ? <RiExternalLinkFill /> : ""}
      </Button>
    </a>
  );
}
