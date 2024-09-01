
import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

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
  const [inputBaslik,inputBaslikGuncelle] = useState("")

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

  const YeniIsInput = (event)=> {
    inputBaslikGuncelle(event.target.value)
  }


  function YeniIsEkle (){
    const yeniIs = {
      id:uuid(),
      baslik:inputBaslik,
      tamamlandi: false
    }
    islerGuncelle ( eskiDeger => [...eskiDeger,yeniIs] )
    inputBaslikGuncelle("")
    
  }

  return (
   <>

   <div>
      <input value={inputBaslik} onChange={YeniIsInput} type='text' placeholder='Yeni İş Başlığı Girin' />
      <button onClick={YeniIsEkle}> + Ekle </button>
   </div>
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
