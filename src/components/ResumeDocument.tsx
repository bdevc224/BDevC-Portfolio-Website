import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles with proper typing
const styles = StyleSheet.create({
  page: { 
    backgroundColor: "#fff", 
    padding: 30 
  },
  section: { 
    marginBottom: 10 
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold" as "bold", 
    marginBottom: 10 
  },
  subHeader: { 
    fontSize: 18, 
    fontWeight: "bold" as "bold", 
    marginBottom: 5 
  },
  text: { 
    fontSize: 12, 
    marginBottom: 3 
  },
});

// Resume Document Component
const ResumeDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={styles.header}>BDev.C</Text>
        <Text style={styles.text}>Frontend Web Developer</Text>
        <Text style={styles.text}>
          bdevc224@gmail.com | +234 916 622 6690 | Remote Developer (Based in Nigeria)
        </Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Professional Summary</Text>
        <Text style={styles.text}>
          Passionate frontend developer specializing in creating modern, responsive and unique web experiences 
          using React, TypeScript and Tailwind CSS. Focused on clean code, user-friendly designs, and delivering 
          fast, accessible websites that drive business growth.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Technical Skills</Text>
        <Text style={styles.text}>
          React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Git/GitHub, 
          Responsive Design.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Soft Skills</Text>
        <Text style={styles.text}>
          Communication, Problem Solving, Creativity, Innovation, Video Editing, Project Management
        </Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Professional Experience</Text>
        
        <Text style={styles.text}>Frontend Developer - Freelance (2025)</Text>
        <Text style={styles.text}>- Developed responsive websites and landing pages</Text>
        <Text style={styles.text}>- Implemented modern UI/UX designs with React and Tailwind CSS</Text>
        <Text style={styles.text}>- Optimized website performance and accessibility</Text>
        
        <Text style={styles.text}>Video Editor - Freelance (2022 - Present)</Text>
        <Text style={styles.text}>- Created engaging video content for portfolios social media and skit makers</Text>
        <Text style={styles.text}>- Edited promotional videos and demo reels</Text>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Notable Projects</Text>
        
        <Text style={styles.text}>Portfolio Website</Text>
        <Text style={styles.text}>- Built with React, TypeScript, and Tailwind CSS</Text>
        <Text style={styles.text}>- Features custom animations and responsive design</Text>
        <Text style={styles.text}>- Integrated interactive chatbot assistant</Text>
        
        <Text style={styles.text}>Real Estate Landing Page</Text>
        <Text style={styles.text}>- Modern landing page for real estate businesses</Text>
        <Text style={styles.text}>- Responsive design with optimized performance</Text>
        
        <Text style={styles.text}>Responsive Car Dealer's Portfolio Website</Text>
        <Text style={styles.text}>- Modern Car dealer's portfolio website based in Abuja Nigeria</Text>
        <Text style={styles.text}>- Easy communication with the car dealer and engaging user interfaces</Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Education & Certifications</Text>
        <Text style={styles.text}>Self-Taught Developer - Online Courses & Practical Projects (2019 - Present)</Text>
        <Text style={styles.text}>- React.js, JavaScript, and modern web development</Text>
        <Text style={styles.text}>- Responsive design and web performance optimization</Text>
        <Text style={styles.text}>- Version control with Git and GitHub</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Contact & Links</Text>
        <Text style={styles.text}>Email: bdevc224@gmail.com</Text>
        <Text style={styles.text}>Phone: +234 916 622 6690</Text>
        <Text style={styles.text}>GitHub: github.com/bdevc224</Text>
        <Text style={styles.text}>LinkedIn: linkedin.com/in/b-dev-c-585a34307</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;