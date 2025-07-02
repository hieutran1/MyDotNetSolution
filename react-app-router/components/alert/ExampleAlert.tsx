import Button from "components/button/Button";
import { useState } from "react";
import Alert from "./Alert";
import AlertTitle from "./AlertTitle";
import AlertDescription from "./AlertDescription";
import AlertActions from "./AlertActions";
import AlertBody from "./AlertBody";
import Input from "components/input/Input";
import Label from "components/fieldset/Label";
import { Subheading } from "../heading";

export default function ExampleAlert() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Subheading>Alert Example</Subheading>
            <Button type="button" onClick={() => setIsOpen(true)}>
                Refund payment
            </Button>
            <Alert open={isOpen} onClose={setIsOpen}>
                <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
                <AlertDescription>
                    The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Refund</Button>
                </AlertActions>
            </Alert>

            <Subheading>With body and auto focus</Subheading>
            <Button type="button" onClick={() => setIsOpen(true)}>
                Delete repository
            </Button>
            <Alert open={isOpen} onClose={setIsOpen} size="sm">
                <AlertTitle>Verification required</AlertTitle>
                <AlertDescription>To continue, please enter your password.</AlertDescription>
                <AlertBody>
                    <Input autoFocus name="password" type="password" aria-label="Password" placeholder="•••••••" />
                </AlertBody>
                <AlertActions>
                    <Button plain onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Continue</Button>
                </AlertActions>
            </Alert>
        </>
    );
}