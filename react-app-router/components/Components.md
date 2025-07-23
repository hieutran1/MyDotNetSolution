# Components
- Flags: https://flagpack.xyz/docs/development/react/
- Refactor UI: https://www.refactoringui.com/?ref=sidebar
- Application UI: https://tailwindcss.com/plus/ui-blocks/application-ui
- Catalyst (TailwindUI components): https://catalyst.tailwindui.com/docs/alert

1. Alert
    + You'll still get emails from people who accidentally deleted their account, but at least you tried.

    - `Alert` extends Headless UI `<Dialog>` component
    - `AlertTitle` Headless UI `<DialogTitle>` component
    - `AlertDescription` extends the Headless UI `<Description>` component
    - `AlertBody` extends the JSX `<div>` element
    - `AlertActions` extends the JSX `<div>` element

2. Avatar
    + It's more than just an image with a border radius.

    - `Avatar` extends the JSX `<span>` element
    - `AvatarButton` extends the Headless UI `Button` component or the `Link` component

3. Badge
    + Eventually this custom CMS you're probably building is going to need tags.

    - `Badge` extends the JSX `<span>` element
    - `BadgeButton` extends the Headless UI `Button` component or the `Link` component

4. Button
    + You know, those things you click to do just about anything in a web application.

    - `Button` extends the Headless UI `Button` component or the `Link` component

5. Checkbox
    + People need to be able to accept the terms and conditions they don't read somehow.

    - `Checkbox` extends the Headless UI `<Checkbox>` component
    - `CheckboxField` extends the Headless UI `<Field>` component
    - `CheckboxGroup` extends the JSX `<div>` element

6. Combobox
    + For when you know exactly what you want, but are too lazy to scroll for it.

    - `Combobox` extends the Headless UI `<Combobox>` component
    - `ComboboxOption` extends the Headless UI `<ComboboxOption>` component
    - `ComboboxLabel` extends the JSX `<span>` element
    - `ComboboxDescription` extends the JSX `<span>` element

7. Description list
    + For when you need to take the data from just one table row and somehow turn it into its own entire table to keep the page from feeling too empty.

    - `DescriptionList` extends the JSX `<dl>` element
    - `DescriptionTerm` extends the JSX `<dt>` element
    - `DescriptionDetails` extends the JSX `<dd>` element

8. Dialog
    + Back in my day we used to just put this sort of content on a separate page.

    - `Dialog` extends the Headless UI `<Dialog>` component
    - `DialogTitle` extends the Headless UI `<DialogTitle>` component
    - `DialogDescription` extends the Headless UI `<Description>` component
    - `DialogBody` extends the JSX `<div>` element
    - `DialogActions` extends the JSX `<div>` element

9. Divider
    + It's a line.

    - `Divider` extends the JSX `<hr>` element

10. Dropdown
    + Probably the number one reason you're looking for a UI kit in the first place.

    - `Dropdown` extends the Headless UI `<Menu>` component
        + `children`: The dropdown button and menu
    - `DropdownButton` extends the `<Button>` component
    - `DropdownMenu` extends the Headless UI `<MenuItems>` component
        + `children`: The dropdown items and sections
    - `DropdownItem` extends the Headless UI `<MenuItem>` component
        + `children`: The dropdown item text
    - `DropdownHeader` extends the JSX `<div>` element
    - `DropdownSection` extends the Headless UI `<MenuSection>` component
    - `DropdownHeading` extends the Headless UI `<MenuHeading>` component
    - `DropdownDivider` extends the Headless UI `<MenuSeparator>` component
    - `DropdownLabel` extends the Headless UI `<Label>` component
    - `DropdownDescription` extends the Headless UI `<Description>` component
    - `DropdownShortcut` extends the Headless UI `<Description>` component

11. Fieldset
    + Something has to hold all these form controls together.

    - `Fieldset` extends the JSX `<div>` element
    - `Legend` extends the JSX `<div>` element
    - `FieldGroup` extends the JSX `<div>` element
    
    - `Field` extends the Headless UI `<Field>` component
    - `Label` extends the Headless UI `<Label>` component
    - `Description` extends the Headless UI `<Description>` component
    - `ErrorMessage` extends the Headless UI `<Description>` component

