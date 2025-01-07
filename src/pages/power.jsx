import ComponentNavigateHeader from "../components/CommponentNavigate";
import CreateRep from "../components/createRep";

export default function Oxigen() {
  const buttons = [
    {
      id: "component1",
      label: "ایجاد نماینده",
      component: <CreateRep />,
      classNames: "bg-green-500 text-white hover:bg-green-500",
    },
  ];

  return <ComponentNavigateHeader buttons={buttons} />;
}
