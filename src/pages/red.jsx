import ComponentNavigateHeader from "../components/CommponentNavigate";
import RedCreateAgent from "../components/redCreateAgent";
import RedDepositDates from "../components/redDepositDates";
import RedPaymentList from "../components/redPaymentList";
import RedReceiptregistrationsystem from "../components/redreceiptregistrationsystem";

export default function Oxigen() {
  const buttons = [
    {
      id: "component1",
      label: "سامانه مدیریت رد",
      component: <RedCreateAgent />,
      classNames: "bg-red-500 text-white hover:bg-red-500",
      color: "hover:bg-red-100",
    },
    {
      id: "component2",
      label: "سامانه ثبت فیش",
      component: <RedReceiptregistrationsystem />,
      classNames: "bg-red-500 text-white hover:bg-red-500",
      color: "hover:bg-red-100",
    },
    {
      id: "component3",
      label: "تاریخ واریزی ها",
      component: <RedDepositDates />,
      classNames: "bg-red-500 text-white hover:bg-red-500",
      color: "hover:bg-red-100",
    },
    {
      id: "component4",
      label: "لیست پرداختی ها",
      component: <RedPaymentList />,
      classNames: "bg-red-500 text-white hover:bg-red-500",
      color: "hover:bg-red-100",
    },
  ];

  return <ComponentNavigateHeader buttons={buttons} />;
}
