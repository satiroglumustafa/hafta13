import { act, useReducer, useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import IsListe from "./IsListe";

const yapilacaklar = [
  {
    id: 12,
    baslik: "Yumurta Alınacak",
    tamamlandi: false,
  },
  {
    id: 156,
    baslik: "Süt Alınacak",
    tamamlandi: true,
  },
];

const islerReducer = (state, action) => {
  switch (action.type) {
    case "TAMAMLAMA":
      return state.map((eleman) => {
        if (eleman.id === action.id) {
          return { ...eleman, tamamlandi: !eleman.tamamlandi };
        } else {
          return eleman;
        }
      });

    case "YENİİŞ":
      const yeniIs = {
        id: uuid(),
        baslik: action.baslik,
        tamamlandi: false,
      };

      return [...state, yeniIs];

    case "İŞSİL":

    case "İSGUNCELLE":

    default:
      return state;
  }
};

function App() {
  // const [isler,islerGuncelle] = useState(yapilacaklar)
  const [inputBaslik, inputBaslikGuncelle] = useState("");
  const [isler, vekilFonksiyon] = useReducer(islerReducer, yapilacaklar);

  const yeniIsInput = (event) => {
    inputBaslikGuncelle(event.target.value);
  };

  return (
    <>
      <section className="container pt-5">
        <h1>Yapılacaklar Listesi</h1>

        <div className="row mb-3">
          <div className="col-auto">
            <input
              value={inputBaslik}
              onChange={yeniIsInput}
              type="text"
              className="form-control"
              placeholder="Yeni İş Başlığı Girin"
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-success"
              onClick={() =>
                vekilFonksiyon({ type: "YENİİŞ", baslik: inputBaslik })
              }
            >
              {" "}
              + Ekle{" "}
            </button>
          </div>
        </div>

        <IsListe isler={isler} vekilFonksiyon={vekilFonksiyon} />
      </section>
    </>
  );
}

export default App;
