import Divider from "./Divider";

export default function ExampleDivider() {
    return (
        <>
            <h2>Divider</h2>
            <p>Use dividers to separate content in a list or menu.</p>

            <h3>Basic Divider</h3>
            <p>Use a divider to separate sections of content.</p>
            <Divider />

            <h3>Soft Divider</h3>
            <p>A softer divider for less emphasis.</p>
            <Divider soft />
        </>
    );
}