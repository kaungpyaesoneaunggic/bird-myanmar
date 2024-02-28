import React from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

export default function DetailPage() {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: bird,
  } = useFetch("https://bird-json-server-six.vercel.app/Tbl_Bird/" + id);

  const getImageUrl = (imagePath) => {
    return `https://raw.githubusercontent.com/kaungpyaesoneaunggic/bird-json-server-vercel-main/main/${imagePath}`;
  };

  const history = useHistory();
  const handleDelete = () => {
    confirmDelete();
    fetch("https://bird-json-server-six.vercel.app/Tbl_Bird/"+bird.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/birds");
    });
  };
  const handleBack = () => {
    history.goBack();
  };

  // eslint-disable-next-line no-restricted-globals
  function confirmDelete() {
    var result = window.confirm("Are you sure you want to delete?");
    if (result) {
      console.log('chose yes')
    } else {
      return;
    }
  }

  return (
    <div className="bgApply" style={{ minHeight: "71vh" }}>
      <div className="container my-4 pt-5">
        {isPending && <div className="h1 text-white">Loading...</div>}
        {error && <div className="h1 text-white">{error} </div>}
        {bird && (
          <div className="row">
            <div className="col-md-5">
              <div className="card allRounded">
                <img
                  src={getImageUrl(bird.ImagePath)}
                  className="allRounded"
                  alt="Image of Bird"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card e bg-secondary ">
                <div className="card-body">
                  <h2 className="card-titl text-light">
                    {bird.BirdEnglishName}
                  </h2>
                  <h3 className="card-subtitle mb-2  text-light">
                    {bird.BirdMyanmarName}
                  </h3>
                  <p className="card-text textlight">{bird.Description}</p>
                  <button className="btn btn-dark m-2" onClick={handleBack}>
                    နောက်သို့
                  </button>
                  <button
                    className="btn btn-outline-danger m-2"
                    onClick={handleDelete}
                  >
                    ဖျက်ရန်
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
