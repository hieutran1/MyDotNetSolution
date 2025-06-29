# Layouts

1. Sidebar layout
    + First sidebars are cool, then they're dated, then they're cool again — I think they're cool right now though so we built you this one.

    - `SidebarLayout` extends the JSX `<div>` element
        + `sidebar`: The `Sidebar` menu for all screen sizes
        + `navbar`: The `Navbar` menu for mobile screen sizes
        + `children`: The page content

2. Stacked layout
    + You don't have enough features to fill a sidebar anyway, plus they aren't going to be cool forever.

    - `StackedLayout` extends the JSX <div> element
        + `sidebar`: The `Sidebar` menu for all screen sizes
        + `navbar`: The `Navbar` menu for mobile screen sizes
        + `children`: The page content

3. Auth layout
    - `AuthLayout` extends the JSX `<main>` element
        + `children`: The page content
