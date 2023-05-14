import React, { useState } from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import StrokeButton from "../../Components/Button/StrokeButton";
import Header from "../../Components/Header/Header";

function Join() {
  return (
    <style.Wrap>
      {/* <header>
        <style.Head>
          <style.Back
            src={process.env.PUBLIC_URL + "Images/Join/back.svg"}
          ></style.Back>
          <style.Title>회원가입</style.Title>
        </style.Head>
      </header> */}
      <Header title={"회원가입"} />
      <style.ProfileImg>
        <img src={process.env.PUBLIC_URL + "Images/Join/profileImg.svg"}></img>
      </style.ProfileImg>
      <style.Set>설정</style.Set>
      {/* <style.Label>이름</style.Label>
      <style.NameInput>
        <input
          type="text"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="이름를 입력해주세요"
        />
      </style.NameInput> */}
      <Input
        titlemarginBottom={"10px"}
        title={"이름"}
        marginBottom={"30px"}
        name={"JoinNameInput"}
        placeholder={"이름을 입력해주세요"}
      />
      {/* <style.Label>전화번호</style.Label>
      <style.PhoneInput>
        <input
          type="text"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="전화번호를 입력해주세요"
        />
      </style.PhoneInput> */}
      <Input
        titlemarginBottom={"10px"}
        title={"전화번호"}
        marginBottom={"30px"}
        name={"JoinPhoneInput"}
        placeholder={"전화번호를 입력해주세요"}
      />
      <style.Label>주소</style.Label>
      <style.PlaceInput>
        <option value="" selected>
          주소 선택하기
        </option>
        <option value="강남구">강남구</option>
        <option value="강동구">강동구</option>
        <option value="강북구">강북구</option>
        <option value="강서구">강서구</option>
        <option value="관악구">관악구</option>
        <option value="광진구">광진구</option>
        <option value="구로구">구로구</option>
        <option value="금천구">금천구</option>
        <option value="노원구">노원구</option>
        <option value="도봉구">도봉구</option>
        <option value="동대문구">동대문구</option>
        <option value="동작구">동작구</option>
        <option value="마포구">마포구</option>
        <option value="서대문구">서대문구</option>
        <option value="서초구">서초구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="송파구">송파구</option>
        <option value="양천구">양천구</option>
        <option value="영등포구">영등포구</option>
        <option value="용산구">용산구</option>
        <option value="은평구">은평구</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="중랑구">중랑구</option>
      </style.PlaceInput>
      {/* <style.Label>아이디</style.Label>
      <style.IdInput>
        <input
          type="text"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="아이디를 입력해주세요"
        />
      </style.IdInput> */}
      <Input
        titlemarginBottom={"10px"}
        title={"아이디"}
        marginBottom={"30px"}
        name={"JoinIdInput"}
        placeholder={"아이디를 입력해주세요"}
      />
      {/* <style.Label>비밀번호</style.Label>
      <style.PasswordInput>
        <input
          type="password"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="비밀번호를 입력해주세요"
        />
      </style.PasswordInput> */}
      <Input
        titlemarginBottom={"10px"}
        title={"비밀번호"}
        marginBottom={"30px"}
        name={"JoinPasswordInput"}
        type={"password"}
        placeholder={"비밀번호를 입력해주세요"}
      />
      {/* <style.Label>비밀번호 확인</style.Label>
      <style.PasswordCheck>
        <input
          type="password"
          style={{ border: 0, outline: 0, width: "413px" }}
          placeholder="비밀번호를 한 번 더 입력해주세요"
        />
      </style.PasswordCheck> */}
      <Input
        titlemarginBottom={"10px"}
        title={"비밀번호 확인"}
        marginBottom={"30px"}
        name={"JoinPasswordCheckInput"}
        placeholder={"비밀번호를 한 번 더 입력해주세요"}
      />
      {/* <style.ButtonBlock type="submit">가입하기</style.ButtonBlock> */}
      <FullButton btnName={"가입하기"} />
      {/* <style.BackButtonBlock type="button">뒤로가기</style.BackButtonBlock> */}
      <StrokeButton btnName={"뒤로가기"} />
    </style.Wrap>
  );
}

export default Join;
