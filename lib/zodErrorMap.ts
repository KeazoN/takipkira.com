import { z } from "zod";

const turkishErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const messages: Record<string, string> = {
    invalid_type: "Geçersiz tür: Beklenen {expected}, ancak {received} alındı.",
    invalid_literal: "Geçersiz değer. Beklenen: {expected}.",
    unrecognized_keys: "Bilinmeyen anahtar(lar): {keys}.",
    invalid_union:
      "Geçersiz giriş, belirtilen şemaların hiçbiriyle eşleşmiyor.",
    invalid_enum_value:
      "Geçersiz değer, beklenenlerden biri olmalı: {options}.",
    invalid_arguments: "Fonksiyon için geçersiz argümanlar sağlandı.",
    invalid_return_type: "Fonksiyon geçersiz bir dönüş değeri döndürdü.",
    invalid_date: "Geçersiz tarih formatı.",
    invalid_string: "Geçersiz string formatı.",
    too_small: `Bu alan en az ${
      "minimum" in issue ? issue.minimum : ""
    } karakter içermelidir.`,
    too_big: `Bu alan en fazla ${
      "maximum" in issue ? issue.maximum : ""
    } karakter içermelidir.`,
    invalid_intersection_types: "Kesişim türleri çakışıyor.",
    not_multiple_of: "Değer {multipleOf}’nin katı olmalıdır.",
    not_finite: "Değer sonlu bir sayı olmalıdır.",
    custom: "Geçersiz değer.",
  };

  return {
    message: messages[issue.code] || ctx.defaultError,
  };
};

z.setErrorMap(turkishErrorMap);
