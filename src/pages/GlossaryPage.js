import React from 'react'
import styled from 'styled-components'

export const GlossaryPage = () => {
  return (
  <>
    <Header>
      <NavigationContainer>
        <NavigationLink href='#A'>A</NavigationLink>
        <NavigationLink href='#B'>B</NavigationLink>
        <NavigationLink href='#C'>C</NavigationLink>
        <NavigationLink href='#D'>D</NavigationLink>
        <NavigationLink href='#E'>E</NavigationLink>
        <NavigationLink href='#F'>F</NavigationLink>
        <NavigationLink>G</NavigationLink>
        <NavigationLink>H</NavigationLink>
        <NavigationLink>I</NavigationLink>
        <NavigationLink>J</NavigationLink>
        <NavigationLink>K</NavigationLink>
        <NavigationLink>L</NavigationLink>
        <NavigationLink>M</NavigationLink>
        <NavigationLink>N</NavigationLink>
        <NavigationLink>O</NavigationLink>
        <NavigationLink>P</NavigationLink>
        <NavigationLink>Q</NavigationLink>
        <NavigationLink>R</NavigationLink>
        <NavigationLink>S</NavigationLink>
        <NavigationLink>T</NavigationLink>
        <NavigationLink>U</NavigationLink>
        <NavigationLink>V</NavigationLink>
        <NavigationLink>W</NavigationLink>
        <NavigationLink>X</NavigationLink>
        <NavigationLink>Y</NavigationLink>
        <NavigationLink>Z</NavigationLink>
        <NavigationLink>Å</NavigationLink>
        <NavigationLink>Ä</NavigationLink>
        <NavigationLink>Ö</NavigationLink>
      </NavigationContainer>
    </Header>

    <LetterSection>

      <SectionHeading id="A">A</SectionHeading>

      <WordCardContainer>
        <WordHeading>Alpaca (fiber)</WordHeading>
        <WordExplanation>
        Alpacaull är den naturliga fibern från alpacan och den har en liknande struktur som fibrer från fårull. Dess mjukhet beror på fiberns lilla diameter, i likhet med merino-ull. Det är en mjuk, hållbar, lyxig och silkeslen naturlig fiber. Alpacagarn tovas inte så lätt och blir inte så nopprig. Det kan vara lätt eller tungt beroende på hur det är spunnet.
        </WordExplanation>
      </WordCardContainer>

      <WordCardContainer>
        <WordHeading>Avig maska (am)</WordHeading>
        <WordExplanation>
        En teknik där maskan formas som en liten pärla.
      </WordExplanation>
      </WordCardContainer>

      <WordCardContainer>
        <WordHeading>Avigsida</WordHeading>
        <WordExplanation>
        Den sida av plagget som vänder inåt, alltså den sidan som är minst synlig.
        </WordExplanation>
      </WordCardContainer>

      <SectionHeading id="B">B</SectionHeading>

      <WordCardContainer>
        <WordHeading>Bakersta maskbåge</WordHeading>
        <WordExplanation>
        När man stickar eller virkar i den bakre maskbågen sticks nålen i den bågen på maskan som är längst bort från dig (avsett om det är den räta eller aviga sidan). Som stickteknik kallas det även att sticka vridet rät eller vridet avigt.
        </WordExplanation>
      </WordCardContainer>

      <WordCardContainer>
        <WordHeading>Bakstycke</WordHeading>
        <WordExplanation>
        Den del av plagget som täcker baksidan av kroppen. På en tröja är det den del som täcker ryggen.
        </WordExplanation>
      </WordCardContainer>

      <SectionHeading id="C">C</SectionHeading>

      <WordCardContainer>
        <WordHeading>Chainette (garn)</WordHeading>
        <WordExplanation>
        Chainette-garn har en väldigt unik konstruktion där tråden är konstruerad som en kedja med ihålig kärna. Plagg som stickas i dessa garn blir väldigt elastiska och får en känsla av plysch. Chainette-garn ger också fina definierade maskor vilket passar extra bra till t.ex. flätor.
        </WordExplanation>
      </WordCardContainer>

      <SectionHeading id="D">D</SectionHeading>

      <WordCardContainer>
        <WordHeading>Diagonalstickat</WordHeading>
        <WordExplanation>
        En stickteknik där man minskar på ena sidan och ökar på den andra sidan för att skapa en diagonal effekt.
        </WordExplanation>
      </WordCardContainer>

      <WordCardContainer>
        <WordHeading>Diagram</WordHeading>
        <WordExplanation>
        Ett diagram är en visuell presentation av mönstret du ska sticka/virka och hur det kommer att se ut. Det består av symboler eller ett rutnät med symboler och det upprepas vanligtvis.
        </WordExplanation>
      </WordCardContainer>

      <SectionHeading id="E">E</SectionHeading>

      <WordCardContainer>
        <WordHeading>Efterstygn</WordHeading>
        <WordExplanation>
        Efterstygn kan sys på det stickade eller virkade plagget när det är färdigt.
        </WordExplanation>
      </WordCardContainer>

      <SectionHeading id="F">F</SectionHeading>

      <WordCardContainer>
        <WordHeading>Förkortade varv</WordHeading>
        <WordExplanation>
        Förkortade varv formar plagget då man inte stickar över alla maskor på varvet varje gång. Plagget blir bredare på den sida där det stickas flest varv.
        </WordExplanation>
      </WordCardContainer>

      <WordCardContainer>
        <WordHeading>Främre maskbågen</WordHeading>
        <WordExplanation>
        När man stickar i den främre maskbågen är detta den bågen som är närmast dig, oavsett om du stickar från rät- eller avigsidan.
        </WordExplanation>
      </WordCardContainer>

    </LetterSection>
    </>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  position: sticky;
  top: 0;
  background: #cba892;

  @media (min-width: 768px) {
    padding: 20px 0;
  }
`

const NavigationContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-family: 'Fraunces', serif;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 54px;
  }
`

const NavigationLink = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`

const LetterSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #a4a99b;
  font-family: 'Fraunces';

  @media (min-width: 768px) {
    align-items: center;
  }
`

const SectionHeading = styled.h2`
  margin: 15px;
  font-size: 48px;

  @media (min-width: 768px) {
    margin: 25px;
    font-size: 58px;
  }
`

const WordCardContainer = styled.article`
  margin: 10px;
  padding: 10px 0;
  width: 90%;
  border: 2px dashed #c3c9b7;

  @media (min-width: 768px) {
    margin: 20px;
    width: 50%;
  }
`

const WordHeading = styled.h3`
  margin: 10px;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`

const WordExplanation = styled.p`
  margin: 10px;
  font-size: 18px;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`