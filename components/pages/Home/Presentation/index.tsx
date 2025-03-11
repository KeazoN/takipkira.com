import DocumentStorage from "./pages/DocumentStorage";
import IncomeExpenseAnalysis from "./pages/IncomeExpenseAnalysis";
import MaintenanceManagement from "./pages/MaintenanceManagement";
import RentTracking from "./pages/RentTracking";

const Presentation = () => {
  return (
    <section className="mt-20">
      <div className="container max-w-[1255px]">
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          <RentTracking />
          <MaintenanceManagement />
          <IncomeExpenseAnalysis />
          <DocumentStorage />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
