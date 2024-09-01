const IsListe = ({ isler,vekilFonksiyon }) => {
    return (
        <>
            {isler.map((eleman) => {
                return (
                    <div className="form-check" key={eleman.id}>
                        <label>
                            <input type='checkbox' className="form-check-input" checked={eleman.tamamlandı} onChange={() => vekilFonksiyon({ type: "TAMAMLAMA", id: eleman.id })} />
                            {eleman.baslik}
                        </label>
                    </div>
                )
            })}
        </>
    )
}

export default IsListe