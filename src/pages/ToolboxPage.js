import React from 'react'
import styled from 'styled-components'

import { RowCounter } from '../components/RowCounter'
// import { RulerTool } from '../components/RulerTool'

export const ToolboxPage = () => {
  return(
    <>
    <IntroWrapper>
      <Heading>"It's better to have knit and ripped than to never have knit at all"</Heading>
      <Ingress>We have all been there, sitting in the handicraft in school. But now it's your choice. We like to keep it simple for you to get started. And you you know what? This is the new start of a new knitting era. Don't you wanna be a part of it?</Ingress>
    </IntroWrapper>

    <ContainerWrapper>
      <ToolboxContainer>
        <CoverPhoto src="https://images.unsplash.com/photo-1591004947588-a9ea6a85cefe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" alt="knitting-model"></CoverPhoto>
      </ToolboxContainer>

      <ToolboxContainer>
        <ToolboxHeading>Step 1 / Choose what to knit</ToolboxHeading>
        <ToolboxTips>Get inspirered by allt the shared patterns we have from all the knitters in the circle. All the patterns is for free, so the only thing you need to buy is just the yarn and needles. 
          But how do you know which yarn and needles to choose? You just read it on the pattern. It's as simple as that. Every pattern has recommended yarns and needles. But if you still feel a bit insecure you can always ask in the shop, if you don't buy it online.</ToolboxTips>
      </ToolboxContainer>
    </ContainerWrapper>

    <ContainerWrapper>
      <ToolboxContainer>
      <ToolboxHeading>Step 2 / Learn knit & purl stitch</ToolboxHeading>
      <ToolboxTips>If you know how to do a knit stich and purl stitch you have come a far way. You combine those stitches in a lot of patterns. The amazing thing with internet is that (except that you have landed here) you can find tutorials on everything. Here is a list of useful resources:</ToolboxTips>
        
      </ToolboxContainer>

      <ToolboxContainer>
      <Quote>"I said to myself I need to do something besides knit today. Then I laughed and laughed."</Quote>
      </ToolboxContainer>
    </ContainerWrapper>

    <ContainerWrapper className="ending-wrapper">
      <ToolboxContainer>
        <CoverPhoto src="https://images.unsplash.com/photo-1605433235628-489951ba1978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1638&q=80" alt="knitting-model"></CoverPhoto>
      </ToolboxContainer>

      <ToolboxContainer>
        <ToolboxHeading>Step 3 / Share your knits</ToolboxHeading>
        <ToolboxTips>You can find a lot of inspiration when you scan through different hashtags. We have collected a bunch of them so you can feel the desire to have the needles in your hand as soon as possible. And buy know you have everything you need to start.</ToolboxTips>
      </ToolboxContainer>
    </ContainerWrapper>

    <IntroWrapper className="ending-wrapper">
      <Heading>"Just another row before I go ..."</Heading>
      <Ingress>Use the row counter so you don't miss a row.</Ingress>
      <RowCounter />
    </IntroWrapper>
      
    </>
  )
}

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-family: 'Fraunces';
  border-bottom: dashed 2px #c3c9b7;
  width: 100%;
  padding-bottom: 40px;

  &.ending-wrapper {
    border-top: dashed 2px #c3c9b7;
    border-bottom: none;
  }
`

const Heading = styled.h1`
  font-size: 30px;
  width: 90%;

  @media (min-width: 768px) {
    font-size: 40px;
    width: 40%;
  }
`

const Ingress = styled.p`
  width: 90%;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 40%;
  }
`

const ContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ToolboxContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const CoverPhoto = styled.img`
  width: 85%;
  margin: 10px;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const ToolboxHeading = styled.h1`
  margin: 40px;

  @media (min-width: 768px) {
    font-size: 40px;
    width: 90%;
    margin: 30px;
  }
`

const ToolboxTips = styled.p`
  margin: 20px;
  font-size: 20px;
  font-family: 'Fraunces', serif;

  @media (min-width: 768px) {
    width: 90%;
    margin: 30px;
  }
`

const Quote = styled.h1`
  font-size: 30px;
  width: 90%;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-left: 20px;
  }
`