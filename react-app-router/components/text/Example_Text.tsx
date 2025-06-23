import Strong from "./Strong";
import Text from "./Text";
import TextLink from "./TextLink";

export default function Example_Text() {
    return (
        <Text>
            This feature is only available to users on the <Strong>Business Plan</Strong>. To upgrade, visit your{' '}
            <TextLink href="#">billing settings</TextLink>.
        </Text>
    );
}