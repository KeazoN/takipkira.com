export interface ICountry {
  code: string;
  lang: string;
  name: string;
}
export const defaultCountry: ICountry = {
  code: "tr",
  lang: "tr",
  name: "Türkçe",
};
export const countries: ICountry[] = [
  { code: "tr", lang: "tr", name: "Türkçe" },
  { code: "us", lang: "en", name: "English" },
];
