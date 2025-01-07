import ComponentNavigateHeader from "../components/CommponentNavigate";
import OxCreateAgent from "../components/oxCreateAgent";
import OxDepositDates from "../components/oxDepositDates";
import OxPaymentList from "../components/OxPaymentList";
import OxReceiptregistrationsystem from "../components/oxReceiptRegistrationSystem";

export default function Oxigen() {
  const buttons = [
    {
      classNames: "bg-blue-500 text-white hover:bg-blue-500",
      id: "component1",
      label: "سامانه مدیریت اکسیژن",
      component: <OxCreateAgent />,
      color: "hover:bg-blue-100",
    },
    {
      classNames: "bg-blue-500 text-white hover:bg-blue-500",
      id: "component2",
      label: "سامانه ثبت فیش",
      component: <OxReceiptregistrationsystem />,
      color: "hover:bg-blue-100",
    },
    {
      classNames: "bg-blue-500 text-white hover:bg-blue-500",
      id: "component3",
      label: "تاریخ واریزی ها",
      component: <OxDepositDates />,
      color: "hover:bg-blue-100",
    },
    {
      classNames: "bg-blue-500 text-white hover:bg-blue-500",
      id: "component4",
      label: "لیست پرداختی ها",
      component: <OxPaymentList />,
      color: "hover:bg-blue-100",
    },
    {
      className: "hidden",
      id: "component4",
      label: "لیست پرداختی ها",
      component: <OxPaymentList />,
    },
  ];

  return <ComponentNavigateHeader buttons={buttons} />;
}
