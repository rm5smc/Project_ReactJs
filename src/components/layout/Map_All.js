import React, { Component } from 'react';

class Map_All extends Component {
  render() {
    return (
      <div className="container-mail">
        <h2 className="ctn__contact">LIÊN HỆ</h2>
        <div className="contact__content"><iframe className="contact__content--left" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.408985548731!2d105.78177231440716!3d21.016315393580065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam+Landmark+Tower+72!5e0!3m2!1sen!2s!4v1550894518836" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
          <div className="contact__content--right">
            <form className="form">
              <div className="form__all">
                <h3 className="form__title">Gửi email cho tôi</h3>
                <div className="form-tit"><label>Tên<span>*</span></label><input /></div>
                <div className="form-tit"><label>Emai;<span>*</span></label><input /></div>
                <div className="form-tit"><label>Tin nhắn;<span>*</span></label><textarea defaultValue={""} /></div>
                <div className="form-tit__btn"><button>Gửi</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Map_All;