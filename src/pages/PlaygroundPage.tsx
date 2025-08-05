// import Onboarding from "../components/Onboarding";
// import TermsAndConditions from "../components/TermsAndConditions";
// import ExpandableText from "../components/ExpandableText";
// import SearchBox from "../components/SearchBox";
// import TagList from "../components/TagList";
// import { Toaster } from "react-hot-toast";
// import ToastDemo from "../components/ToastDemo";
import OrderStatusSelector from "../components/OrderStatusSelector";

const PlaygroundPage = () => {
  return (
    // <ExpandableText text="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nostrum quaerat nesciunt fugiat. Pariatur iusto veritatis cupiditate tempora eius modi nihil placeat provident eos similique culpa ab sapiente, nemo, natus libero rem voluptatibus facere suscipit! Eveniet molestias a tenetur, repudiandae eaque minima. In, eveniet! Labore deserunt voluptates laborum, veniam porro animi inventore eius dolor, quisquam deleniti esse fugiat nemo hic natus doloribus nulla enim consequatur distinctio pariatur dolore, expedita quod quasi. Autem tempore dignissimos ab minus optio deserunt impedit neque qui consectetur, minima ullam, expedita dicta praesentium repudiandae temporibus harum mollitia? Autem illum corrupti natus ipsum cupiditate eius corporis ut." />
    // <SearchBox onChange={(text) => alert(text)} />
    // <TagList />
    // <>
    //   <ToastDemo />
    //   <Toaster />
    // </>

    <OrderStatusSelector onChange={(value) => alert(value)} />
  );
};

export default PlaygroundPage;
