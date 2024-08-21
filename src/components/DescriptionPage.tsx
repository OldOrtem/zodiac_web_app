import { useParams } from "react-router-dom";


const DescriptionPage = () => {
    const {name} = useParams();
    return (
      <div>
        {name}
      </div>
    );
  };
  
  export default DescriptionPage;
  