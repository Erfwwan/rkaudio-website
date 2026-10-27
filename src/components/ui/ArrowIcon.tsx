export default function ArrowIcon({ rtl = false }: { rtl?: boolean }) {
  return <span aria-hidden="true" className={`arrow-icon ${rtl ? "arrow-rtl" : ""}`}>↗</span>;
}
