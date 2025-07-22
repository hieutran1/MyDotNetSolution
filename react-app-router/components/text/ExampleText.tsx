import DemoComponent from "../DemoComponent";
import Code from "./Code";
import Strong from "./Strong";
import Text from "./Text";
import TextLink from "./TextLink";

export default function ExampleText() {
    return (
        <>
            <DemoComponent heading="Basic">
                <Text>
                    This feature is only available to users on the <Strong>Business Plan</Strong>. To upgrade, visit your{' '}
                    <TextLink href="#">billing settings</TextLink>.
                </Text>
            </DemoComponent>

            <DemoComponent heading="With code">
                <Text>
                    Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token somewhere safe as it will only be displayed
                    once.
                </Text>
            </DemoComponent>
        </>
    );
}