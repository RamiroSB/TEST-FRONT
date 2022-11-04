import React from 'react'
import "./DriversStyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Container } from 'react-bootstrap'


const eventoArgus = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Argus</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/04_SST.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/03_Wifi&BT.zip">Wifi and Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/06_Cardreader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/05_Codec.zip">Codec</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/02_Graphics.zip">Video</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/01_BKC.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoAlkon = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Alkon</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/06_BT.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/03_cardreader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/01_Codec.zip">Codec</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/04_RJ45.zip">Lan</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/02_Graphics.zip">Video</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/05_WIFI.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/00_Intel_BKC.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoEpsilon1 = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Epsilon</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/01_Audio.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/02_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/03_Card-reader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/04_Chipset.zip">Chipset</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/05_Dynamic-Platform-Thermal-Framework-Manager.zip">Dynamic Platform Thermal Framework Manager</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/06_Graphics.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/07_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/08_Serial-IO-drivers.zip">Serial IO</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/09_Wifi.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/00_Drivers_Epsilon.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoEpsilon2 = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Epsilon</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/12-audio_ES8336.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/09-ADSP-9.22.00.4828-GLK-ProdFw-Cert-20H2.zip">Intel Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/02_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/10-RtsUer_10.0.16299.31241_20180323_WHQL.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/01-chipset-10.1.18015.8142-public-mup.zip">Chipset</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/02-intel(r)%20txe%204.0.20.1311v2_ipu_2019.2_b0.zip">Trusted Execution Engine</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/05-intel(r)%20dynamic%20tuning%20technology_8_6_10401_9906_whql.zip">Dynamic Platform Thermal Framework Manager</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/03-win64-6911.zip">Video</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/06-hideventfilterdriver-2.2.1.377_19h1.zip">HID Event Filter</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/04-serialio_30.100.1915.2_pv_glk_19h1.zip">Serial IO</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/13-AR6465.zip">USB Storage</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/11-WIFI-BT_AC8723DU.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/GML_drivers_Audio%208336_8723du.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoKairos = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Kairos</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/Realtek_Audio_HD.rar">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/04_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/03_cardreader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/02_Codec.zip">Codec</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/01_Graphics.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/04_Bluetooth.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/00_Intel_BKC.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoCloud = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Cloud</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/06_BT.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/04_CardReader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/02_Codec.zip">Codec</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/03_GFX.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/05_WIFI.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/01-BKC.zip">BKC</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/00_Drivers_Cloud.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoOmega = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Omega</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoOmicron = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Omicron</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

const eventoSigma = () => {
  Swal.fire({
    title: '<strong>Descargá tus drivers Sigma</strong>',
    icon: 'info',
    html:
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
      '<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
}

export const Drivers = () => {
  return (
    <Container>
      <h3 className='tituloDrivers mt-3 mb-3'>Drivers</h3> <hr />
      <p>Buscá tu modelo de Notebook y descargá los drivers que necesites.  </p><hr />
      <ul className='listaDrivers'>
        <li><button onClick={eventoArgus} style={{ width: '100%' }} className="buttonDrivers" >Argus</button></li>
        <li><button onClick={eventoAlkon} variant="secondary" style={{ width: '100%' }} className="buttonDrivers">Alkon</button></li>
        <li><button onClick={eventoEpsilon1} style={{ width: '100%' }} className="buttonDrivers">Epsilon Intel Celeron</button></li>
        <li><button onClick={eventoEpsilon2} variant="secondary" style={{ width: '100%' }} className="buttonDrivers">Epsilon Intel Celeron Series 000012018</button></li>
        <li><button onClick={eventoKairos} style={{ width: '100%' }} className="buttonDrivers">Kairos</button></li>
        <li><button onClick={eventoCloud} style={{ width: '100%' }} className="buttonDrivers">Cloud</button></li>
        <li><button onClick={eventoOmega} variant="secondary" style={{ width: '100%' }} className="buttonDrivers">Omega</button></li>
        <li><button onClick={eventoOmicron} style={{ width: '100%' }} className="buttonDrivers">Omicron Intel I3</button></li>
        <li><button onClick={eventoSigma} variant="secondary" style={{ width: '100%' }} className="buttonDrivers">Sigma Intel I5</button></li>
      </ul>
    </Container>
  )
}
