import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Line } from "components/Line";

const SkapakontoPage = () => {
  const navigate = useNavigate();

  const handleNavigate17 = () => navigate("/inloggningssida");
  const handleNavigate11 = () => navigate("/inloggadkund");

  return (
    <>
      <Column className="bg-white_A700 font-roboto mx-[auto] w-[100%]">
        <Stack className="h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[100%]">
          <Image
            src="img_michaelbenzi.png"
            className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] inset-[0] object-cover w-[100%]"
            alt="michaelbenzI"
          />
          <Column className="absolute top-[0] w-[100%]">
            <Column className="items-center w-[100%]">
              <header className="w-[100%]">
                <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
                  <Stack className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]">
                    <Stack className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]">
                      <Image
                        src="img_rectangle9.svg"
                        className="absolute lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] object-cover top-[0] w-[100%]"
                        alt="Rectangle9"
                      />
                      <Text className="absolute cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 right-[2%] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 top-[0] w-[7%]">{`Skapa konto`}</Text>
                      <Text className="absolute cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 right-[9%] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 top-[0] w-[1%]">{`/`}</Text>
                      <Row
                        className="common-pointer absolute items-center justify-center right-[10%] top-[0] w-[7%]"
                        onClick={handleNavigate17}
                      >
                        <Image
                          src="img_signinsqure.svg"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="Signinsqure"
                        />
                        <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[69%]">{`Logga in`}</Text>
                      </Row>
                      <Row className="absolute items-center justify-center right-[27%] top-[0] w-[11%]">
                        <Image
                          src="img_uploadduotone_3.svg"
                          className="lg:h-[20px] xl:h-[23px] h-[25.4px] 2xl:h-[26px] 3xl:h-[31px] mb-[18.29px] mt-[18.31px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] object-contain w-[16%]"
                          alt="Uploadduotone"
                        />
                        <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[78%]">{`Ladda upp bild`}</Text>
                      </Row>
                      <Row className="absolute items-center justify-center right-[39%] w-[7%]">
                        <Image
                          src="img_messagelight.svg"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="Messagelight"
                        />
                        <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:ml-[2px] lg:ml-[2px] ml-[3px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[63%]">{`Kontakt`}</Text>
                      </Row>
                      <Row className="absolute inset-x-[47%] inset-y-[0] items-center justify-center w-[6%]">
                        <Image
                          src="img_arhivesaltlig.svg"
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[22px] xl:mb-[25px] mb-[29px] 3xl:mb-[34px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="Arhivesaltlig"
                        />
                        <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[50%]">{`Arkiv`}</Text>
                      </Row>
                    </Stack>
                    <Stack className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] left-[9%] top-[17%] w-[73%]">
                      <Row className="absolute inset-[0] items-center justify-between w-[100%]">
                        <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] w-[48%]">
                          <div className="absolute bg-bluegray_300_26 lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] inset-[0] rounded-radius15 w-[100%]"></div>
                          <Text className="absolute font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 left-[1%] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 top-[0] w-[55%]">{`Sök efter bild, händelse eller tema`}</Text>
                        </Stack>
                        <Line className="bg-gray_600 lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] xl:my-[1px] lg:my-[1px] my-[2px] opacity-op8 rotate-[90deg] w-[2px]" />
                      </Row>
                      <Image
                        src="img_searchduotone.svg"
                        className="absolute lg:h-[19px] xl:h-[21px] h-[23.58px] 2xl:h-[24px] 3xl:h-[29px] inset-y-[0] left-[1%] my-[auto] object-contain w-[2%]"
                        alt="Searchduotone"
                      />
                    </Stack>
                  </Stack>
                  <Image
                    src="img_dlf2.png"
                    className="absolute lg:h-[34px] xl:h-[39px] h-[43.6px] 2xl:h-[44px] 3xl:h-[53px] left-[2%] object-contain top-[13%] w-[3%]"
                    alt="dlf2"
                  />
                </Stack>
              </header>
              <Image
                src="img_dlf2_1.png"
                className="lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] lg:mt-[45px] xl:mt-[51px] mt-[58px] 3xl:mt-[69px] mx-[auto] object-contain w-[4%]"
                alt="dlf2"
              />
              <Stack className="lg:h-[60px] xl:h-[69px] h-[76.81px] 2xl:h-[77px] 3xl:h-[93px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] mx-[auto] w-[15%]">
                <Text className="absolute bottom-[0] font-medium left-[0] text-black_900 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16">{`Har du redan ett konto?`}</Text>
                <Text className="absolute font-medium right-[0] text-black_900 text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 top-[0]">{`Skapa konto`}</Text>
              </Stack>
            </Column>
            <Column className="items-end w-[100%]">
              <Text className="font-medium lg:mx-[469px] xl:mx-[536px] mx-[603px] 3xl:mx-[724px] text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 underline">{`Logga in`}</Text>
            </Column>
            <Column className="w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Stack className="lg:h-[165px] xl:h-[189px] h-[212px] 2xl:h-[213px] 3xl:h-[255px] mx-[auto] w-[31%]">
                  <div className="absolute bg-white_A700 bottom-[0] lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] rounded-radius15 w-[100%]"></div>
                  <Text className="absolute bottom-[8%] font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 left-[2%] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[42%]">
                    <span className="text-black_900 text-fs16 font-roboto text-center font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{`Lösenord `}</>
                    </span>
                    <span className="text-gray_600 text-fs16 font-roboto text-center font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{`(minst 8 tecken)`}</>
                    </span>
                  </Text>
                  <div className="absolute bg-white_A700 bottom-[31%] lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] rounded-radius15 w-[100%]"></div>
                  <Text className="absolute font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 left-[2%] text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 top-[32%] w-[9%]">{`Email`}</Text>
                  <div className="absolute bg-white_A700 lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] left-[0] rounded-radius15 top-[22%] w-[48%]"></div>
                  <Row className="absolute items-center justify-between left-[2%] top-[0] w-[69%]">
                    <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[21%]">{`Förnamn`}</Text>
                    <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[25%]">{`Efternamn`}</Text>
                  </Row>
                  <div className="absolute bg-white_A700 lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] right-[0] rounded-radius15 top-[22%] w-[48%]"></div>
                </Stack>
                <Text
                  className="common-pointer bg-black_900 font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] py-[0] rounded-radius15 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 w-[31%]"
                  onClick={handleNavigate11}
                >{`Skapa konto`}</Text>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default SkapakontoPage;
