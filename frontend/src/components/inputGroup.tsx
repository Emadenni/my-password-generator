import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import { PasswordEntry } from '../pages/Storage/Storage';
import InputField from './inputField';

interface InputGroupProps {
    passwords: PasswordEntry[];
    onEdit: (id: number) => void;
    onShowPassword: (password: string) => void;
    toggleShowPassword: () => void;
    showPassword: boolean;
    groupClassName?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ passwords, onEdit, onShowPassword, toggleShowPassword, showPassword, groupClassName }) => {
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
                        onClick={() => onShowPassword(entry.password)} 
                        inputClassName="stored-input"
                    />
                    <IconButton onClick={() => onEdit(entry.id)}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
};

export default InputGroup;
