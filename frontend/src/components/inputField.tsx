import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, ContentCopy, Refresh } from '@mui/icons-material';

interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    onCopy?: () => void;
    onGenerate?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    value,
    onChange, 
    required = false,
    onCopy, 
    onGenerate
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <TextField 
            className="custom-textfield"
            label={label}
            type={showPassword ? 'text' : type} 
            variant='outlined'
            fullWidth
            margin='normal'
            value={value}
            onChange={onChange}
            required={required}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            {type === 'password' && (
                                <IconButton onClick={handleToggleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )}
                            {onCopy && (
                                <IconButton onClick={onCopy} edge="end">
                                    <ContentCopy />
                                </IconButton>
                            )}
                            {onGenerate && (
                                <IconButton onClick={onGenerate} edge="end">
                                    <Refresh />
                                </IconButton>
                            )}
                        </InputAdornment>
                    )
                }
            }}
        />
    );
};

export default InputField;
