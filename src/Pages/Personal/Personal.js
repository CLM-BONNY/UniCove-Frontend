import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Personal() {
  const title = "개인정보 취급방침";
  return (
    <>
      <Header title={title} />
      <style.Wrap>
        <h3>
          당사는 고객들의 개인정보를 존중하며, 개인정보 보호에 대한 책임감을
          가지고 있습니다. 이 개인정보 처리방침은 당사가 어떤 종류의 개인정보를
          수집하고, 해당 정보를 어떻게 사용하고 보호하는지에 대한 정보를
          제공합니다.
        </h3>
        <h4>1. 개인정보의 수집과 이용</h4>
        <p>
          당사는 다양한 서비스를 제공하기 위해 필요한 최소한의 개인정보를
          수집합니다. 개인정보는 다음과 같은 목적으로 사용될 수 있습니다
          <br />
          <br />
          - 서비스 제공과 관련된 계약의 이행
          <br />
          - 고객 지원 및 문의 응답
          <br />
          - 서비스 개선을 위한 통계 및 분석
          <br />
          - 마케팅 및 프로모션 활동에 활용
          <br />
        </p>
        <h4>2. 개인정보의 보유 기간</h4>
        <p>
          당사는 개인정보를 고객이 서비스를 이용하는 동안에만 보유하며, 이후에는
          즉시 파기합니다. 다만, 관련 법령에 따라 일정 기간 동안 개인정보를
          보관할 필요가 있는 경우에는 해당 법령에 따라 보관합니다.
        </p>
        <h4>3. 개인정보의 제공 및 공유</h4>
        <p>
          당사는 고객의 개인정보를 제3자와 공유하지 않습니다. 다만, 아래의
          경우에는 예외로 합니다
          <br />
          <br />
          - 고객의 동의를 받은 경우
          <br />
          - 관련 법령에 따라 필요한 경우
          <br />
          - 서비스 제공을 위해 업무 처리를 외부 업체에 위탁하는 경우
          <br />
        </p>
        <h4>4. 개인정보의 보호와 안전성</h4>
        <p>
          당사는 고객의 개인정보를 적절한 보호조치를 통해 안전하게 관리합니다.
          보안 위협으로부터 개인정보를 보호하기 위해 기술적, 물리적, 관리적인
          조치를 취합니다. 개인정보에 대한 접근은 필요한 담당자에 한정되며, 권한
          없는 접근을 방지하기 위해 보안 시스템을 운영합니다.
        </p>
        <h4>5. 개인정보 주체의 권리</h4>
        <p>
          고객은 자신의 개인정보에 대한 액세스, 수정, 삭제를 요청할 수 있습니다.
          또한, 개인정보의 수집, 이용, 제공에 대한 동의 철회도 가능합니다.
          개인정보 주체의 권리를 행사하기 위해서는 당사에 문의하시기 바랍니다.
        </p>
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Personal;
