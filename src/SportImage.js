import React from 'react';
import kendoImg from '../images/hockey.png';
import palloImg from '../images/football.png';
import sabaImg from '../images/saba.png';
import absImg from '../images/abs.png';

let altText, sportImg;

export default function SportImage({sport}) {
  switch (sport) {
    case "kendo":
      sportImg = kendoImg.toString();
      altText = "Jääkiekko";
      break;
    case "pallo":
      sportImg = palloImg.toString();
      altText = "Jalkapallo";
      break;
    case "saba":
      sportImg = sabaImg.toString();
      altText = "Salibandy";
      break;
    default:
      sportImg = absImg.toString();
      altText = "Muu laji";
      break;
  }
  return (
      <img src={sportImg} className="img-responsive" alt={altText} />
  );
}