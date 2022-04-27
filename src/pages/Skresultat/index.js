import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const SkresultatPage = () => {
  const navigate = useNavigate();

  const handleNavigate18 = () => navigate("/valdbild");

  return (
    <>
      <Column className="bg-gray-100 font-roboto mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] w-[100%]">
          <Column className="w-[100%]">
            <header className="w-[100%]">
              <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
                <Stack className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]">
                  <Stack className="absolute lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]">
                    <Image
                      src="img_rectangle9.svg"
                      className="absolute lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] object-cover top-[0] w-[100%]"
                      alt="Rectangle9"
                    />
                    <Row className="absolute items-center justify-center right-[2%] top-[0] w-[5%]">
                      <Image
                        src="img_usercicrle.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Usercicrle"
                      />
                      <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[58%]">{`Profil`}</Text>
                    </Row>
                    <Row className="absolute items-center justify-center right-[10%] top-[0] w-[7%]">
                      <Image
                        src="img_basket.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Basket"
                      />
                      <Text className="cursor-pointer hover:font-medium font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 w-[71%]">{`Varukorg`}</Text>
                    </Row>
                    <Row className="absolute items-center justify-center right-[27%] top-[0] w-[11%]">
                      <Image
                        src="img_uploadduotone.svg"
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
                        <Text className="absolute font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 left-[8%] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_600 text-left w-[22%]">{`Skoter`}</Text>
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
          </Column>
          <Text className="font-medium lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:mx-[129px] xl:mx-[147px] mx-[166px] 3xl:mx-[199px] text-black_900 lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left">{`Skoter`}</Text>
          <Column className="w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Column className="lg:mb-[23px] xl:mb-[26px] mb-[30px] 3xl:mb-[36px] lg:ml-[129px] xl:ml-[147px] ml-[166px] 3xl:ml-[199px] w-[24%]">
                <Row className="items-start justify-start w-[100%]">
                  <Image
                    src="img_imgboxduotone.svg"
                    className="lg:h-[19px] xl:h-[21px] h-[23.58px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[15px] xl:mb-[17px] mb-[19.42px] 2xl:mb-[19px] 3xl:mb-[23px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain w-[7%]"
                    alt="Imgboxduotone"
                  />
                  <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mr-[203px] xl:mr-[232px] mr-[261px] 3xl:mr-[313px] text-black_900 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[17%]">{`43 bilder`}</Text>
                </Row>
                <Stack className="lg:h-[207px] xl:h-[236px] h-[265px] 2xl:h-[266px] 3xl:h-[319px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[100%]">
                  <Column className="absolute inset-[0] w-[100%]">
                    <Image
                      src="img_bild1.png"
                      className="lg:h-[173px] xl:h-[198px] h-[222.3px] 2xl:h-[223px] 3xl:h-[267px] object-cover w-[100%]"
                      alt="Bild1"
                    />
                    <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Input
                        className="absolute bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium inset-y-[0] left-[0] my-[auto] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[19%]"
                        name="Skoter"
                        placeholder={`Skoter`}
                      ></Input>
                    </Stack>
                  </Column>
                  <Row className="absolute bottom-[3%] items-center justify-center left-[22%] w-[38%]">
                    <Input
                      className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[55%]"
                      name="Himmel"
                      placeholder={`Himmel`}
                    ></Input>
                    <Input
                      className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[37%]"
                      name="Fjäll"
                      placeholder={`Fjäll`}
                    ></Input>
                  </Row>
                </Stack>
                <Column className="lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[100%]">
                  <Image
                    src="img_bild6.png"
                    className="lg:h-[363px] xl:h-[416px] h-[466.67px] 2xl:h-[467px] 3xl:h-[561px] object-cover w-[100%]"
                    alt="Bild6"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[1px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Row className="absolute items-center justify-between left-[0] w-[39%]">
                        <Text className="bg-bluegray_300_26 font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[0] rounded-radius5 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Skoter`}</Text>
                        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[36%]">{`Snö`}</Text>
                      </Row>
                    </Stack>
                    <Row className="absolute gap-[11px] 3xl:gap-[13px] lg:gap-[8px] xl:gap-[9px] grid grid-cols-2 h-[max-content] inset-y-[0] items-center justify-center left-[22%] my-[auto] w-[31%]">
                      <div className="bg-bluegray_300_26 lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius5 w-[100%]"></div>
                      <Text className="bg-bluegray_300_26 font-medium xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[0] rounded-radius5 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]">{`Fjäll`}</Text>
                    </Row>
                  </Stack>
                </Column>
              </Column>
              <Column className="lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mt-[39px] xl:mt-[45px] mt-[51px] 3xl:mt-[61px] w-[24%]">
                <Column className="w-[100%]">
                  <Image
                    src="img_bild3.png"
                    className="lg:h-[341px] xl:h-[390px] h-[437.82px] 2xl:h-[439px] 3xl:h-[526px] object-cover w-[100%]"
                    alt="Bild3"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[1px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Button className="absolute bg-bluegray_300_26 border-bw font-medium h-[max-content] inset-y-[0] left-[0] my-[auto] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[19%]">{`Skoter`}</Button>
                    </Stack>
                    <Button className="absolute bg-bluegray_300_26 border-bw font-medium h-[max-content] inset-y-[0] left-[22%] my-[auto] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 w-[17%]">{`Vinter`}</Button>
                  </Stack>
                </Column>
                <Column className="lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]">
                  <Image
                    src="img_bild4.png"
                    className="lg:h-[204px] xl:h-[234px] h-[262.24px] 2xl:h-[263px] 3xl:h-[315px] object-cover w-[100%]"
                    alt="Bild4"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[1px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Row className="absolute items-center justify-between left-[0] w-[39%]">
                        <Input
                          className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[48%]"
                          name="Skoter"
                          placeholder={`Skoter`}
                        ></Input>
                        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[36%]">{`Snö`}</Text>
                      </Row>
                    </Stack>
                    <div className="absolute bg-bluegray_300_26 lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[22%] my-[auto] rounded-radius5 w-[14%]"></div>
                  </Stack>
                </Column>
              </Column>
              <Column className="lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mr-[133px] xl:mr-[153px] mr-[172px] 3xl:mr-[206px] lg:mt-[39px] xl:mt-[45px] mt-[51px] 3xl:mt-[61px] w-[24%]">
                <Column className="w-[100%]">
                  <Image
                    src="img_bild2.png"
                    className="lg:h-[182px] xl:h-[208px] h-[233.61px] 2xl:h-[234px] 3xl:h-[281px] object-cover w-[100%]"
                    alt="Bild2"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[1px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Row className="absolute items-center justify-between left-[0] w-[39%]">
                        <Text className="bg-bluegray_300_26 font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[0] rounded-radius5 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Skoter`}</Text>
                        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[36%]">{`Snö`}</Text>
                      </Row>
                    </Stack>
                    <Row className="absolute gap-[11px] 3xl:gap-[13px] lg:gap-[8px] xl:gap-[9px] grid grid-cols-2 h-[max-content] inset-y-[0] items-center justify-center left-[22%] my-[auto] w-[31%]">
                      <div className="bg-bluegray_300_26 lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius5 w-[100%]"></div>
                      <Text className="bg-bluegray_300_26 font-medium xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[0] rounded-radius5 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[100%]">{`Fjäll`}</Text>
                    </Row>
                  </Stack>
                </Column>
                <Column className="lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[100%]">
                  <Image
                    src="img_bild7.png"
                    className="common-pointer lg:h-[182px] xl:h-[208px] h-[233.33px] 2xl:h-[234px] 3xl:h-[281px] object-cover w-[100%]"
                    onClick={handleNavigate18}
                    alt="Bild7"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] mt-[1px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Input
                        className="absolute bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium inset-y-[0] left-[0] my-[auto] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[19%]"
                        name="Skoter"
                        placeholder={`Skoter`}
                      ></Input>
                    </Stack>
                    <Row className="absolute h-[max-content] inset-y-[0] items-center justify-center left-[22%] my-[auto] w-[38%]">
                      <Input
                        className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[55%]"
                        name="Himmel"
                        placeholder={`Himmel`}
                      ></Input>
                      <Input
                        className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[37%]"
                        name="Fjäll"
                        placeholder={`Fjäll`}
                      ></Input>
                    </Row>
                  </Stack>
                </Column>
                <Column className="lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]">
                  <Image
                    src="img_bild5.png"
                    className="lg:h-[137px] xl:h-[157px] h-[176px] 2xl:h-[177px] 3xl:h-[212px] object-cover w-[100%]"
                    alt="Bild5"
                  />
                  <Stack className="lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] w-[100%]">
                    <Stack className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]">
                      <div className="absolute lg:h-[34px] xl:h-[39px] h-[43px] 2xl:h-[44px] 3xl:h-[52px] inset-[0] w-[100%]"></div>
                      <Row className="absolute items-center justify-between left-[0] w-[39%]">
                        <Input
                          className="bg-bluegray_300_26 placeholder:bg-transparent border-0 font-medium lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[18px] xl:py-[21px] py-[23.895px] 2xl:py-[23px] 3xl:py-[28px] rounded-radius5 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[48%]"
                          name="Skoter"
                          placeholder={`Skoter`}
                        ></Input>
                        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[36%]">{`Snö`}</Text>
                      </Row>
                    </Stack>
                    <div className="absolute bg-bluegray_300_26 lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] inset-y-[0] left-[22%] my-[auto] rounded-radius5 w-[14%]"></div>
                  </Stack>
                </Column>
              </Column>
            </Row>
          </Column>
          <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 3xl:mt-[1077px] lg:mt-[697px] xl:mt-[797px] mt-[897px] lg:mx-[359px] xl:mx-[410px] mx-[462px] 3xl:mx-[554px] text-black_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[28%]">{`Knapp för “ladda fler foton”, för vi kanske inte har infinite scroll?`}</Text>
        </Column>
      </Column>
    </>
  );
};

export default SkresultatPage;