12. Heading
    + You get two — we're building applications here, not authoring medical journals.

    - `Heading` extends the JSX `<h1>` element
    - `Subheading` extends the JSX `<h2>` element

13. Input
    + If web applications didn't need inputs, computers wouldn't have keyboards.

    - `Input` extends the Headless UI `<Input>` component
    - `InputGroup` extends `<div>`

14. Listbox
    + A painstakingly re-engineered select menu, just so you can put a flag in it or have a placeholder.

    - `Listbox` extends the Headless UI `<Listbox>` component
    - `ListboxOption` extends the Headless UI `<ListboxOption>` component
    - `ListboxLabel` extends the JSX `<span>` element
    - `ListboxDescription` extends the JSX `<span>` element

15. Navbar
    + No one ever got fired for starting a website with a horizontal navigation menu.

    - `Navbar` extends the JSX `<div>` element
    - `NavbarDivider` extends the JSX `<div>` element
    - `NavbarSection` extends the JSX `<div>` element
    - `NavbarSpacer` extends the JSX `<div>` element
    - `NavbarItem` extends the Headless UI `Button` component or the `Link` component
    - `NavbarLabel` extends the JSX `<span>` element

16. Pagination
    + Because if anyone actually uses this app you're working on, your data isn't going to fit on a single page for long.

    - `Pagination` extends the JSX `<nav>` element
    - `PaginationPrevious` extends the JSX `<a>` element
    - `PaginationNext` extends the JSX `<a>` element
    - `PaginationList` extends the JSX `<span>` element
    - `PaginationPage` extends the JSX `<a>` element
    - `PaginationGap` extends the JSX `<span>` element
    
17. Radio
    + With multiple choice, you've always got a chance at getting the right answer.

    - `RadioGroup` extends the Headless UI `<RadioGroup>` component
    - `Radio` extends the Headless UI `<Radio>` component
    - `RadioField` extends the Headless UI `<Field>` component

18. Select
    + Not a component I’d recommend using for a password field.

    - `Select` extends the Headless UI `<Select>` component

19. Sidebar
    + When you need to move from a horizontal nav to a sidebar, you know your app is all grown up.

    - `Sidebar` extends the JSX `<nav>` element
    - `SidebarHeader` extends the JSX `<div>` element
    - `SidebarBody` extends the JSX `<nav>` element
    - `SidebarFooter` extends the JSX `<div>` element
    - `SidebarSection` extends the JSX `<div>` element
    - `SidebarDivider` extends the JSX `<hr>` element
    - `SidebarSpacer` extends the JSX `<div>` element
    - `SidebarHeading` extends the JSX `<div>` element
    - `SidebarItem` extends the Headless UI `Button` component or the `Link` component
    - `SidebarLabel` extends the JSX `<span>` element

20. Switch
    + It's basically just a fancy checkbox, let's not kid ourselves

    - `Switch` extends the Headless UI `<Switch>` component
    - `SwitchField` extends the Headless UI `<Field>` component
    - `SwitchGroup` extends the JSX `<div>` element

21. Table
    + If you can put it in a database, you can put it in a table

    - `Table` extends the JSX `<table>` element
    - `TableHead` extends the JSX `<thead>` element
    - `TableBody` extends the JSX `<tbody>` element
    - `TableRow` extends the JSX `<tr>` element
    - `TableHeader` extends the JSX `<th>` element
    - `TableCell` extends the JSX `<td>` element

22. Text
    - `Text` extends the JSX `<p>` element
    - `TextLink` extends the Headless UI `<Link>` component
    - `Strong` extends the JSX `<strong>` element
    - `Code` extends the JSX `<code>` element

23. Textarea
    + For the times when you really just have a lot to say.

    - `Textarea` extends the Headless UI `<Textarea>` component