import RectangleCard from "./RectangleCard";
import SquareCard from "./SquareCard";

const FAQ = () => {
  return (
    <div className="container max-w-[1255px] flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SquareCard
          title="Takip Kira hangi hizmetleri sunmaktadır?"
          description="Takip Kira, mülk sahiplerine yönelik çeşitli hizmetler sunmaktadır. Bunlar arasında Online Şube Hizmeti, Güvenli Kiralama, Vergi Takibi ve Ödenmesi, Kira Tahsilatı & Takibi, Tadilat ve Bakım Hizmetleri ile Satış ve Kiralama Hizmetleri bulunmaktadır."
        />
        <SquareCard
          title="Online Şube Hizmeti nedir ve nasıl çalışır?"
          description="Online Şube Hizmeti, mülk sahiplerinin ödeme, harcama, gelir ve giderlerini şeffaf ve güvenilir bir şekilde takip etmelerini sağlayan bir platformdur. Nerede olursanız olun, tek tuşla mülkünüzle ilgili tüm işlemleri görebilir ve takip edebilirsiniz."
        />
        <SquareCard
          title="Vergi takibi ve ödenmesi hizmeti nasıl işler?"
          description="Takip Kira, mülklerinizin emlak vergilerini takip ederek, yasal süresi içinde sizin adınıza ödemektedir. Bu sayede vergi ödemelerinizin zamanında ve doğru bir şekilde yapılması sağlanır."
        />
        <SquareCard
          title="Kira tahsilatı ve takibi hizmeti neyi kapsar?"
          description="Takip Kira, kiracınızın kira ödemelerini zamanında yapmasını sağlamak için gerekli görüşmeleri gerçekleştirir ve kira tahsilatını takip eder. Böylece düzenli kira gelirinizin devamlılığı sağlanır."
        />
      </div>
      <RectangleCard
        title="Takip Kira'nın hizmetlerinden nasıl faydalanabilirim?"
        description="Takip Kira'nın hizmetlerinden faydalanmak için web sitesindeki iletişim bilgilerini kullanarak şirketle iletişime geçebilir ve detaylı bilgi alabilirsiniz."
      />
      <RectangleCard
        title="Takip Kira'nın hizmetleri hangi bölgelerde geçerlidir?"
        description="Takip Kira, Kayseri merkezli bir şirket olup, hizmetlerinin geçerli olduğu bölgeler hakkında en doğru bilgiye ulaşmak için doğrudan şirketle iletişime geçmeniz önerilir."
      />
      <RectangleCard
        title="Mülkümün bakım ve tadilat işlemleri nasıl yönetiliyor?"
        description="Takip Kira, mülkünüzün bakım ve tadilat gereksinimlerini çözüm ortakları aracılığıyla en hesaplı ve hızlı şekilde gerçekleştirir. Tüm işlemler, mülk sahibinin onayı ile yapılır ve süreç şeffaf bir şekilde yönetilir."
      />
      <RectangleCard
        title="Kira bedelinin güncel piyasa değerine uygun olup olmadığını nasıl öğrenebilirim?"
        description="Takip Kira, SPK lisanslı değerleme uzmanları tarafından hazırlanan 'Kira Ekspertiz Raporu' ile mülkünüzün kira bedelini belirler. Bu rapor sayesinde mülkünüzün gerçek değerini öğrenebilirsiniz."
      />
    </div>
  );
};

export default FAQ;
