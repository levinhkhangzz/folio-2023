import React from 'react';

// Components
import Section from 'components/Section';
import Container, { Row } from 'components/Container';
import ContentBlock from 'components/ContentBlock';
import ImageTrigger from 'components/ImageTrigger';
import Square from 'components/Square';
import Heading from 'components/Heading';
import { List, ListItem } from 'components/List';

// Hooks
import { Trans, useTranslation } from 'react-i18next';

import style from './index.module.css';

function About() {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });
  const intro: string[] = t('intro', { returnObjects: true });
  const clanTitle: string = t('clan_title');
  const clan: string[] = t('clan', { returnObjects: true });
  const methodTitle: string = t('method_title');
  const method: string[] = t('method', { returnObjects: true });

  const increaseEndValue = (startValue: number, count: number): string[] => {
    return Array.from({ length: count }, (_, index) => `x${startValue + index}`);
  };

  const awwwardsEndValues: string[] = increaseEndValue(6, 1029);
  const cssDesignAwardsEndValues: string[] = increaseEndValue(6, 581);
  const fwaEndValues: string[] = increaseEndValue(1, 751);
  const ifDesignAwardEndValues: string[] = increaseEndValue(3, 980);
  const otherEndValues: string[] = increaseEndValue(8, 2091);

  return (
    <Section name="about" className={style.root}>
      <Container grid>
        <Row start={3} end={1}>
          <div className={style.section}>
            <ContentBlock key={intro[0]}>
              <div>
                <Trans
                  i18nKey={`about.intro.0`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />,
                  }}
                />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={2}>
          <Heading key={intro[1]}>
            <Trans
              i18nKey="about.intro.1"
              components={{
                Square: <Square />,
                pre: <pre />,
              }}
            />
          </Heading>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={intro[2]}>
            {intro.slice(2).map((txt, i) => (
              <div key={i}>
                <Trans
                  i18nKey={`about.intro.${i + 2}`}
                  components={{
                    ImageVenice: <ImageTrigger name="venice" />,
                    ImageSketchin: <ImageTrigger name="sketchin" />,
                    ImageTCMGTK: <ImageTrigger name="tcmgtk" sizes={[2, 3]} />,
                  }}
                />
              </div>
            ))}
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={2} end={2}>
          <div className={style.section}>
            <Heading alignRight key={clanTitle[0]}>
              <>
                {clanTitle[0]}
                <br /> {clanTitle[1]}
              </>
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={2}>
          <div className={style.columns}>
            <ContentBlock key={clan[0]}>
              {clan.slice(0, 2).map((txt, i) => (
                <div key={i}>
                  <Trans
                    i18nKey={`about.clan.${i}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO1: <ImageTrigger name="no1" />,
                      ImageNO2: <ImageTrigger name="no2" />,
                      ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />,
                    }}
                  />
                </div>
              ))}
            </ContentBlock>
            <ContentBlock key={clan[2]}>
              {clan.slice(2).map((txt, i) => (
                <div key={i}>
                  <Trans
                    i18nKey={`about.clan.${i + 2}`}
                    components={{
                      ImageBW: <ImageTrigger name="bw" sizes={[2.5, 2.5]} />,
                      ImageNO1: <ImageTrigger name="no1" />,
                      ImageNO2: <ImageTrigger name="no2" />,
                      ImageNO3: <ImageTrigger name="no3" sizes={[2, 2.5]} />,
                    }}
                  />
                </div>
              ))}
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={methodTitle}>
              <Trans i18nKey="about.method_title" components={{ pre: <pre /> }} />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={2} end={1}>
          <ContentBlock key={method[0]}>
            <div>
              <Trans i18nKey={`about.method.0`} />
            </div>
          </ContentBlock>
        </Row>
      </Container>
      <Container grid outerRightOnMobile>
        <Row start={1} end={3}>
          <div className={style.section}>
            <Heading key={method[1]}>
              <Trans i18nKey="about.method.1" />
            </Heading>
            <Heading alignRight key={method[2]}>
              <Trans i18nKey="about.method.2" />
            </Heading>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={1}>
          <div className={style.section}>
            <ContentBlock key={method[3]}>
              <div>
                <Trans i18nKey={`about.method.3`} />
              </div>
            </ContentBlock>
          </div>
        </Row>
      </Container>
      <Container grid>
        <Row start={1} end={3}>
          <ContentBlock>
            <List>
              {awwwardsEndValues.map((endValue, index) => (
                <ListItem key={index} end={endValue}>
                  Awwwards
                </ListItem>
              ))}
              {cssDesignAwardsEndValues.map((endValue, index) => (
                <ListItem key={index} end={endValue}>
                  CSS Design Awards
                </ListItem>
              ))}
              {fwaEndValues.map((endValue, index) => (
                <ListItem key={index} end={endValue}>
                  FWA
                </ListItem>
              ))}
              {ifDesignAwardEndValues.map((endValue, index) => (
                <ListItem key={index} end={endValue}>
                  iF Design Award
                </ListItem>
              ))}
              {otherEndValues.map((endValue, index) => (
                <ListItem key={index} end={endValue}>
                  Other
                </ListItem>
              ))}
            </List>
          </ContentBlock>
        </Row>
      </Container>
    </Section>
  );
}

export default About;
