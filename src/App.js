
import { useState } from 'react';
import './App.css';

const yapilacaklar = [
  {
    id:12,
    baslik:"Yumurta Alınacak",
    tamamlandi:false
  },
  {
    id:156,
    baslik:"Süt Alınacak",
    tamamlandi:true
  }
]


function App() {

  const [isler,islerGuncelle] = useState(yapilacaklar)

  const tamamlamaİslemi = (tiklananEleman)=> {
    islerGuncelle ( eskiDeger => 
       eskiDeger.map (eskiEleman=>{
          if(eskiEleman.id === tiklananEleman.id) {
            return  {...eskiEleman,tamamlandi:!eskiEleman.tamamlandi}
          }
          else{
            return eskiEleman
          }
      })
    )
  }


  return (
   <>
   <h1>Yapılacaklar Listesi</h1>
    {isler.map( (eleman) => {
      return(
        <div key={eleman.id}>
         <label>
            <input type='checkbox' checked={eleman.tamamlandı} onChange={ ()=>tamamlamaİslemi(eleman) } />
            {eleman.baslik}
         </label>
        </div>
      )
    } )}
   </>
  );
}

export default App;
