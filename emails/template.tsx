import {
  Body,
  Text,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({
  fullName = "Eben",
  email = "soloeben12@gmail.com",
  message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sunt quidem accusamus iusto, aperiam dolores beatae commodi quos inventore voluptas?",
}) {
  return (
    <Html>
      <Head />
      <Preview>Message</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.title}>Message From Portfolio</Heading>
          <Text style={styles.text}>From: {fullName}</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Section style={styles.msgContainer}>
            <div style={styles.msg}>
              <Text style={styles.heading}>{message}</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "var(--font-ibm-plex-mono), sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#1f2937",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 20px",
  },
  heading: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 16px",
  },
  text: {
    color: "#4b5563",
    fontSize: "16px",
    margin: "0 0 16px",
  },

  msgContainer: {
    margin: "32px 0",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "5px",
  },
  msg: {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
};
