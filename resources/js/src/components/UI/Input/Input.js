import React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ icon, addon, onChange, className = '', name, type = 'text', required, readonly, placeholder, value = '', append, children }) => <FormGroup className={className}>
    <InputGroup className="bg-white" size="lg">
        {addon ? <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-transparent border-light rounded-pill rounded-right-0 px-4">
                {addon}
            </InputGroupText>
        </InputGroupAddon> : null}

        {children ?
            <Input onChange={onChange} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-white rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder}>{children}</Input>
            :
            <Input onChange={onChange} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-transparent rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder} />
        }

        {append ? <InputGroupAddon addonType="append">
            <InputGroupText className="bg-transparent border-0 text-secondary text-small px-4">
                {append}
            </InputGroupText>
        </InputGroupAddon> : null}
    </InputGroup>
</FormGroup>;