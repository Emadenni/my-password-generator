import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Layout from "../../components/Layout/Layout";
import Logo from "../../assets/images/Logo.svg";
import InputField from "../../components/inputField";
import "./addNew.scss";

type Props = {};

const AddNew: React.FC<Props> = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const generateRandomPassword = () => {
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const allChars = specialChars + upperChars + lowerChars + numbers;

    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    // Garantisce che la password contenga almeno un carattere di ciascun tipo
    newPassword =
      specialChars[Math.floor(Math.random() * specialChars.length)] +
      upperChars[Math.floor(Math.random() * upperChars.length)] +
      lowerChars[Math.floor(Math.random() * lowerChars.length)] +
      numbers[Math.floor(Math.random() * numbers.length)] +
      newPassword.slice(4);

    setPassword(newPassword);
  };

  const handleBack = () => {};

  return (
    <Layout
      logo={<img src={Logo} alt="Logo" />}
      title="MY-PG"
      buttonLabel="CREATE MY_PG"
      onButtonClick={handleBack}
      headerId="addNew-header"
      titleClassName="storage-title"
    >
      <Box className="add-new-container">
        <h2 className="addNew-subtitle">
          NEW SECURE <br /> CREDENTIALS
        </h2>
        <InputField
          label="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          inputClassName="url-input"
        />
        <InputField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          inputClassName="username-input"
        />
        <InputField
          label="Password"
          value={password}
          onChange={() => {}}
          onGenerate={generateRandomPassword}
          inputClassName="password-input"
        />
        <Typography variant="body2" sx={{ fontSize: "1.2rem", fontWeight: 500 }} className="password-rules">
          # @ 123 Aa <span>pwnd</span>
        </Typography>
      </Box>
    </Layout>
  );
};

export default AddNew;
