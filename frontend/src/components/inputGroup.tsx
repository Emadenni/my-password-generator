import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff, Edit } from '@mui/icons-material';
import InputField from '../components/inputField'; 

interface PasswordEntry {
    id: number;
    url: string;
    password: string;
}

interface InputGroupProps {
    passwords: PasswordEntry[];
    onEdit: (id: number) => void;
    groupClassName? : string;
}

const InputGroup: React.FC<InputGroupProps> = ({ passwords, onEdit, groupClassName }) => {
    const [selectedPassword, setSelectedPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);
    const [clickedInput, setClickedInput] = useState<number | null>(null);

    const handleToggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSelectPassword = (password: string, id: number) => {
        setSelectedPassword(password);
        setClickedInput(id);
    };

    return (
        <Box className={groupClassName}>
            <Typography variant="h6">STORED PASSWORDS</Typography>
            {passwords.map((entry) => (
                <Box key={entry.id} display="flex" alignItems="center" className="inputs-box">
                    <InputField
                        label=""
                        value={entry.url}
                        type="text"
                        onChange={() => {}}
                        onClick={() => handleSelectPassword(entry.password, entry.id)}
                        inputClassName="stored-input"
                    />
                    <IconButton onClick={handleToggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    {clickedInput === entry.id && (
                        <IconButton onClick={() => onEdit(entry.id)}>
                            <Edit />
                        </IconButton>
                    )}
                </Box>
            ))}
            {selectedPassword && (
                <InputField
                    label="Play Inside"
                    value={showPassword ? selectedPassword : "•".repeat(selectedPassword.length)}
                    onChange={() => {}}
                    type="text"
                    inputClassName="play-inside-input"
                />
            )}
        </Box>
    );
};

export default InputGroup;
