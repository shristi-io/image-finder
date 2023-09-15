import { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import searchImages from "./api/fetchImage";
import glass from "./assets/glass.svg";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      const { data, pages } = await searchImages(search, page);
      setImages(data);
      setTotalPages(pages);
    };
    getImages();
  }, [search, page]);

  const handleSubmit = (query) => {
    setSearch(query);
  };

  const handlePage = (pageNo) => {
    setPage(pageNo);
  };

  return (
    <>
      <header className="py-8">
        <div className="text-center text-4xl">
          <h1 className="flex items-center justify-center gap-2">
            Image Finder
            <img height={30} width={30} src={glass} alt="Search Glass" />
          </h1>
        </div>
      </header>
      <main>
        <SearchBar submit={handleSubmit} />
        {images.length === 0 ? (
          ""
        ) : (
          <>
            {" "}
            <ImageList imageList={images} totalPages={totalPages} />
            <Pagination
              page={page}
              totalPages={totalPages}
              pageHandler={handlePage}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
