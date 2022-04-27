import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";

const ValdbildPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto mx-[auto] py-[30px] xl:py-[34px] 2xl:py-[38px] 3xl:py-[46px] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <Stack className="h-[502px] xl:h-[575px] 2xl:h-[646px] 3xl:h-[775px] ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[67%]">
            <Image
              src="img_bild8.png"
              className="absolute h-[502px] xl:h-[575px] 2xl:h-[646px] 3xl:h-[775px] inset-[0] object-cover w-[100%]"
              alt="Bild8"
            />
            <Stack className="absolute h-[109px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] inset-[0] justify-center m-[auto] w-[31%]">
              <Text className="absolute bottom-[0] font-extrabold lg:leading-lh61 leading-lh6179 xl:leading-lh70 2xl:leading-lh79 3xl:leading-lh95 text-black_900_59 text-fs22 xl:text-fs25 2xl:text-fs28 3xl:text-fs33 text-left w-[100%]">{`Bothniabladets Bildbyrå`}</Text>
              <Image
                src="img_dlf2_2.png"
                className="absolute h-[59.45px] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] inset-x-[0] mx-[auto] object-contain top-[0] w-[25%]"
                alt="dlf2"
              />
            </Stack>
          </Stack>
          <Column className="items-center mb-[24px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[37px] ml-[17px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] mr-[29px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[44px] mt-[27px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[26%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Text className="font-medium lg:leading-lh24 leading-lh2479 xl:leading-lh28 2xl:leading-lh31 3xl:leading-lh38 mt-[1px] text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-gray_600 text-left w-[35%]">
                {
                  <>
                    {`Beskrivning`}
                    <br />
                    {``}
                    <br />
                    {``}
                    <br />
                    {`Nyckelord`}
                    <br />
                    {``}
                    <br />
                    {`Plats`}
                    <br />
                    {`Datum`}
                    <br />
                    {`Fotograf`}
                    <br />
                    {``}
                    <br />
                    {`Filstorlek`}
                    <br />
                    {`Format`}
                    <br />
                    {`Upplösning`}
                    <br />
                    {`Bildförhållande`}
                    <br />
                    {``}
                    <br />
                    {`Pris`}
                  </>
                }
              </Text>
              <Text className="font-medium lg:leading-lh24 leading-lh2479 xl:leading-lh28 2xl:leading-lh31 3xl:leading-lh38 mb-[1px] text-black_900 text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-left w-[64%]">
                {
                  <>
                    {`Skoteråkare i solnedgången`}
                    <br />
                    {`med flygplan i luften`}
                    <br />
                    {``}
                    <br />
                    {`skoter himmel solnedgång`}
                    <br />
                    {``}
                    <br />
                    {`Hemavan`}
                    <br />
                    {`19 april, 2022`}
                    <br />
                    {`Vera Jonsson`}
                    <br />
                    {``}
                    <br />
                    {`2,3 MB`}
                    <br />
                    {`JPEG`}
                    <br />
                    {`5472 × 3648`}
                    <br />
                    {`3:2`}
                    <br />
                    {``}
                    <br />
                    {`249 kr`}
                  </>
                }
              </Text>
            </Row>
            <Stack className="h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mt-[17px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mx-[auto] w-[65%]">
              <Stack className="absolute h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] inset-[0] w-[100%]">
                <div className="absolute bg-teal_A400 h-[57px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[88px] inset-[0] rounded-radius5 w-[100%]"></div>
                <Text className="absolute font-medium lg:leading-lh61 leading-lh6179 xl:leading-lh70 2xl:leading-lh79 3xl:leading-lh95 right-[15%] text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-left text-white_A700 w-[55%]">{`Lägg i varukorg`}</Text>
              </Stack>
              <Image
                src="img_basket_1.svg"
                className="absolute h-[24px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[38px] inset-y-[0] left-[13%] my-[auto] object-contain w-[24px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[37px]"
                alt="Basket"
              />
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ValdbildPage;
