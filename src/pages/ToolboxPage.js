import React from 'react'
import styled from 'styled-components'

import { RowCounter } from '../components/RowCounter'
// import { RulerTool } from '../components/RulerTool'

export const ToolboxPage = () => {
  return(
    <>
    <ContainerWrapper className="first-part-wrapper">
    <ToolboxContainer>
      <Heading>"It's better to have knit and ripped than to never have knit at all"</Heading>
      <Ingress>We've all been there, sitting in the handicraft in school. But now it's on your choice. We like to keep it simple for you to get started.</Ingress>
      <Ingress>And you you know what? All knitters are in use of a row counter – so in a while you'll say "just another row". Like all the others ...</Ingress>
    </ToolboxContainer> 
    <ToolboxContainer>
      <RowCounter />
    </ToolboxContainer> 
    </ContainerWrapper>

    <ContainerWrapper>
      <ToolboxContainer>
        <CoverPhoto src="https://images.unsplash.com/photo-1605433235628-489951ba1978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1638&q=80" alt="knitting-model"></CoverPhoto>
      </ToolboxContainer>

      <ToolboxContainer>
        <ToolboxHeading>Step 1 / Choose what to knit</ToolboxHeading>
        <ToolboxTips>Get inspirered by allt the shared patterns we have from all the knitters in the circle. All the patterns is for free, so the only thing you need to buy is just the yarn and needles. 
          But how do you know which yarn and needles to choose? You just read it on the pattern. It's as simple as that. Every pattern has recommended yarns and needles. But if you still feel a bit insecure you can always ask in the shop, if you don't buy it online.</ToolboxTips>
      </ToolboxContainer>
    </ContainerWrapper>

    <ContainerWrapper className="middle-part-wrapper">
      <ToolboxContainer>
      <ToolboxHeading>Step 2 / Learn knit & purl stitch</ToolboxHeading>
      <ToolboxTips>If you know how to do a knit stich and purl stitch you have come a far way. You combine those stitches in a lot of patterns. The amazing thing with internet is that (except that you have landed here) you can find tutorials on everything.
      </ToolboxTips>
        
      </ToolboxContainer>

      <ToolboxContainer>
      <Quote>"I said to myself I need to do something besides knit today. Then I laughed and laughed."</Quote>
      </ToolboxContainer>
    </ContainerWrapper>

    <ContainerWrapper className="first-part-wrapper">
      <ToolboxContainer>
        <CoverPhoto src="https://images.unsplash.com/photo-1591004947588-a9ea6a85cefe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
        ></CoverPhoto>
      </ToolboxContainer>

      <ToolboxContainer>
        <ToolboxHeading>Step 3 / Share your knits</ToolboxHeading>
        <ToolboxTips>You can find a lot of inspiration when you scan through different hashtags. We have collected a bunch of them so you can feel the desire to have the needles in your hand as soon as possible. And buy know you have everything you need to start.<ul><List>#knittingcircle</List></ul></ToolboxTips>
      </ToolboxContainer>
    </ContainerWrapper>
      
    </>
  )
}

const Heading = styled.h1`
  font-size: 30px;
  width: 90%;
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const Ingress = styled.p`
  width: 90%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 90%;
  }
`

const ContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    &.middle-part-wrapper {
      margin: 80px 0;
    }

    &.first-part-wrapper {
      margin: 80px 0;
      padding: 20px;
      border-bottom: dashed 2px #c3c9b7;
    }
  }
`

const ToolboxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 15px;
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
  margin: 15px 20px;

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
  margin-top: 15px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-left: 20px;
  }
`

const List = styled.li`
  list-decoration: none;
  font-size: 40px;
  font-weight: 600;
  font-family: 'Fraunces', serif;
`