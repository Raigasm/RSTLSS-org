// pages/index.js

import Layout from "../components/Layout";
import {
  Icon,
  Hero,
  Container,
  Title,
  Section,
  Card,
  Box,
  Column,
  Image,
  Block
} from "rbx";

import { map } from "rambda";
import {
  faFistRaised,
  faPencilRuler,
  faChartLine,
  faHandsHelping,
  faMagic
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Top() {
  return (
    <Hero gradient color="info" size="fullheight-with-navbar">
      <Hero.Body>
        <Container fluid>
          <Title>We build magical user experiences</Title>
          <Title as="h4" subtitle>
            Interactive Websites and Desktop/Mobile Apps
          </Title>
          <p>
            We use our proactive ballpark figures to dynamically manage our
            vertical expectations. Our emerging market development lifecycle
            enables holistic, mission critical milestones.
          </p>
          <p>
            Change the way you do business - adopt senior big datas. In the
            synergy space, industry is strategically investing its company-wide
            dot-bombs.
          </p>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

function About() {
  return (
    <Section size="large">
      <Column.Group>
        <Column textAlign="centered" size={8} offset={2}>
          <Title>Hello!</Title>
          <p>
            We are{" "}
            <img
              src="/static/img/logo/full.png"
              alt="RSTLSS"
              style={{ height: "1.5em", position: "relative", top: "7px" }}
            />{" "}
            - an <strong>alliance</strong> of{" "}
            <strong>passionate creatives</strong>, based out of{" "}
            <strong>London</strong>.
          </p>
          <Block />
          <p>
            We <strong>work together</strong> to forge{" "}
            <strong>engaging media</strong>, <strong>bold brands</strong> and
            <strong>magical user experiences</strong>.
          </p>
          <Block />
          <p>
            We use <strong>collaboration</strong>, <strong>creativity</strong>,
            and <strong>the latest and greatest in digital innovation.</strong>
          </p>
        </Column>
      </Column.Group>
    </Section>
  );
}

function Philosophy() {
  const values = [
    {
      title: "Attention to Detail",
      description:
        "In the ballpark figure space, industry is globally calibrating its customer-focused brands. Ethically touching base about integrating game changers will make us leaders in the wholesale stakeholder industry.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faPencilRuler,
      iconColor: "grey"
    },
    {
      title: "UK Talent",
      description:
        "In the ballpark figure space, industry is globally calibrating its customer-focused brands. Ethically touching base about integrating game changers will make us leaders in the wholesale stakeholder industry.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faFistRaised,
      iconColor: "grey"
    },
    {
      title: "We Focus on Growth",
      description:
        "We focus on meeting every client's specific needs and priorities in order to maximise the benefit our work has on their growth. We go the extra mile to make sure we understand our clients' audiences, and to make sure that we are meeting both their expectations and their needs.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faChartLine,
      iconColor: "grey"
    }
  ];

  const values2 = [
    {
      title: "We Care About Your Audience",
      description:
        "In the ballpark figure space, industry is globally calibrating its customer-focused brands. Ethically touching base about integrating game changers will make us leaders in the wholesale stakeholder industry.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faMagic,
      iconColor: "grey"
    },
    {
      title: "Magic",
      description:
        "In the ballpark figure space, industry is globally calibrating its customer-focused brands. Ethically touching base about integrating game changers will make us leaders in the wholesale stakeholder industry.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faMagic,
      iconColor: "grey"
    },
    {
      title: "Long Term Support",
      description:
        "In the ballpark figure space, industry is globally calibrating its customer-focused brands. Ethically touching base about integrating game changers will make us leaders in the wholesale stakeholder industry.",
      image: "/static/img/backdrops/annie-spratt-253797-unsplash-1080p.jpg",
      icon: faHandsHelping,
      iconColor: "grey"
    }
  ];

  return (
    <div>
      <Section backgroundColor="success" textColor="light">
        <Column.Group>
          <Column size={10} offset={1}>
            <Container textAlign="centered">
              <Title textColor="light">Philosophy & Values</Title>

              <Block />
              <p>
                At <strong style={{ color: "white" }}>RSTLSS</strong> we have a{" "}
                <strong style={{ color: "white" }}>strong commitment</strong> to
                our{" "}
                <strong style={{ color: "white" }}>
                  philosophy and values
                </strong>
                , which influence everything we do.
              </p>
              <Block />
              <p>
                With{" "}
                <strong style={{ color: "white" }}>
                  over a decade and a half
                </strong>
                's experience in the creative industry, we have{" "}
                <strong style={{ color: "white" }}>learned a lot</strong> about
                what it takes{" "}
                <strong style={{ color: "white" }}>
                  {" "}
                  to be successful in today's digital age:
                </strong>
              </p>
            </Container>
          </Column>
        </Column.Group>
        <PhilosophyCards values={values} />
      </Section>
      <Section backgroundColor="success" textColor="light" textAlign="centered">
        <PhilosophyCards values={values2} />
        <p>
          Find out more about the services we offer{" "}
          <Link href="/services">
            <a>here</a>
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}

type Value = {
  title: string;
  description: string;
  icon: Element;
  iconColor: string;
  image?: string;
};

function PhilosophyCards(props) {
  const { values } = props;
  return (
    <Column.Group>
      {map(value => (
        <Column size={4}>
          <Card>
            <Card.Content textAlign="centered">
              <Icon
                textColor={value.iconColor}
                size="large"
                style={{ marginTop: "30px", marginBottom: "15px" }}
              >
                <FontAwesomeIcon
                  textAlign="centered"
                  size="5x"
                  icon={value.icon}
                />
              </Icon>
              <Title>{value.title}</Title>
              {value.description}
            </Card.Content>
          </Card>
        </Column>
      ))(values)}
    </Column.Group>
  );
}

function Quote(props) {
  const {
    backgroundColor = "white",
    textColor = "dark",
    size = "large",
    quote = ""
  } = props;
  return (
    <Section
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
    >
      <Column.Group>
        <Column size={8} offset={2}>
          <Title subtitle size={4} textAlign="centered" textColor={textColor}>
            "{quote}"
          </Title>
        </Column>
      </Column.Group>
    </Section>
  );
}

export const Home = {
  Top,
  About,
  Philosophy,
  Quote
};

export default () => (
  <Layout>
    <Home.Top />
    <Home.Quote
      quote="We're seriously impressed. You delivered everything we asked for and more."
      size="small"
      backgroundColor="black"
      textColor="light"
    />
    <Home.About />
    <Home.Quote
      quote="It has been an absolute pleasure working with you guys. Smashing work."
      size="large"
      backgroundColor="black"
      textColor="light"
    />
    <Home.Philosophy />
    <Home.Quote
      quote="Wow! We love it, and I think [our customers] will love it even more."
      size="small"
      backgroundColor="black"
      textColor="light"
    />
  </Layout>
);
