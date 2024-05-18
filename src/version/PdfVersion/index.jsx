function PdfVersion() {

    return (<>
    <div className="pdf-Container" style={{ display: 'flex',
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', width: '70%'}}>
        <div className="pdf-imagen" style={{borderWidth: '1px', borderColor: 'black', borderStyle: 'solid'}}>
            image
        </div>
        <div className="pdf-datos-personales" style={{borderWidth: '1px', borderColor: 'black', borderStyle: 'solid'}}>
            datos personales 
        </div>
    </div>
    <div className="pdf-boxes" style={{borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', marginTop: '20px'}}>
        boxes
    </div>
    </>)
}

export default PdfVersion;