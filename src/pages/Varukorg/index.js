import React from "react";

import { Row } from "components/Row";
import { Text } from "components/Text";

const VarukorgPage = () => {
  return (
    <>
      <Row className="bg-white_A700 font-roboto items-start mx-[auto] w-[100%]">
        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:mb-[416px] xl:mb-[475px] mb-[535px] 3xl:mb-[642px] lg:ml-[374px] xl:ml-[428px] ml-[482px] 3xl:ml-[578px] lg:mt-[332px] xl:mt-[379px] mt-[427px] 3xl:mt-[512px] text-black_900 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[12%]">{`Test av prototyp, varukorg`}</Text>
        <Text className="font-medium lg:leading-lh48 xl:leading-lh54 2xl:leading-lh61 leading-lh6179 3xl:leading-lh74 lg:mb-[416px] xl:mb-[475px] mb-[535px] 3xl:mb-[642px] lg:ml-[182px] xl:ml-[208px] ml-[234px] 3xl:ml-[280px] lg:mr-[335px] xl:mr-[383px] mr-[431px] 3xl:mr-[517px] lg:mt-[332px] xl:mt-[379px] mt-[427px] 3xl:mt-[512px] text-black_900 lg:text-fs11 xl:text-fs13 text-fs15 3xl:text-fs18 text-left w-[8%]">{`Kika på fler bilder`}</Text>
      </Row>
    </>
  );
};

export default VarukorgPage;
