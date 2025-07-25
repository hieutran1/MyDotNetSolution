import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    // route("about", "routes/about.tsx"),
    // route("contact", "routes/contact.tsx"),

    // index("../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),
    // route("layouts/sidebar", "../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),
    // route("layouts/sidebar/*", "../layouts/sidebar-layout/ExampleSidebarLayout.tsx"),
    route("layouts/stacked", "../layouts/stacked-layout/ExampleStackedLayout.tsx"),

    route("auth/login", "../layouts/auth-layout/pages/LoginPage.tsx"),
    route("auth/register", "../layouts/auth-layout/pages/RegistrationPage.tsx"),
    route("auth/forgot-password", "../layouts/auth-layout/pages/ForgotPasswordPage.tsx"),

    layout("../layouts/sidebar-layout/ExampleSidebarLayout.tsx", [
        route("components/alert", "../components/alert/ExampleAlert.tsx"), //done
        route("components/avatar", "../components/avatar/ExampleAvatar.tsx"), //done

        route("components/badge", "../components/badge/ExampleBadge.tsx"), //done

        route("components/button", "../components/button/ExampleButton.tsx"), // done partial
        route("components/checkbox", "../components/checkbox/ExampleCheckbox.tsx"), //done, 20 solid colors

        route("components/combobox", "../components/combobox/ExampleCombobox.tsx"), // done

        route("components/description-list", "../components/description-list/ExampleDescriptionList.tsx"), //done

        route("components/dialog", "../components/dialog/ExampleDialog.tsx"), //done

        route("components/divider", "../components/divider/ExampleDivider.tsx"), //done

        route("components/dropdown", "../components/dropdown/ExampleDropdown.tsx"), //done
        route("components/fieldset", "../components/fieldset/ExampleFieldset.tsx"), //done

        route("components/heading", "../components/heading/ExampleHeading.tsx"), //done
        route("components/input", "../components/input/ExampleInput.tsx"), //done
        route("components/listbox", "../components/listbox/ExampleListbox.tsx"), //done

        route("components/navbar", "../components/navbar/ExampleNavbar.tsx"), // done

        route("components/pagination", "../components/pagination/ExamplePagination.tsx"), //done
        route("components/radio", "../components/radio/ExampleRadio.tsx"), // done, 20 solid colors
        route("components/select", "../components/select/ExampleSelect.tsx"), //done

        route("components/sidebar", "../components/sidebar/ExampleSidebar.tsx"), //done

        route("components/switch", "../components/switch/ExampleSwitch.tsx"), // done, 20 solid colors

        route("components/table", "../components/table/ExampleTable.tsx"), //done

        route("components/text", "../components/text/ExampleText.tsx"), //done
        route("components/textarea", "../components/textarea/ExampleTextarea.tsx"), //done
    ]),
    layout("../demo/layouts/DemoSidebarLayout.tsx", [
        route("demo", "../demo/pages/Home.tsx"), //Home
        route("demo/events", "../demo/pages/Events.tsx"),
        route("demo/orders", "../demo/pages/Orders.tsx"),
        route("demo/settings", "../demo/pages/Settings.tsx"),
    ])

] satisfies RouteConfig;
