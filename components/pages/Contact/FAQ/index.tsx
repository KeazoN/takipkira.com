import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";

const FAQ = () => {
  return (
    <div className="container max-w-[1255px] flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SquareCard
          title="Profesyonel Mülk Yönetimi Hizmetleri Nelerdir?"
          description="Takip Kira olarak mülklerinizin profesyonel yönetimini üstleniyoruz. Sunduğumuz hizmetler: Online Mülk Takip Sistemi, Güvenli Kiralama, Vergi Yönetimi, Kira Tahsilatı, Bakım-Onarım ve Emlak Danışmanlığı. Mülk yönetiminde 10 yılı aşkın tecrübemizle yanınızdayız."
        />
        <SquareCard
          title="Online Mülk Takip Sistemi Nasıl Çalışır?"
          description="7/24 erişilebilir online platformumuz üzerinden mülklerinizin tüm finansal verilerini, kira ödemelerini ve giderlerini anlık takip edebilirsiniz. Gelişmiş raporlama sistemimiz ile mülk performansınızı detaylı analiz ediyoruz."
        />
        <SquareCard
          title="Emlak Vergisi ve Yasal Yükümlülükler Nasıl Yönetilir?"
          description="Mülklerinizin tüm yasal yükümlülüklerini ve vergi ödemelerini profesyonel ekibimizle takip ediyor ve zamanında ödüyoruz. Güncel mevzuat değişikliklerini takip ederek mülklerinizi yasal açıdan güvence altına alıyoruz."
        />
        <SquareCard
          title="Kira Tahsilatı ve Kiracı İlişkileri Yönetimi"
          description="Kiracı ilişkilerini profesyonel standartlarda yönetiyor, kira ödemelerinin düzenli yapılmasını sağlıyoruz. Gelişmiş tahsilat sistemimiz ve deneyimli ekibimizle kira gelirlerinizi güvence altına alıyoruz."
        />
      </div>
      <RectangleCard
        title="Mülk Yönetimi Hizmetlerimizden Nasıl Yararlanabilirsiniz?"
        description="Türkiye'nin önde gelen mülk yönetim şirketi Takip Kira'nın profesyonel hizmetlerinden yararlanmak için web sitemizden veya müşteri hizmetlerimizden detaylı bilgi alabilirsiniz. Size özel çözümler sunuyoruz."
      />
      <RectangleCard
        title="Mülk Yönetimi Hizmet Bölgelerimiz"
        description="Kayseri merkezli şirketimiz, Türkiye genelinde büyüyen hizmet ağıyla profesyonel mülk yönetimi hizmeti sunmaktadır. Hizmet verdiğimiz bölgeler ve detaylı bilgi için müşteri temsilcilerimizle iletişime geçebilirsiniz."
      />
      <RectangleCard
        title="Mülk Bakım ve Tadilat Hizmetleri"
        description="Mülklerinizin değerini korumak için periyodik bakım ve gerekli tadilatları uzman ekiplerimizle yönetiyoruz. 7/24 teknik destek, acil müdahale ve planlı bakım hizmetlerimizle mülklerinizi en iyi durumda tutuyoruz."
      />
      <RectangleCard
        title="Profesyonel Kira Değeri Belirleme"
        description="SPK lisanslı uzmanlarımız ve güncel piyasa analizlerimizle mülklerinizin optimum kira değerini belirliyoruz. Detaylı Kira Ekspertiz Raporumuz ile mülkünüzden maksimum getiri elde etmenizi sağlıyoruz."
      />
    </div>
  );
};

export default FAQ;
