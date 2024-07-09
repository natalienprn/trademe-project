import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

// interface SearchParams{
//     keyword?: string;
// }

export const pageNavigation = () => {
    const navigate = useNavigate();
  
    const handleSearch = (categoryId: number, keyword: string) => {
      navigate({
        pathname: `/result/${categoryId}`,
        search: createSearchParams(keyword).toString(),
      });
    };
  
    return { handleSearch };
  };
  