import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = '';
  
  export const Email = ({
    userFirstName,
    duration,
    meetingTime,
    date,
    meetingUrl,
    businessName
  }) => {
  
    return (
      <Html>
        <Head />
        <Preview>MeetHub - BookingMeeting</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img src="" />
            </Section>

            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  height={100}
                  src=""
                />
              </Row>

              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#FFFFFF", 
                    }}
                  >
                    Hi {userFirstName},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#FFFFFF", 
                    }}
                  >
                    Thank you for booking a meeting with {businessName},
                  </Heading>
                  <Text style={paragraph}>
                    Ready or not, here comes the meeting details:
                  </Text>
                  <Text style={paragraph}>
                    <b>Time: </b>
                    {meetingTime}
                  </Text>
                  <Text style={paragraph}>
                    <b>Date: </b>
                    {date}
                  </Text>
                  <Text style={paragraph}>
                    <b>Location: </b>
                    {meetingUrl}
                  </Text>
                  <Text style={paragraph}>
                    <b>Duration: </b>
                    {duration}
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 14,
                    }}
                  >
                    *Please Join meeting on above details {meetingUrl}
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton} colSpan={2}>
                  <Button style={button}>Join Now</Button>
                </Column>
              </Row>
            </Section>

            <Section style={containerImageFooter}>
              <Img style={image} width={620} height={100} src="" />
            </Section>

            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "#FFFFFF",
              }}
            >
              © 2024 | Meethub Inc., 123 Meeting Avenue, CA 94105, U.S.A. |
              www.meethub.com
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default Email;
  
  const main = {
    backgroundColor: "#1b1b1b", // Fondo oscuro
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
    color: "#000", // Texto en blanco
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#ffa31a", 
    borderRadius: 3,
    color: "#000", 
    fontWeight: "bold",
    border: "1px solid #000",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(128, 128, 128)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  
