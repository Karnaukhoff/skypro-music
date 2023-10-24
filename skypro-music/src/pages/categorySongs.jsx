import { useParams } from "react-router-dom";

export const CategorySongs = () => {
    const params = useParams();
    return (
      <section>
        <h1>CategoryPage {params.id}</h1>
      </section>
    );
  };