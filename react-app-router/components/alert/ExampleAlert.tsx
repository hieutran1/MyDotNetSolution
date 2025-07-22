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
import DemoComponent from "../DemoComponent";

export default function ExampleAlert() {
    let [isOpen, setIsOpen] = useState(false);
    let [isOpenWithAlertBody, setIsOpenWithAlertBody] = useState(false);

    return (
        <>
            <DemoComponent heading="Alert Example">
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
            </DemoComponent>

            <DemoComponent heading="With body and auto focus">
                <Button type="button" onClick={() => setIsOpenWithAlertBody(true)}>
                    Delete repository
                </Button>
                <Alert open={isOpenWithAlertBody} onClose={setIsOpenWithAlertBody} size="sm">
                    <AlertTitle>Verification required</AlertTitle>
                    <AlertDescription>To continue, please enter your password.</AlertDescription>
                    <AlertBody>
                        <Input autoFocus name="password" type="password" aria-label="Password" placeholder="•••••••" />
                    </AlertBody>
                    <AlertActions>
                        <Button plain onClick={() => setIsOpenWithAlertBody(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpenWithAlertBody(false)}>Continue</Button>
                    </AlertActions>
                </Alert>
            </DemoComponent>
        </>
    );
}