import React from "react";
import * as F from "./FooterStyle";

function Footer() {
  return (
    <F.FooterWarp>
      <F.CopyRight>
        ⓒCopyRight 강지향이 만들었지만, 이미지의 출처는 니켈로디언에 동의없이
        인터넷에서 무단도용했습니다.
        <br />
        너그러운 마음으로 신고는 멈춰주세요!
        <br />
        또한, 이 페이지는 철저히 개인페이지이므로 상업적 용도와 무관합니다
      </F.CopyRight>
    </F.FooterWarp>
  );
}

export default Footer;
