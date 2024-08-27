import es from "@constants/es.json";
import en from "@constants/en.json";

const LANG = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.SPANISH) return { ...en, ...es };
  return en;
};
