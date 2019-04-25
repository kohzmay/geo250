import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ "height": "100vh" }}>
        <video autoPlay muted loop id="myVideo">
          <source src="https://lh3.googleusercontent.com/8xgju5fqop_A4DWp10d1BujjZEkzzU1AWc9TBy_sYl07XPqwIKBirBaKBpiwNtx3cRuXh9k7VFBA0onPJ99h0FdECzXyQPNaDxY5DT7buD2bjTUdVJeNJwqPUNR-tjuC7Hv2gMRPcA=w2400" type="video/mp4" />
        </video>

        <div className="overlay">

          <div className="content">
            <h1 style={{ "letterSpacing": "3px" }}>The Derecho</h1>
            <h1>Storm of 2012</h1>
            <div className="botBorder"></div>
            <p id="introP">Revisit the Ohio Valley/Mid-Atlantic Derecho of 2012, the terrible storm that devastated
            the Midwest and the mid-Atlantic.</p>
          </div>

          <img onClick={() => {this.props.scrollTo()}} src="https://lh3.googleusercontent.com/pb_vtOm6JGXqDSOFMEAQ_6dYFGnPqp8YMmx1AQjDf4RdO06k8zjdTdH9BwPAaodSQEzhLAsHi_u6BnCtMQoM-2qc5dyIf07dZNuXsphPE8FtVmCs_IdBE2Vpp0Nf3z9nKdIvxerusRUeHPWqksmjQSMFyR1W-VzFNkl70A3B3WHP9DRlBbBRGIG9PXbVIX-09CTe3t9HTkUdh4fnCR2AOUHe-T-tnMj5qVz0hLSkejwy1rRAhLG6xUpwB-COqdla7mWS7zn743rAjI53pU-z83qaHSngk7bMhy2qkwTnbxubN5H1dNDlNrFviN3cXkBhN-WuVMxoqbaeIsbsOOwIbAwPpl0h91Q6zGn1wFjNvgq1RnVxGgk1REdSpej7yy4ZAvGOoG3-nVB0vyyCW19GnsJT4Li9LT8lHAMXADwCN3I1tf3lwtiH9-R9RPgmTPIzPPVeNjr8db0R69Sm3diUN9lRSEpn1K-JZT2cT9Bv_nj5JiNutxxFWbQmomO_B6VePcmNAExtefHEa5XNxe8BXu2x4j1xNdhc3yLFMmOEiQRZYKsHHcXB_6qwMrLIFbB0VjxSsqj__xQNQC5PEu08aUDPGtdxRzyIxGU6gV18-jc0espuDDsXqzqlZ1ezQGJXLl8-Cen5dRCUwwcsPoiy7EBbzpqtrgk=s512-no" width="50px" height="50px" id="arrow" />
        </div>
      </div>
    );
  }

}

export default Intro;
