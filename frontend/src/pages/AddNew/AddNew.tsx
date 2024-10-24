import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InputField from "../../components/inputField";
import generatePassword from "generate-password";
import Layout from "../../components/Layout/Layout";
import Logo from "../../assets/images/Logo.svg";
import "./addNew.scss";

type Props = {};

const AddNew: React.FC<Props> = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const generateRandomPassword = () => {
    const password = generatePassword.generate({
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
    });
    setPassword(password);
  };

  const handleSubmit = () => {
    console.log("Submitting", { url, username, password });
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
        <InputField label="URL" value={url} onChange={(e) => setUrl(e.target.value)} inputClassName="url-input" />
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
