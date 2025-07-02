import Button from "components/button/Button"
import { useState } from "react"
import DialogTitle from "./DialogTitle"
import Dialog from "./Dialog"
import DialogDescription from "./DialogDescription"
import DialogBody from "./DialogBody"
import Field from "components/fieldset/Field"
import Label from "components/fieldset/Label"
import Input from "components/input/Input"
import DialogActions from "./DialogActions"
import { Subheading } from "../heading"

export default function ExampleDialog() {
    let [isOpen, setIsOpen] = useState(false);
    let [isOpenDialogWithScrollingContent, setIsOpenDialogWithScrollingContent] = useState(false);

    return (
        <>
            <Subheading>Basic dialog</Subheading>
            <Button type="button" onClick={() => setIsOpen(true)}>
                Refund payment
            </Button>
            <Dialog open={isOpen} onClose={setIsOpen}>
                <DialogTitle>Refund payment</DialogTitle>
                <DialogDescription>
                    The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
                </DialogDescription>
                <DialogBody>
                    <Field>
                        <Label>Amount</Label>
                        <Input name="amount" placeholder="$0.00" />
                    </Field>
                </DialogBody>
                <DialogActions>
                    <Button plain onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Refund</Button>
                </DialogActions>
            </Dialog>

            <Subheading>With scrolling content</Subheading>
            <Button type="button" onClick={() => setIsOpen(true)}>
                Agree to terms
            </Button>
            <Dialog open={isOpenDialogWithScrollingContent} onClose={setIsOpenDialogWithScrollingContent} size="xl">
                <DialogTitle>Terms and conditions</DialogTitle>
                <DialogDescription>Please agree to the following terms and conditions to continue.</DialogDescription>
                <DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
                    <p className="mt-4">
                        By accessing and using our services, you are agreeing to these terms, which have been meticulously tailored
                        for our benefit and your compliance.
                    </p>
                    <h3 className="mt-6 font-bold">Comprehensive Acceptance of Terms</h3>
                    <p className="mt-4">
                        Your engagement with our application signifies your irrevocable acceptance of these terms, which are binding
                        regardless of your awareness or understanding of them. Your continued use acts as a silent nod of agreement
                        to any and all stipulations outlined herein.
                    </p>

                    <h3 className="mt-6 font-bold">Limitation of Liability</h3>
                    <p className="mt-4">
                        We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your
                        use of our services. This includes, but is not limited to, any loss of data, revenue, or goodwill that may
                        occur as a result of your engagement with our application.
                    </p>

                    <h3 className="mt-6 font-bold">Indemnification</h3>
                    <p className="mt-4">
                        You agree to indemnify and hold us harmless from any claims, losses, or damages, including legal fees, that
                        may arise from your use of our services or your violation of these terms.
                    </p>

                    <h3 className="mt-6 font-bold">Governing Law</h3>
                    <p className="mt-4">
                        These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we
                        operate, without regard to its conflict of law principles. Any disputes arising from these terms shall be
                        resolved in the courts of that jurisdiction.
                    </p>
                    <h3 className="mt-6 font-bold">Changes to Terms</h3>
                    <p className="mt-4">
                        We reserve the right to modify these terms at any time without prior notice. Your continued use of our services
                        after any changes constitutes your acceptance of the new terms. It is your responsibility to review these terms
                        periodically for any updates or changes.
                    </p>
                    <h3 className="mt-6 font-bold">Contact Information</h3>
                    <p className="mt-4">
                        If you have any questions or concerns regarding these terms, please contact us at
                        <a href="mailto:admin@example.com" className="text-blue-500 hover:underline">
                        </a>
                    </p>

                </DialogBody>
                <DialogActions>
                    <Button plain onClick={() => setIsOpenDialogWithScrollingContent(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setIsOpenDialogWithScrollingContent(false)}>I agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}   