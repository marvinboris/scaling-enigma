import React, { useState } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';
import { checkValidity } from '../../../shared/utility';

export default ({ icon, addon, onChange, className = '', name, type = 'text', required, readonly, placeholder, value = '', validation = {}, append, children }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    return <FormGroup className={className}>
        <InputGroup className="bg-white" size="lg">
            {addon ? <InputGroupAddon addonType="prepend">
                <InputGroupText className="bg-transparent border-light rounded-pill rounded-right-0 px-4">
                    {addon}
                </InputGroupText>
            </InputGroupAddon> : null}

            {children ?
                <CustomInput valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} id={name} name={name} required={required} readOnly={readonly} value={value} className={"bg-white rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder}>{children}</CustomInput>
                :
                <Input valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-transparent rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder} />
            }

            {append ? <InputGroupAddon addonType="append">
                <InputGroupText className="bg-transparent border-0 text-secondary text-small px-4">
                    {append}
                </InputGroupText>
            </InputGroupAddon> : null}
        </InputGroup>
    </FormGroup>;
};