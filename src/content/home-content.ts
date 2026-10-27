import type { Locale } from "@/lib/locale";

export type Principle = {
  number: string;
  title: string;
  englishTitle: string;
  description: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type HomeContent = {
  philosophy: { eyebrow: string; title: string; description: string; statement: string };
  principles: { eyebrow: string; title: string; items: Principle[] };
  showcase: {
    eyebrow: string; model: string; title: string; description: string;
    image: { src: string; alt: string };
    specifications: ProductSpecification[];
    dimensionsLabel: string; productPageLabel: string; productPageHref: string; disclaimer: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  fa: {
    philosophy: {
      eyebrow: "فلسفه RKaudio",
      title: "هر نت، همان‌گونه که اجرا شده است.",
      description: "ما باور داریم یک سیستم صوتی خوب نباید شخصیت خود را به موسیقی تحمیل کند. وظیفه آن حفظ جزئیات، انرژی و احساس اجرای اصلی است؛ نه اضافه‌کردن چیزی که وجود نداشته و نه حذف‌کردن چیزی که باید شنیده شود.",
      statement: "صدای صادق، طراحی ماندگار.",
    },
    principles: {
      eyebrow: "سه اصل بنیادین",
      title: "سادگی در ظاهر. دقت در درون.",
      items: [
        { number: "01", title: "قدرت", englishTitle: "Power", description: "قدرت واقعی فقط بلندی صدا نیست؛ توانایی حفظ کنترل، وضوح و تعادل در تمام سطوح شنیداری است." },
        { number: "02", title: "اصالت", englishTitle: "Authenticity", description: "بازآفرینی موسیقی بدون اغراق و رنگ‌آمیزی غیرضروری؛ نزدیک به چیزی که هنرمند و مهندس صدا شنیده‌اند." },
        { number: "03", title: "ماندگاری", englishTitle: "Longevity", description: "طراحی و ساخت محصولی که به یک دوره کوتاه وابسته نباشد و برای سال‌ها قابل اعتماد باقی بماند." },
      ],
    },
    showcase: {
      eyebrow: "محصول شاخص", model: "SPIDER 2", title: "حضور قدرتمند، با کنترل دقیق.",
      description: "Spider2 با بدنه مشکی مات، ساختار ایستاده و کنترل‌های یکپارچه طراحی شده است تا قدرت صوتی را در فرمی ساده، منسجم و قابل اعتماد ارائه کند.",
      image: { src: "/images/spider2/spider2-main.webp", alt: "نمای کامل اسپیکر Spider2 از RKaudio" },
      specifications: [
        { label: "ارتفاع", value: "620 mm" }, { label: "عرض", value: "280 mm" }, { label: "عمق", value: "300 mm" },
        { label: "نوع بدنه", value: "ایستاده" }, { label: "رنگ", value: "مشکی مات" }, { label: "کنترل", value: "پنل یکپارچه" },
      ],
      dimensionsLabel: "ابعاد مرجع محصول", productPageLabel: "مشاهده جزئیات Spider2", productPageHref: "/fa/products/spider2",
      disclaimer: "ابعاد و مشخصات نمایش‌داده‌شده بر اساس اطلاعات فعلی محصول هستند و در نسخه نهایی پس از تأیید فنی به‌روزرسانی می‌شوند.",
    },
  },
  en: {
    philosophy: {
      eyebrow: "The RKaudio philosophy", title: "Every note, as it was performed.",
      description: "We believe a sound system should never impose its own character on music. Its purpose is to preserve the detail, energy, and emotion of the original performance—adding nothing unnecessary and taking nothing away.",
      statement: "Honest sound. Enduring design.",
    },
    principles: {
      eyebrow: "Three fundamental principles", title: "Simple in form. Precise within.",
      items: [
        { number: "01", title: "Power", englishTitle: "Power", description: "True power is more than volume. It is the ability to preserve control, clarity, and balance at every listening level." },
        { number: "02", title: "Authenticity", englishTitle: "Authenticity", description: "Music reproduced without exaggeration or unnecessary coloration—closer to what the artist and engineer intended." },
        { number: "03", title: "Longevity", englishTitle: "Longevity", description: "Products designed beyond short-lived trends and built to remain dependable for years." },
      ],
    },
    showcase: {
      eyebrow: "Signature product", model: "SPIDER 2", title: "Commanding presence. Precise control.",
      description: "Spider2 combines a matte-black enclosure, floorstanding form, and integrated controls to deliver commanding sound through a simple and cohesive design.",
      image: { src: "/images/spider2/spider2-main.webp", alt: "Full view of the RKaudio Spider2 speaker" },
      specifications: [
        { label: "Height", value: "620 mm" }, { label: "Width", value: "280 mm" }, { label: "Depth", value: "300 mm" },
        { label: "Form", value: "Floorstanding" }, { label: "Finish", value: "Matte black" }, { label: "Control", value: "Integrated panel" },
      ],
      dimensionsLabel: "Reference product dimensions", productPageLabel: "Explore Spider2", productPageHref: "/en/products/spider2",
      disclaimer: "Dimensions and details are based on the current product information and will be updated after final technical verification.",
    },
  },
};
