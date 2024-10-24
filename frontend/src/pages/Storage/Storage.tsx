import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Logo from "../../assets/images/Logo.svg";
import InputGroup from "../../components/inputGroup"; 
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import InputField from "../../components/inputField";
import "./storage.scss";

export interface PasswordEntry {
  id: number;
  url: string;
  password: string;
}

const Storage: React.FC = () => {
    const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
    const [selectedPassword, setSelectedPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleNewMyPG = () => {
        navigate("/addNew");
    };

    const handleEdit = (id: number) => {
        console.log(`Editing password with ID: ${id}`);
    };

    const handleShowPassword = (password: string) => {
        setSelectedPassword(password);
    };

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const dummyPasswords: PasswordEntry[] = [
        { id: 1, url: "https://example.com", password: "password1" },
        { id: 2, url: "https://mywebsite.org", password: "password2" },
        { id: 3, url: "https://secure.com", password: "password3" }
    ];

    useEffect(() => {
        setPasswords(dummyPasswords);
    }, []);

    return (
        <Layout
            logo={<img src={Logo} alt="Logo" className="storage-logo" />}
            title="MY-PG"
            headerId="storage-header"
            titleClassName="storage-title"
            buttonLabel="NEW MY-PG"
            onButtonClick={handleNewMyPG}
        >
            <Box className="storage-container">
                <InputGroup 
                    passwords={passwords}
                    onEdit={handleEdit}
                    onShowPassword={handleShowPassword}
                    toggleShowPassword={toggleShowPassword}
                    showPassword={showPassword} 
                    groupClassName="input-group" 
                />
                <Box className="external-box">
                    <InputField
                        label="SECURED PASSWORD"
                        value={showPassword ? selectedPassword : "•".repeat(selectedPassword.length)}
                        onChange={() => {}} 
                        onCopy={() => navigator.clipboard.writeText(selectedPassword)}
                        inputClassName="passStored-input"
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default Storage;
